import HeroSection from "@/components/HeroSection";
import FeaturedBanners from "@/components/FeaturedBanners";

export default function Home() {
  return (
    <>
      <main className="wrapper">
        {/* Hero section with slider */}
        <HeroSection />
        <div className="divider-line-hr"></div>
        {/* Featured banners section */}
        <FeaturedBanners />
        <div className="divider-line-hr"></div>
      </main>
    </>
  );
}
