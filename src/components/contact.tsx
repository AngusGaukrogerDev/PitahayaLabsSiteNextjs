import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [emailFailedToSend, setEmailFailedToSend] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setSubmitting(true);
      setEmailFailedToSend(false);
      setEmailSent(false);
      const response = await fetch(`/api/sendEmail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        reset();
        setEmailSent(true);

        setTimeout(() => {
            setEmailSent(false);
          }, 10000);
      } else {
        console.error('Failed to send email');
        setEmailFailedToSend(true);
        setTimeout(() => {
            setEmailFailedToSend(false);
          }, 10000);
      }
    } catch (error) {
      console.error('Error sending email', error);
      setEmailFailedToSend(true);
      setTimeout(() => {
        setEmailFailedToSend(false);
      }, 10000);
    }
    setSubmitting(false);
  };

  return (
        <section id="contact" className="w-full h-auto flex flex-col xl:flex-row justify-center items-center gap-12 bg-pitahaya-white text-center py-20 px-5 md:px-24">   
            <div className="w-full sm:w-3/4 md:w-2/3 xl:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center gap-5 px-3 sm:px-5 py-5 border-2 xl:border-0 border-pitahaya-grey-900 rounded-md">
                <h2 className="text-pitahaya-black transition duration-300 transform hover:scale-105">Book a call with us</h2>
                <h3 className='transition duration-300 transform hover:scale-105'>Get your project kicked off with a meeting to discuss the goals of your platform and how we can make it happen! </h3>
                {/* <img src="https://dummyimage.com/300x100/808080/F8FBFC.jpg&text=Pitahaya+Labs+logo" /> */}
                <a target="_blank" href="https://cnnct.uk/pitahayalabs/initial-learning-platform-discussion" >
                    <button className="bg-pitahaya-yellow text-pitahaya-white px-4 py-2 rounded-md w-36 sm:w-56 md:w-56 h-14  hover:cursor-pointer transition duration-300 transform hover:scale-110">
                        <h3>Book a call!</h3>
                    </button>                  
                </a>
            </div>
            <form 
                className="border-2 xl:border-0 md:h-auto w-full sm:w-3/4 md:w-2/3 xl:w-1/2 flex flex-col justify-center items-center gap-5 px-3 sm:px-5 xl:px-24 py-5 rounded-md border-pitahaya-grey-900"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className='transition duration-300 transform hover:scale-110'>Send us a message</h2>
                <div className="flex flex-col justify-center items-start gap-2 w-full transition duration-300 transform hover:scale-105">
                    <div className="flex flex-row justify-center items-center gap-1">
                        <label className="ml-2 text-pitahaya-black" htmlFor="name">Name</label>
                        <label className="text-pitahaya-yellow">*</label>
                    </div>
                    <input className="bg-pitahaya-white w-full rounded-md h-12 border-2 border-pitahaya-grey pl-2" type="text" placeholder="What's your name?" {...register("name", { required: true })} />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 w-full transition duration-300 transform hover:scale-105">
                    <div className="flex flex-row justify-center items-center gap-1">
                        <label className="ml-2 text-pitahaya-black" htmlFor="email">Email</label>
                        <label className="text-pitahaya-yellow">*</label>
                    </div>
                    <input className="bg-pitahaya-white w-full rounded-md h-12 border-2 border-pitahaya-grey pl-2" type="email" placeholder="What's your email?" {...register("email", { required: true })} />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 w-full transition duration-300 transform hover:scale-105">
                    <div className="flex flex-row justify-center items-center gap-1">
                        <label className="ml-2 text-pitahaya-black" htmlFor="message">Message</label>
                        <label className="text-pitahaya-yellow">*</label>
                    </div>
                    <textarea className="bg-pitahaya-white w-full rounded-md h-36 border-2 border-pitahaya-grey pl-2 pt-1" placeholder="What would you like to tell us?" {...register("message", { required: true })} />
                </div>
                <button className="bg-pitahaya-black text-pitahaya-white px-4 py-2 rounded-md w-36 sm:w-56 md:w-56 h-14  hover:cursor-pointer transition duration-300 transform hover:scale-110" disabled={submitting} type="submit">
                    <h3>Submit</h3>
                </button>
                <div className='flex flex-col justify-center items-center gap-3'>
                    {errors.name && <h3 className="text-pitahaya-grey">Name is required</h3>}
                    {errors.email && <h3 className="text-pitahaya-grey">Email is required</h3>}
                    {errors.message && <h3 className="text-pitahaya-grey">Message is required</h3>}
                    {emailSent ? <h3 className="text-pitahaya-grey">Email Sent Successfully</h3> : ""}
                    {emailFailedToSend ? <h3 className="text-pitahaya-grey">Email Failed to send</h3> : ""}
                </div>
               
            </form>
        </section>
    );
}
export default Contact;