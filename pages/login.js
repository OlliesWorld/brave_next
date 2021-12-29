import Head from 'next/head'
import { useContext, useState} from 'react'
import AuthContext from '../context/AuthContext'

export default function Login() {
	const [email, setEmail] = useState('')
	const {loginUser} = useContext(AuthContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		loginUser(email)
	}

	return (
		<>
			<Head>
				<title>Login</title>
				<meta name="description" content="login to add cards" />
			</Head>
			<div className='max-w-xs m-auto p-4 overflow-hidden rounded shadow-lg'>
				<div className='px-6 py-4'>
				<div className='mb-2 text-xl font-bold'>Login</div>
				<form onSubmit={handleSubmit} className='flex flex-col'>
					<input 
						type="email" 
						value={email} 
						onChange={(e) => setEmail(e.target.value)} 
						className='mb-2 italic'
						placeholder="email"/>
					
					
					{/* <input className='mb-4 border-b-2' id='name' name='password' type='text' autoComplete='password' required /> */}
					<button type='submit' className='px-4 py-2 font-bold text-white bg-blue-900 rounded-full hover:bg-blue-700'>Login</button>
				</form>
				</div>
			</div>
		
			</>

	)
}