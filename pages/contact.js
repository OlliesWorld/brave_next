import React, { useState } from "react";
import { useRouter } from "next/router";
 
const ContactPage = () => {
 const [submitterName, setSubmitterName] = useState("");
 const router = useRouter();
 const confirmationScreenVisible =
   router.query?.success && router.query.success === "true";
 const formVisible = !confirmationScreenVisible;
 
 const ConfirmationMessage = (
   <React.Fragment>
     <p>
       Thank you for submitting this form. Someone should get back to you within 24-48 hours.
     </p>
 
     <button onClick={() => router.replace("/contact", undefined, { shallow: true })}> Submit Another Response </button>
   </React.Fragment>
 );
const ContactForm = (

	
	  <form className='flex flex-col' name="contact-form"
    	method="POST" action="contact/?success=true" data-netlify="true"
		data-netlify-honeypot="bot-field">
			<input type="hidden" name="form-name" value="contact-form" />
			<p hidden>
 			<label>Don’t fill this out: <input name="bot-field" /></label>
			</p>
		<label htmlFor="name">Name</label>
	  	<input id="name" type="text" name="name" className='mb-4 border-b-2'/>
		<label htmlFor="email">Email</label>
  		<input id="email" type="email" name="email" className='mb-4 border-b-2' required />
		<label htmlFor="message">Message</label>
  		<textarea id="message" name="message" required></textarea>
 		<button type="submit" className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'>send</button>
	  </form>

);

return (
	<div className='max-w-xs m-auto overflow-hidden rounded shadow-lg'>
		<div className='px-6 py-4'>
	  		<div className='mb-2 text-xl font-bold'>Contact us</div>

			  {formVisible ? ContactForm : ConfirmationMessage}
		</div>
	</div>
	)
}
export default ContactPage