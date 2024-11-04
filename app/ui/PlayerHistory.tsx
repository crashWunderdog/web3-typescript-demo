"use client";

import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { fetchLatestBetsForCustomer } from "../lib/data";
import { Bet } from "../lib/definitions";

export default function PlayerHistory() {
  const { address } = useAccount();
  const [bets, setBets] = useState<Bet[]>([]);

  useEffect(() => {
    async function fetchData() {
      if (address) {
        const bets = await fetchLatestBetsForCustomer(address);
        setBets(bets);
      }
    }
    fetchData();
  }, [address]);

  console.log(bets);
  return (
    <div className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-6">
      <h2 className="text-lg font-semibold">Player History</h2>
      <div className="flex flex-col gap-2">
        {bets.map((bet) => (
          <div className="flex justify-between" key={bet.id}>
            <p>{`${bet.date}`}</p>
            <p>{bet.selectedOption}</p>
            <p>{bet.amount} ETH</p>
            <p>{bet.selectedOption === bet.gameResult ? "Win" : "Loss"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
