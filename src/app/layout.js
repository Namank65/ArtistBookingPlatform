import { Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import Skeleton from "./components/Skeleton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950">
        <Suspense fallback={<Skeleton />}>
        <Header/>
        {children}
        <Footer/>
        </Suspense>
        </body>
    </html>
  );
}
