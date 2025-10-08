import { Header } from "@/components/header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export default async function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider>
    <html lang="en">
      <body>
      <Header />
        {children}
        {/* <standups/> */}
      </body>
    </html>
    </ClerkProvider>
  );
}
