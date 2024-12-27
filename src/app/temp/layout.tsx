import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Temp || New Layout",
  description: "Sell your products online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h2>layout navbar</h2>
    {children}
    </> 
  );
}
