import Head from 'next/head'
import { useContext } from 'react'
import Link from 'next/link'
import AuthContext from '../context/AuthContext'
import UploadModal from "../Components/uploadModal";


export default function Account() {

    const { user, logoutUser} = useContext(AuthContext)

    
    
    if(!user){
        return (
            <div>
                <p>Please Login before accessing this page</p>
                <Link href="/"><a>Go Back</a></Link>
            </div>
        )
    }

    return (
        <div>
            <Head>
                <title>Your Account</title>
                <meta name="description" content="Your info will be shown here" />
            </Head>
            <div className="container m-auto p-8">
                <h2 className="text-2xl">Account Page</h2>
                <p className="my-4">Logged in as <span className="text-purple-900 font-bold underline">{user.email}</span></p>
                <p className="bg-purple-900 text-white py-2 w-36 text-center rounded-lg"><a href="#" onClick={logoutUser}>Logout</a></p>
            <UploadModal />
            </div>
        </div>
    )

}