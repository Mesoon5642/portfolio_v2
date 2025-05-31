import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import TheMatrix from "./matrixwrapper";
import "./css/globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mason's Portfolio",
  description: "Mason's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.className} antialiased`}
      >
        <TheMatrix>
          {children}
        </TheMatrix>
      </body>
    </html>
  );
}
