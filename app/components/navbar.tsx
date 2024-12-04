import Image from "next/image"
import Link from "next/link"

export default function Navbar () {
    return (
        <>
            <div className="h-20 w-full sticky top-0">
                <div className="container mx-12 h-full">
                    <div className="flex justify-between items-center h-full text-white">
                        <div>
                        <Image
                            src="/SDRDnav.png"
                            alt="SundayRunday"
                            width={150}
                            height={150}
                        />
                        </div>
                        <div>
                            <Link href="/">
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link href="/contact">
                                Contact Us
                            </Link>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}