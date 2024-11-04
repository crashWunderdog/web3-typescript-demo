'use server';

import { sql } from "@vercel/postgres";
import { Bet, BetRaw } from "./definitions";

export async function fetchLatestBetsForCustomer(
  customerId: string | undefined
): Promise<Bet[]> {

  if (!customerId) {
    return [];
  }

  try {
    const bets = await sql<BetRaw>`
        SELECT * FROM bets WHERE customer_id = ${customerId}
        ORDER BY date DESC
        LIMIT 10`;

    return bets.rows.map((bet) => ({
        id: bet.id,
        customerId: bet.customer_id,
        amount: bet.amount,
        selectedOption: bet.selected_option,
        date: bet.date.toISOString().split("T")[0],
        gameResult: bet.game_result,
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest bets.");
  }
}
