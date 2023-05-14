"use client";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraBaseProvider>
        <Navbar />
          {children}
        </ChakraBaseProvider>
      </body>
    </html>
  );
}
