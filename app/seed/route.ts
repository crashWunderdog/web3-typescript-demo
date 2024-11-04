/**
 * This is a route that seeds the database with the necessary tables.
 * Before seeding, enable @vercel/postgres in your Vercel project:
 * https://vercel.com/
 */

import { db } from '@vercel/postgres';

const client = await db.connect();

async function seedPlayers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS players (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      wallet_id TEXT NOT NULL UNIQUE
    );
  `;
}

async function seedBets() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS bets (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id TEXT NOT NULL,
      amount INT NOT NULL,
      selected_option VARCHAR(255) NOT NULL,
      game_result VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedPlayers();
    await seedBets();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
 