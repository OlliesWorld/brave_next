import Link from "next/link";
import { useContext } from "react";

import AuthContext from "../context/AuthContext";
import UploadModal from "./uploadModal";

export default function Header() {

    const { user } = useContext(AuthContext)
    return (
        <div className="w-full  py-4 text-center bg-blue-900">
            <div>
                <Link href="/">
                    <a className="text-purple-50 text-bold text-4xl">Brave_Cards</a>
                </Link>
                <h2 className="text-2xl text-green-50">Helping you find inspiration!</h2>
            </div>
            
<div className="flex justify-evenly items-center">
    
    <div className="text-purple-50"> {user ? (
        <div >
    
        <Link href="/account" >
            <a className=""><span className="text-black font-bold">User:</span> {user.email}</a>
        </Link>
        </div>
    ) : (
        <Link href="/login">
            <a>Login</a></Link>
    )}
        </div>
    <UploadModal />
    
    <Link  href="/contact" ><a className="text-xl text-green-50 hover:bg-blue-900 hover:text-2xl">Contact</a></Link>
</div>
        </div>
    )
}
