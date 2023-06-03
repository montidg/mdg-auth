import { getDb, returnSuccess } from '$lib/db.js';
import { hash } from 'bcrypt'
let db;

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, getClientAddress }) {
    const data = await request.json();
    db = await getDb();

    if (!data || !data.username || !data.password || !data.email || !data.password2) return returnSuccess('Data not found.');

    let {username, password, password2, email} = data;
    if (username.length > 32) return returnSuccess('Username too long.');

    if (password != password2) return returnSuccess('Passwords don\'t match.');

    var existingAccounts = await db.all('SELECT username FROM auth WHERE UPPER(username) LIKE UPPER(?)',[
        username
    ]);

    if (existingAccounts && existingAccounts.length > 0)
        return returnSuccess('Account already exists.');

    var passHash = await hash(password,10);

    await db.run('INSERT INTO auth (username, email, password, ip, root) VALUES (?, ?, ?, ?, ?)', [
        username,
        email,
        passHash,
        getClientAddress(),
        "false"
    ])

    return returnSuccess('next');
};