import Surreal from 'surrealdb.js';
import { DB_DATABASE, DB_HOST, DB_NAMESPACE, DB_PASSWORD, DB_USER } from '$env/static/private';

/**
 * Creates a new database connection.
 * Reauthenticating is required
 * @returns fresh database connection
 */
function getDatabase(): Surreal {
	const database = new Surreal();
	database.connect(DB_HOST);
	return database;
}

/**
 * local database connection
 * use `import { db } from '$lib/server/db';` to import the database connection
 */
export const db = getDatabase;

async function getRootDB(): Promise<Surreal> {
	const db = getDatabase();
	await db.signin({ username: DB_USER, password: DB_PASSWORD });
	await db.use({ namespace: DB_NAMESPACE, database: DB_DATABASE });
	return db;
}

export const rootDB = getRootDB;
