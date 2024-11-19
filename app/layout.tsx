import { Vazirmatn } from "next/font/google";
import "./assets/css/globals.css";
import { Navbar } from "./components";
const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <main className="container max-w-screen-2xl min-h-screen  bg-dark-gradient bg-center bg-cover ">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
