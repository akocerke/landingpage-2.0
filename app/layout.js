import localFont from "next/font/local";
import "./globals.css";
import ToastContainerComponent from "./component/ToastContainerComponent.";
import ThemeToggle from "./component/ThemeToggle";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ToastContainerComponent/>
        
          <ThemeToggle /> {/* Hier wird der Theme-Toggle eingebunden */}
        
        {children}
      </body>
    </html>
  );
}
