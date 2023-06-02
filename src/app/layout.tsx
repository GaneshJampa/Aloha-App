import '@/styles/globals.css';
import { IBM_Plex_Mono } from "next/font/google";


export const metadata = {
  title: 'Aloha',
  description: 'Hawaii tourism',
}

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ibm_plex_mono.className}>
      <body>{children}</body>
    </html>
  )
}
