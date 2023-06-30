import { setToken, returnSuccess } from '$lib/db.js';
import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, params, getClientAddress }) {
    const data = await request.text();
    
    let token = data.split('h-captcha-response=')[1];

    if (token.split('=').length > 1) token = token.split('=')[1];

    let succ = await fetch("https://hcaptcha.com/siteverify", {
        'method': 'POST',
        'headers': {
            'content-type': 'application/x-www-form-urlencoded'
        },
        'body': `response=${encodeURIComponent(token)}&secret=${encodeURIComponent(env.SECRET_KEY)}&sitekey=86a3e25d-bab3-4658-be33-dd03740e1122`
    }).then(x => x.json());

    console.log(succ);

    let type = params.type;

    if (!succ || !succ.success) throw redirect(302, '/account/captcha/'+type);

    setToken(getClientAddress(), token);

    throw redirect(302, '/account/'+type);
};