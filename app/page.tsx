import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Works from "./components/Works";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen antialiased selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <Intro />
      <Works />
      <Footer />
    </main>
  );
}
