import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Parth Pujare",
  description: "My Webpage",
  icons:{
    icon:"/favicon.ico",
},
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className="bg-gray-100 flex flex-col min-h-screen overflow-x-hidden">
              <Header />
              <main className="flex-grow flex flex-col">
                {children}
              </main>
              <Footer />
        </body>
    </html>
  );
}
