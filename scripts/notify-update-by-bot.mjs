import { env } from 'node:process';
import { api } from 'misskey-js';

const client = new api.APIClient({
  origin: env.SERVER_URL,
  credential: env.BOT_TOKEN,
});

const text = `
Voskey Docsが更新されました！
https://voskeydocs.icalo.net/
`.trim();

client.request('notes/create', { text });
