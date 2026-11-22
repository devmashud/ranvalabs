import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata = {
  title: {
    default: "Ranva Labs — Web Application & SaaS Engineering Studio",
    template: "%s | Ranva Labs",
  },
  description:
    "Ranva Labs designs and engineers custom full-stack web applications, SaaS platforms like SerialDaw, operational dashboards, and high-converting flagship websites.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Ranva Labs — Web Application & SaaS Engineering Studio",
    description:
      "Custom full-stack web applications, SaaS products, and operational software led by Mashudul Hoque.",
    siteName: "Ranva Labs",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#08181B] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
