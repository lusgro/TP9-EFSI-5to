import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Island_Moments } from 'next/font/google'
import Footer from "@/components/Footer";
import { TokenProvider } from "@/context/token";
import { ProtectedRoutes } from "@/utils/ProtectedRoutes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const island_moments = Island_Moments({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-island-moments',
  weight: '400'
})

export const metadata = {
  title: "Eventum",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${island_moments.variable} antialiased min-h-screen`}
      >
        <TokenProvider>
          <ProtectedRoutes>
            <Header />
            <div className="flex flex-1 flex-col justify-between items-center pt-7">
              {children}
            </div>
            <Footer />
          </ProtectedRoutes>
        </TokenProvider>
      </body>
    </html>
  );
}
