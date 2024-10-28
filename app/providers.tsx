"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "@/app/lib/wagmiConfig";

const queryClient = new QueryClient();

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
