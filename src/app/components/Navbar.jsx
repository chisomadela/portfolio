import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <ul className="flex flex-row justify-between items-center bg-blue-700 text-white h-28 font-bold capitalize px-4">
                <Link href="/">
                <li>Home</li>
                </Link>

                <Link href="/about">
                <li>about</li>
                </Link>

                <Link href="/contact">
                <li>Contact</li>
                </Link>

                <Link href="/signup">
                <li>Signup</li>
                </Link>

                <Link href="/dashboard">
                <li>Dashboard</li>
                </Link>

                
                <Link href="/shop">
                <li>shop</li>
                </Link>


            </ul>
        </nav>
    )
}