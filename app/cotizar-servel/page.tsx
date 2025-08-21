import Navbar from "@/components/Navbar";
import CotizadorServel from "../../components/cotizar-servel/CotizadorServel";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#6A1B9A] to-[#8E24AA]">
      <Navbar />
      <CotizadorServel />
      <Footer />
    </main>
  );
}
