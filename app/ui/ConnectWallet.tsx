/**
 * More details about connecting wallet:
 * https://wagmi.sh/react/guides/connect-wallet
 */

"use client";

import { modal } from "@/context";
import {
  useAccount,
  useDisconnect,
  useEnsName,
  useBalance,
} from "wagmi";
import { sepolia } from "viem/chains";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "./Button";

export function ConnectWallet() {
  const router = useRouter();
  const pathname = usePathname()
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const balance = useBalance({ address, chainId: sepolia.id, });

  useEffect(() => {
    if (address && pathname === "/") {
      // Navigate to /game if user is connected
      router.push("/game");
    }
  }, [address, pathname, router]);

  if (!address) {
    return (
      <div>
        <Button onClick={() => modal.open()}>Connect wallet</Button>
      </div>
    );
  }



  return (
    <div>
      <strong>Connected wallet:</strong>
      {address && (
        <p className="truncate max-w-xs text-sm text-gray-800">
          {ensName ? `${ensName} (${address})` : address}
        </p>
      )}
      {balance && (
        <p className="text-sm text-gray-800">
          Balance: {balance.data ? (Number(balance.data.value) / Math.pow(10, balance.data.decimals)).toFixed(4) : '0'} {balance.data?.symbol}
        </p>
      )}
      <Button onClick={() => {
        disconnect();
        router.push("/");
        }}>Disconnect</Button>
    </div>
  );
}
