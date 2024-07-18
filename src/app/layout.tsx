import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hackndore - Hackathon By Indore Municipal Corporation",
  description: " Central India's largest technology event, brought to you by Indore Municipal Corporation, under the leadership of Hon'ble Mayor of Indore Shri Pushyamitra Bhargav. This pioneering hackathon aims to tackle real-time challenges faced by our Municipal Corporation, e-Nagarpalika and other e-Governance portals.The Hackndore Hackathon is a digital initiative by the Indore Municipal Corporation, aiming to position Indore as a technology leader. We bring together brilliant minds to innovate and address urban challenges through collaboration and sustainability. Hackindore ",
  keywords :["Hackndore", "Hackathon","Acropolis Institute Of Technology And Research - AITR(Indore)","Unstop" , "Pushyamitra Bhargav" , "Indore Mayor" , "IMC","Indore Municipal Corporation","Central India's biggest technology carnival","A 48-hour PAN India Hackathon","B.Tech/B.E./BCA/M.Tech/M.S/MCA","Hackindore" , "Hackathon in Indore" , "Hackathon in India" , "Hackathon in Central India" , "Hackathon in Madhya Pradesh" , "Hackathon in AITR" , "Hackathon in Acropolis"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics/>
        {children}
        
        </body>
    </html>
  );
}
