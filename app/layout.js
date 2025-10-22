import Footer from "../components/footer";
import Header from "../components/header";
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
        <body className="bg-gray-100 flex flex-col min-h-screen">
            <div className="overflow-x-hidden">
              <Header />
              <main>
                {children}
              </main>
              <Footer />
            </div>
        </body>
    </html>
  );
}
