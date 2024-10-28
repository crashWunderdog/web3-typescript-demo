import * as React from "react";
import AcmeLogo from "@/app/ui/acme-logo";
import { lusitana } from "./ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-yellow-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Web3 lotto</strong>
            This is a example project for building a Web3 dApp.
          </p>
          <p className="text-gray-800 text-base md:text-lg">
            This project is a simple lottery game where you can bet on your
            favorite number and win big prizes. It is built using Next.js and
            Tailwind CSS with TypeScript.
          </p>
          {/* @ts-expect-error - AppKit's web components are custom HTML tags, so they can safely be ignored by TS */}
          <w3m-button size="md" />
          <p className="text-gray-800 text-base md:text-lg">
            To get started, connect your wallet and start playing the game. All
            transactions are done on the <strong>Rinkeby testnet</strong>, so
            you can play without worrying about losing real money
            (unfortunately, you can not win any real money either).
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
