import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import Experience from "@/components/experience"
import OfferingsSlider from "@/components/offering"
import OurCustomers from "@/components/customer"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Experience />
      <OfferingsSlider/>
      <OurCustomers />
      <Footer />
    </main>
  )
}

