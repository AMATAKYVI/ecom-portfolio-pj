export default function Home() {
  return (
    <main>
      {/* Static */}
      {/* <>Header</> */}
      <nav className="bg-gray-800 py-3 px-3 flex justify-between">
        <a href="https://www.example.com" className="inline-block px-4">
          <img src="logo.png" alt="Company Logo" />
        </a>
        <div className="inline-block">
          <a href="contact.html" className="text-white px-4">
            About
          </a>

          <a href="contact.html" className="text-white px-4">
            Contact
          </a>
          <a href="policy.html" className="text-white px-4">
            Policy
          </a>
          <a href="login.html" className="text-white px-4">
            Login
          </a>
        </div>
      </nav>
      {/* Static */}
      {/* <>Banner</> */}
      <div className="flex bg-gray-100 p-6 h-[50vh] mx-5">
        <div className="w-1/2">
          <img
            src="product-image.jpg"
            alt="Product Image"
            className="max-w-full"
          />
        </div>
        <div className="w-1/2 px-6">
          <h2 className="text-2xl font-semibold mb-6">Product Name</h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet gravida risus, sed sodales leo.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600"
          >
            Learn More
          </a>
        </div>
      </div>
      {/* horizontal line */}
      <hr className="my-3 border-gray-200" />
      {/*  */}
      {/* Most complex */}
      <>Filterbar</>
      {/* Most complex */}
      <>Products</>
    </main>
  );
}
