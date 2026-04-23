import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import path from 'path';
import { products } from './schema';

const sqlitePath = path.join(process.cwd(), 'src', 'db', 'pizzeria.db');
const client = new Database(sqlitePath);

export const db = drizzle(client, { schema: { products } });
