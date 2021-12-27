import Link from "next/link";
import { useContext } from "react";

import AuthContext from "../context/AuthContext";
import Emoji from "./Emoji";
// import UploadModal from "./uploadModal";

export default function Header() {

    const { user } = useContext(AuthContext)
    return (
        <div className="w-full  py-4 text-center bg-regal-gold/75 text-white">
            <Emoji symbol="\u{1F451}" label="star" />
            
        <div className="flex justify-around items-center text-center">
            <Emoji symbol="\u{1F451}" label="star" />
            <div className=""> {user ? (
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
                <div>
                <Link href="/">
                    <a className="text-bold text-4xl">Brave_Cards</a>
                </Link>
                <h2 className="text-2xl text-green-500">Helping you find inspiration!</h2>
            </div>
            {/* z<UploadModal /> */}
            <div className="text-center">
                <Link  href="/resources" ><a className="text-xl  hover:text-green-600 hover:text-2xl pr-4">Resource Links</a></Link>
                <Link  href="/contact" ><a className="text-xl hover:text-green-600 hover:text-2xl">Contact</a></Link>
            </div>
            <Emoji symbol="\u{1F451}" label="star" />
        </div>
        </div>
    )
}

// divider crown <a href='https://www.freepik.com/vectors/border'>Border vector created by starline - www.freepik.com</a>
// hearts <a href='https://www.freepik.com/vectors/watercolor'>Watercolor vector created by tartila - www.freepik.com</a> 
// background pattern <svg xmlns='http://www.w3.org/2000/svg'  width='90' height='90' viewBox='0 0 90 90'><rect fill='#330033' width='90' height='90'/><circle fill-opacity='1' fill='#06B'  cx='45' cy='45' r='10'/><g fill='#800'  fill-opacity='1'><circle  cx='0' cy='90' r='10'/><circle  cx='90' cy='90' r='10'/><circle  cx='90' cy='0' r='10'/><circle  cx='0' cy='0' r='10'/></g></svg>