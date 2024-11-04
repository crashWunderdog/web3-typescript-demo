// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Bet = {
    id: string;
    customerId: string;
    amount: number;
    selectedOption: "heads" | "tails";
    date: string;
    gameResult: "heads" | "tails";
  };

  export type BetRaw = {
    id: string;
    customer_id: string;
    amount: number;
    selected_option: "heads" | "tails";
    date: Date;
    game_result: "heads" | "tails";
  };