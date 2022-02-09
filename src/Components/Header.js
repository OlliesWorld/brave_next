import Link from "next/link";
import { useContext } from "react";

import AuthContext from "../context/AuthContext";
import Emoji from "./Emoji";
// 

export default function Header() {

    const { user } = useContext(AuthContext)
    return (
        <div className="w-full  py-4 text-center bg-blue-900 text-white">
            
        <div className=" m-auto lg:grid grid-cols-6 gap-4 justify-center items-center text-center">
            <Emoji symbol="\u{1F929}" label="star struck"/>
            <div className="text-lg hover:text-regal-green hover:text-2xl"> {user ? (
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
                <div className="col-span-2 px-12">
                <Link href="/">
                    <a className="text-bold text-6xl ">Brave_Cards</a>
                </Link>
                <h2 className="text-2xl text-regal-green">Helping you find inspiration!</h2>
            </div>
            
            <div className="pl-20 text-center">
                <Link  href="/resources" ><a className="text-xl text-stone-100  hover:text-regal-green hover:text-2xl px-4">Resources</a></Link>
                <Link  href="/contact" ><a className="text-xl text-stone-100 hover:text-regal-green hover:text-2xl px-4">Contact</a></Link>
            </div>
            <Emoji symbol="\u{1F451}" label="star" />
        </div>
        </div>
    )
}
