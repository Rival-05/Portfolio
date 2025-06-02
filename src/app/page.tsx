import { HoverBorderGradient } from "@/my_components/HoverBoardGradient";
import Glow from "@/my_components/glow";
export default function Home() {
  return (
      <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
        <nav className="py-5 mb-4 lg:mb-12 md:mb-12">
          <div className="flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center">
                  <a href="#" className="flex-none md:flex items-center gap-3 text-3xl font-semibold text-[#FFFFFF] antialiased tracking-tight">rival.me
                  <Glow></Glow>  
                  </a>
                  
              </div>
          </div>
          
        </nav>
        <section></section>
        <small></small>
      </main>
  );
}
