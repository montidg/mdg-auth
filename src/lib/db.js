import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

let db; 

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

export {
    getDb,
    returnSuccess
};