import Image from "next/image"

export default function Contact () {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="border rounded-xl bg-stone-900 text-white">
                    <div className="m-16">
                        <div className="my-8 mx-24">
                            <Image
                                src="/SDRD.png"
                                alt="Sunday"
                                height={100}
                                width={100}
                            />
                        </div>
                        <form>
                            <div className='mb-5 '>
                                <label
                                htmlFor='name'
                                className='mb-3 block text-base font-medium '
                                >
                                Full Name
                                </label>
                                <input
                                type='text'
                                placeholder='Full Name'
                                className='w-full rounded-md border border-gray-300 bg-transparent py-3 px-6 text-base font-medium text-gray-700 outline-none focus:shadow-md'
                                />
                            </div>
                            <div className='mb-5'>
                                <label
                                htmlFor='email'
                                className='mb-3 block text-base font-medium '
                                >
                                Email Address
                                </label>
                                <input
                                type='email'
                                placeholder='example@domain.com'
                                className='w-full rounded-md border border-gray-300 bg-transparent py-3 px-6 text-base font-medium text-gray-700 outline-none  focus:shadow-md'
                                />
                            </div>
                            <div className='mb-5'>
                                <label
                                htmlFor='message'
                                className='mb-3 block text-base font-medium '
                                >
                                Message
                                </label>
                                <textarea
                                rows={4}
                                placeholder='Type your message'
                                className='w-full resize-none rounded-md border border-gray-300 bg-transparent py-3 px-6 text-base font-medium text-gray-700 outline-none '
                                ></textarea>
                            </div>
                            <div>
                                <button className='hover:shadow-form rounded-md bg-transparent py-3 px-8 text-base font-semibold text-white outline-none border'>
                                Submit
                                </button>
                            </div>
                        </form>
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

    )
}