import "@/app/ui/global.css";

import { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import { headers } from "next/headers";
import ContextProvider from "@/context";

export const metadata: Metadata = {
  title: {
    template: "%s | Web3 Lotto",
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
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  );
}
