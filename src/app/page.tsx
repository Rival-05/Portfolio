import { Nav } from "@/my_components/navbar";
import { Sextion } from "@/my_components/section";

export default function Home() {
  return (
      <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
        <Nav />
        <Sextion />
        <small></small>
      </main>
  );
}
