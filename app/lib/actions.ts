"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";

const BetSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: "Please connect a wallet.",
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  selectedOption: z.enum(["heads", "tails"], {
    invalid_type_error: "Please select an bet type (heads or tails).",
  }),
  date: z.string(),
});

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    selectedOption?: string[];
    process?: string[];
  };
  message?: string | null;
};

const CreateBet = BetSchema.omit({ id: true, date: true });

export async function createBet(
  id: string,
  _prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = CreateBet.safeParse({
    customerId: id,
    amount: formData.get("amount"),
    selectedOption: formData.get("selectedOption"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Bet.",
    };
  }

  const { customerId, amount, selectedOption } = validatedFields.data;
  const date = new Date().toISOString().split("T")[0];
  const gameResult = Math.random() < 0.5 ? "heads" : "tails";

  try {
    await sql`
          INSERT INTO bets (customer_id, amount, selected_option, date, game_result)
          VALUES (${customerId}, ${amount}, ${selectedOption}, ${date}, ${gameResult})
        `;
  } catch (error) {
    console.log(error);
    return {
      errors: {
        process: ["Database Error: Failed to Create Bet."],
      },
      message: "Failed to Create Bet, unexpected error.",
    };
  }
  return { message: "Bet created successfully." };
}
