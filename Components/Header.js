import Link from "next/link";
import { useContext } from "react";

import AuthContext from "../context/AuthContext";
import Emoji from "./Emoji";
// 

export default function Header() {

    const { user } = useContext(AuthContext)
    return (
        <div className="w-full  py-4 text-center bg-regal-black text-white">
            <div className="hidden lg:block">
                <Emoji symbol="\u{1F451}" label="star" />
                </div>
            
        <div className="lg:flex justify-center items-center text-center">
            <Emoji symbol="\u{1F451}" label="star" />
            <div className=""> {user ? (
                <div className="px-4">
            
                <Link href="/account" >
                    <a className=""><span className="text-regal-green font-bold">User:</span> {user.email}</a>
                </Link>
                </div>
            ) : (
                <Link href="/login">
                    <a>Login</a></Link>
            )}
                </div>
                <div>
                <Link href="/">
                    <a className="text-bold text-4xl">Brave_Cards</a>
                </Link>
                <h2 className="text-2xl text-regal-green">Helping you find inspiration!</h2>
            </div>
            
            <div className="text-center">
                <Link  href="/resources" ><a className="text-xl text-stone-100  hover:text-regal-green hover:text-2xl px-4">Resource Links</a></Link>
                <Link  href="/contact" ><a className="text-xl text-stone-100 hover:text-regal-green hover:text-2xl px-4">Contact</a></Link>
            </div>
            <Emoji symbol="\u{1F451}" label="star" />
        </div>
        </div>
    )
}
