import { createContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'
import { MAGIC_PUBLIC_KEY } from '../utils/urls'

const AuthContext = createContext()
let magic

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null)
    const router = useRouter()

    /**
     * adds email to user
     * @param {string} email
     */
    const loginUser = async (email) => {
        try{
            await magic.auth.loginWithMagicLink({email})
            setUser({email})
            router.push('/')
        } catch (err) {
            setUser(null)
        }
        
    }
    /*
    * sets user to null
    */

    const logoutUser = async () => {
        try{
            await magic.user.logout()
            setUser(null)
            router.push('/')
        } catch (err) {

        }
        
    }

    const checkUserLoggedIn = async () => {
        try {
            const isLoggedIn = await magic.user.isLoggedIn()

            if(isLoggedIn) {
                const { email } = await magic.user.getMetadata()
                setUser({ email })
                //just to test
                const token = await getToken()
                console.log("checkUserLoggedin token", token)
            }

            } catch (err) {
        }
    }

    /**
     * 
     * @returns 
     */
    const getToken = async () => {
        try {
            const token = await magic.user.getIdToken()
            return token
        } catch (err) {

        }
    }

    useEffect(() => {
        magic = new Magic(MAGIC_PUBLIC_KEY)

        checkUserLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext