import type { APIRoute } from 'astro';
import { mkdir, appendFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { randomUUID } from 'node:crypto';

export const prerender = false;
const roles = ['CISO / Security leader', 'Security architect', 'IT / Infrastructure', 'Government / Acquisition', 'Other'];
const interests = ['Enterprise', 'Government', 'Technical architecture', 'Upcoming network version'];
const recent = new Map<string, number[]>();
export const POST: APIRoute = async ({ request, clientAddress }) => {
  const json = (body: object, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return json({ error: 'Please submit this form from this website.' }, 403);
  if (Number(request.headers.get('content-length') || 0) > 16000) return json({ error: 'Request is too large.' }, 413);
  const now = Date.now();
  for (const [key, times] of recent) if (times.every(t => now - t > 60000)) recent.delete(key);
  const address = clientAddress || 'local';
  const times = (recent.get(address) || []).filter(t => now - t < 60000);
  if (times.length >= 10) return json({ error: 'Too many requests. Please wait a minute before trying again.' }, 429);
  times.push(now); recent.set(address, times);
  let data: FormData;
  try { data = await request.formData(); } catch { return json({ error: 'Please submit a valid form.' }, 400); }
  const get = (name: string) => typeof data.get(name) === 'string' ? String(data.get(name)).trim() : '';
  if (get('website')) return json({ error: 'Unable to accept this submission.' }, 400);
  const firstName = get('firstName'), lastName = get('lastName'), email = get('email'), company = get('company'), role = get('role'), interest = get('interest'), message = get('message');
  if (!firstName || firstName.length > 80 || !lastName || lastName.length > 80 || !company || company.length > 160 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !roles.includes(role) || !interests.includes(interest) || message.length > 2000 || get('consent') !== 'yes') return json({ error: 'Please complete all required fields with valid information and agree to the request handling notice.' }, 400);
  const reference = 'CR-' + randomUUID().slice(0, 8).toUpperCase();
  const record = { reference, createdAt: new Date().toISOString(), firstName, lastName, email, company, role, interest, message, consent: true, delivery: 'local-only' };
  try {
    const directory = resolve(process.env.DEMO_DATA_DIR || '.data');
    await mkdir(directory, { recursive: true, mode: 0o700 });
    await appendFile(resolve(directory, 'demo-requests.jsonl'), JSON.stringify(record) + '\n', { mode: 0o600 });
  } catch { return json({ error: 'The request could not be saved. Please try again later.' }, 503); }
  if (!request.headers.get('accept')?.includes('application/json')) return new Response(null,{status:303,headers:{Location:'/request-received','Cache-Control':'no-store'}});
  return json({ reference, saved: true, delivery: 'local-only' }, 201);
};
