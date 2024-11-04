import { Metadata } from "next";
import GameForm from "@/app/ui/GameForm";
import PlayerHistory from "../ui/PlayerHistory";

export const metadata: Metadata = {
  title: "Game",
};

export default function Page() {
  return (
    <div className="flex-row items-center justify-center w-full h-full min-h-screen p-4 bg-gradient-to-t from-yellow-400 to-yellow-100">
      <GameForm />
      <PlayerHistory />
    </div>
  );
}
