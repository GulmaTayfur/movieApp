const Hero = () => {
  return (
    <div className="p-10 py-20 lg:px-20 bg-[url('wick.jpg')] bg-center bg-cover text-white">
      <h1 className="text-4xl md:text-5xl font-bold">Hoşgeldin</h1>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Milyonlarla Film, Dizi ve Aktörleri Keşfet.
      </h2>

      <div className="relative rounded-full flex mt-5 overflow-hidden">
        <input
          className="w-full p-2 px-4 text-black"
          type="text"
          placeholder="Film, Dizi, Aktör arayın..."
        />
        <button className="absolute end-0 bg-blue-400 h-full w-20 text-white font-semibold hover:bg-blue-500 transition">
          Ara
        </button>
      </div>
    </div>
  );
};

export default Hero;
