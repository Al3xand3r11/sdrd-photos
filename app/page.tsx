import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="border rounded-xl bg-stone-900">
          <div className="my-8 mx-24">
          <Image
          src="/SDRD.png"
          alt="Next.js logo"
          width={180}
          height={100}
          priority
        />
        <div className="flex flex-col mt-6 text-center">
          <Link className="border mb-4 rounded-xl" href="/upload">
            Upload Photos
          </Link>
          <Link className="border rounded-xl" href="/view">
            View Photos
          </Link>
        </div>
          </div>
    
        </div>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center underline">
        <a href="https://www.instagram.com/sundayrunday_la/">
          Instagram
        </a>
        <a href="https://www.sundayrundayla.com/">
          Website
        </a>
        <a href="https://www.strava.com/clubs/sundayrundayla">
          Strava
        </a>
      </footer>
    </div>
  );
}
