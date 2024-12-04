import Image from "next/image"

export default function Upload () {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 w-full gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="flex border rounded-2xl p-96 bg-stone-950 text-gray-500 flex-col items-center">
                    <Image
                        src="/upload.svg"
                        alt="upload"
                        height={50}
                        width={50}
                    />
                    <p className="mt-8">
                        Upload Images
                    </p>
                    <p>
                        Choose up to 20 at a time
                    </p>
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
    )
}