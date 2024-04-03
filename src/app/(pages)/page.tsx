import Banner from '@/components/Banner';
import Filterbar from '@/components/Filterbar';
import Footer from '@/components/Footer';
import Navbar from '@/components/Header';
import ProductList from '@/components/ProductList';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Static */}
      {/* <>Header</> */}
      <Navbar />
      {/* Static */}
      {/* <>Banner</> */}
      <Banner />
      {/* horizontal line */}
      <hr className="my-3 border-gray-200" />
      {/* Container Product Listing and Filtering */}
      <div className="flex gap-5 mx-5" content="container-product-filter">
        {/* Most complex */}
        {/* <>Filterbar</> */}
        <Filterbar />
        {/* Most complex */}
        {/* <>Products</> */}
        <ProductList />
      </div>
      <Footer />
    </main>
  );
}
