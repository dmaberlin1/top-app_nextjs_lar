import './globals.css';
import { Inter } from 'next/font/google';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <head>
          <title>Test my app</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
                    rel="stylesheet"/>

        </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
