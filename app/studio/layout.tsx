import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "BGC BackEnd app",
  description: "Ecommerce for developement app purpose",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
