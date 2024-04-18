import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Easy Learning",
  description: "Developed by ojit deb nath",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen justify-between`}
      >
        <div>
          <Header />
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
