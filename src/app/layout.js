import localFont from "next/font/local";
import "./globals.css";
import { ReduxProvider } from "@/store/provider";

const clashVariable = localFont({
  src: "../fonts/ClashDisplay-Variable.ttf", // Path relative to the public folder
  variable: "--clashVariable",
});

export const metadata = {
  title: "Payshift",
  description: "Payshift",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${clashVariable.className}`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
