import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import FirebaseProvider from "@/context/FirebaseProvider";

export const metadata: Metadata = {
  title: "Prep Wrestling Academy",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <FirebaseProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </FirebaseProvider>
    </html>
  );
}
