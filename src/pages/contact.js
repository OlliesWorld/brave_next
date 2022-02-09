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
	  	<input id="name" type="text" name="name" className='mb-4 border-b-2 border-regal-green'/>
		<label htmlFor="email">Email</label>
  		<input id="email" type="email" name="email" className='mb-4 border-b-2 border-regal-green' required />
		<label htmlFor="message">Message</label>
  		<textarea id="message" name="message" className="my-2 border-2 border-regal-green" required></textarea>
 		<button type="submit" className='px-4 py-2 font-bold text-white bg-blue-900 rounded-full hover:bg-blue-700'>send</button>
	  </form>

);

return (
	<div className="md:flex bg-hero-pattern">

	
	<div className='w-3/4 lg:w-1/3 mx-auto my-12 rounded shadow-lg shadow-regal-green h-full'>
		<div className='px-2 py-4'>
	  		<div className='mb-2 text-xl font-bold text-center '>Contact us</div>

			  {formVisible ? ContactForm : ConfirmationMessage}
		</div>
		
	</div>
		<div className="w-3/4 md:w-2/3 lg:w-1/3 text-center m-auto pb-8 text-blue-900 text-xl">
			<div>Let us know who you think should be on the list and why? We love learning about new people and how they contribute to society.</div>
		</div>
	</div>
	)
}
export default ContactPage