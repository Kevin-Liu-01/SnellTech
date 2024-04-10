import "~/styles/globals.css";
import "@radix-ui/themes/styles.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

import type { PropsWithChildren } from "react";

import { Theme } from "@radix-ui/themes";

// import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "./_components/theme-provider";
import { getServerAuthSession } from "~/server/auth";

import localFont from "next/font/local";
// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: "./font/Optiker-K.woff2",
  variable: "--font-optiker",
});

import { Navbar } from "~/app/_components/navbar/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "SnellenTech",
  description:
    "SnellenTech offers a digital eye exam and web platform for patients to get their eyes checked from the comfort of their own home.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerAuthSession();

  return (
    <html lang="en">
      <body className={`${inter.variable} ${myFont.variable}`}>
        <TRPCReactProvider>
          {/* <NextUIProvider> */}
          <ThemeProvider attribute="class">
            <Theme radius="large">
              {/* @ts-expect-error: Unreachable code error*/}
              <Navbar session={session} />
              {children}
            </Theme>
          </ThemeProvider>
          {/* </NextUIProvider> */}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
