"use client";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraBaseProvider>{children}</ChakraBaseProvider>
      </body>
    </html>
  );
}
