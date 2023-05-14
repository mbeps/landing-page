"use client";
import { ChakraBaseProvider, Flex, extendBaseTheme } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraBaseProvider>
          {/*  */}
          <Navbar />
          <Flex
            justify="center"
            content="center"
            p="16px 0px"
            direction="column"
            justifyContent="center"
            border="1px solid red"
            alignItems="center" // Add this line to center the content vertically
          >
            {children}
          </Flex>

          <Footer />
        </ChakraBaseProvider>
      </body>
    </html>
  );
}
