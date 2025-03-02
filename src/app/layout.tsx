import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <Navbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
