import { getDb, returnSuccess } from '$lib/db.js';
import { compare } from 'bcrypt'
import { randomBytes } from 'node:crypto';
let db;

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const data = await request.json();
    db = await getDb();

    if (!data || !data.token || !data.scope || !data.username) return returnSuccess('Data not found.');
    
    var match = await db.all('SELECT * FROM token WHERE token = ? AND username = ? AND scope = ?',[
        data.token,
        data.username,
        data.scope
    ]);

    return returnSuccess('next', match);
};