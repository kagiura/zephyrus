import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { Theme } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";
import "leaflet/dist/leaflet.css";
import Layout from "@/components/Layout";

import { ThemeProvider } from "next-themes";
export const metadata: Metadata = {
  title: "Dazzlegarden",
  description: "(Not Seraph)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <ThemeProvider attribute="class">
          <Theme
            panelBackground="solid"
            accentColor="ruby"
            className="dzg-theme"
          >
            <Layout>{children}</Layout>
          </Theme>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
