import { CustomProvider } from "@/store/customProvider";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Archivo, Inter, Sen } from "next/font/google";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/globals.css";
import WebsiteHeader from "@/components/molecules/WebsiteHeader";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "@/components/molecules/Footer";
import { cookies } from "next/headers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Local Georgia font
const ranade = localFont({
  src: "./fonts/ranade/Ranade-Variable.ttf",
  variable: "--font-ranade",
  weight: "400 500 600 700",
  style: "normal",
});

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Improself Web ",
  description: `Your go-to source for mental health insights, tools, and advice.`,
};

export default async function RootLayout({ children }) {
  const cookie = await cookies();
  const cookieLang = cookie.get("googtrans")?.value;
  console.log(cookieLang);
  
  return (
    <html lang={cookieLang === "/en/de" ? "de" : "en"}>
      <body
        className={`${inter.variable} ${archivo.variable} ${ranade.variable} ${sen.variable}`}
        suppressHydrationWarning
      >
        <ToastContainer />
        <CustomProvider>
          <WebsiteHeader />
          {/* <SocketProvider> */}
          {children}
          {/* </SocketProvider> */}
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
