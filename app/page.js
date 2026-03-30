export default function Home() {
    return (
          <main className="min-h-screen bg-[#1a1a1a] text-white">

    {/* NAV */}
            <nav className="flex items-center justify-between px-8 py-4 bg-[#111]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center font-bold text-white text-xl">b</div>
            <span className="text-white font-bold text-xl tracking-tight">bandcestr<sup className="text-xs">™</sup></span>
      </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
                <a href="#" className="hover:text-white">Discover</a>
            <a href="#" className="hover:text-white">Bands</a>
            <a href="#" className="hover:text-white">Artists</a>
      </div>
          <div className="flex items-center gap-3">
                <button className="border border-white text-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition">Sign In</button>
            <button className="bg-[#FF6B35] text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition">⭐ Get Premium</button>
      </div>
      </nav>

  {/* HERO */}
        <section className="relative min-h-[600px] flex items-center px-8 md:px-16 bg-[#1a1a1a]">
                  <div className="max-w-2xl z-10">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                      Every Band Has a{" "}
              <span className="text-[#FF6B35] relative inline-block">
                              Backstory
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 10 0, 20 5 T 40 5 T 60 5 T 80 5 T 100 5 T 120 5 T 140 5 T 160 5 T 180 5 T 200 5" stroke="#FF6B35" fill="none" strokeWidth="2"/>
                </svg>
                </span>{" "}
              To Trace.
                </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
                            Discover how your favorite bands are connected — who jammed with who, who left for greener pastures, and how side projects turned into legends.
                </p>
            <div className="flex flex-wrap gap-4">
                            <button className="bg-[#FF6B35] text-white px-6 py-3 rounded font-medium hover:bg-orange-600 transition">Start Tracing the Music Lineage</button>
              <button className="border border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-black transition">Add Your Band!</button>
                </div>
                </div>
                </section>

  {/* FEATURED BANDS */}
        <section className="px-8 md:px-16 py-16 bg-[#111]">
                  <h2 className="text-3xl font-bold mb-2">Featured DC Bands</h2>
          <p className="text-gray-400 mb-8">Explore the legendary bands that shaped Washington DC&apos;s music scene</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Bad Brains", "Fugazi", "Minor Threat"].map((band) => (
                      <div key={band} className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-800 hover:border-[#FF6B35] transition cursor-pointer">
                        <div className="w-12 h-12 bg-[#FF6B35] rounded-full mb-4 flex items-center justify-center font-bold text-lg">
          {band[0]}
</div>
              <h3 className="font-bold text-lg mb-1">{band}</h3>
              <p className="text-gray-400 text-sm">Washington DC · Punk / Hardcore</p>
  </div>
          ))}
            </div>
            </section>

{/* FOOTER */}
      <footer className="px-8 py-8 bg-[#0a0a0a] border-t border-gray-800 text-gray-400 text-sm flex justify-between">
                <span>Bandcestr · Mapping the connections in DC&apos;s music scene</span>
        <span>© 2026 Bandcestr</span>
        </footer>

        </main>
  );
}
