import { Inter } from "next/font/google";

import Header from "./componans/Header";
import Provider from "./Provider";
import Navbar from "./componans/Navbar";
import Rating from "./componans/Rating";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-slate-200 text-black dark:bg-slate-950 dark:text-slate-100 min-h-screen
        select-none transition-colors duration-700">
        <Provider >

        <Header/>
        <Navbar />
        
        {children}
        </Provider>
        </main>
        </body>
    </html>
  );
}
