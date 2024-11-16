import Navbar from "./components/Navbar";
import AlertBar from "./components/AlertBar";
import SideMenu from "./components/SideMenu";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Product_card from "./components/Product_card";
function App() {
  return (
    <>
      <AlertBar />
      <Navbar />
      <section className="max-h-[50vh] bg-yellow-400 flex justify-between gap-3 px-10 ">

        <SideMenu />
        <HeroSection />
      </section>
    <Footer/>
    <Product_card/>
    </>
  );
}

export default App;
