import "@/app/ui/global.css";

import { Metadata } from "next";
import { inter, lusitana } from "@/app/ui/fonts";
import { headers } from "next/headers";
import { ContextProvider } from "@/context";
import { ConnectWallet } from "./ui/ConnectWallet";
import SiteLogo from "./ui/SiteLogo";

export const metadata: Metadata = {
  title: {
    template: "%s | Web3 Coin Toss",
    default: "Home",
  },
  description: "A web3 dApp example project",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = (await headers()).get("cookie");

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ContextProvider cookies={cookies}>
          <RootElements>{children}</RootElements>
        </ContextProvider>
      </body>
    </html>
  );
}

function RootElements({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-yellow-500 p-4 md:h-52">
        <SiteLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Web3 Coin Toss!</strong> This is a example project
            for building a Web3 dApp.
          </p>
          <p className="text-gray-800 text-base md:text-lg">
            This project is a simple prediction game where you can bet on the
            outcome of a coin flip and win prices. It is built using Next.js and
            Tailwind CSS with TypeScript.
          </p>
          <ConnectWallet/>
          {/**
           * AppKit comes ready made web component, for managing the wallet connection.
           * For this example we are using our own custom connect button,
           * but you can use the web component as well by uncommenting this line.
           */}
          {/* <w3m-button size="md" /> */}
          <p className="text-gray-800 text-base md:text-lg">
            To get started, connect your wallet and start playing the game. All
            transactions are done on the{" "}
            <a href="https://github.com/eth-clients/sepolia" target="_blank" className="underline">
              <strong>Sepolia Testnet</strong>
            </a>{" "}
            , so you can play without worrying about losing real money
            (unfortunately, you can not win any real money either).
          </p>
        </div>
        {children}
      </div>
    </main>
  );
}
