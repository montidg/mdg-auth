import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

let db; 
let tokens = {};

let getDb = async () => {
    if (!db) {
        db = await open({
            filename: `${process.cwd()}/db/main.db`,
            driver: sqlite3.Database
        });
        await db.run('CREATE TABLE IF NOT EXISTS auth (username TEXT, password TEXT, email TEXT, ip TEXT, root TEXT)')
        await db.run('CREATE TABLE IF NOT EXISTS token (username TEXT, token TEXT, scope TEXT)')
    } 
    return db;
};

let returnSuccess = (success, data) => {
    return new Response(JSON.stringify({success, data}));
}
let safeName = function (text) {
    return text.replaceAll(/[^A-Za-z0-9\-\_]/g, '');
}

let setToken = (ip,tok) => {
    tokens[ip] = tok; 
}

let getToken = (ip) => {
    let tok = tokens[ip];
    tokens[ip] = false;
    return tok;
}

export {
    getDb,
    returnSuccess,
    safeName,
    setToken,
    getToken
};