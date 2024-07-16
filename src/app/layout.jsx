import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// custom imports
import "../../public/assets/css/main.css";
import Script from "next/script";

// component imports
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Banner - ServicEngine Ltd.",
  description: "Default export meta data discription",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Script src="/assets/js/jquery-3.6.0.min.js"></Script>
        <Script src="/assets/js/bootstrap.min.js"></Script>
        <Script src="/plugins/wow/wow.min.js"></Script>
        <Script src="/plugins/swiper/swiper-bundle.min.js"></Script>
        <Script src="/plugins/swiper/swiper-gl.min.js"></Script>
        <Script src="/plugins/odometer/appear.js"></Script>
        <Script src="/plugins/odometer/odometer.js"></Script>
        <Script src="/plugins/isotope/isotope.pkgd.min.js"></Script>
        <Script src="/plugins/isotope/imagesloaded.pkgd.min.js"></Script>
        <Script src="/plugins/isotope/tilt.jquery.js"></Script>
        <Script src="/plugins/isotope/isotope-init.js"></Script>
        <Script src="/plugins/fancybox/jquery.fancybox.min.js"></Script>
        <Script src="/plugins/flatpickr/flatpickr.min.js"></Script>
        <Script src="/plugins/nice-select/jquery.nice-select.min.js"></Script>
        <Script src="/assets/js/theme.js"></Script>
      </body>
    </html>
  );
}
