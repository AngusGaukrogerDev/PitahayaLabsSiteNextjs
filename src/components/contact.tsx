import Link from "next/link";
import Image from "next/image";

import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>();
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return(
        <section id="contact" className="w-full h-auto flex flex-col justify-center items-center gap-12 bg-pitahaya-white text-center py-20 px-5 md:px-24">   
            {/* <div className="flex flex-col justify-center items-center gap-5 w-full px-5 b"> */}
                
                {/* <h3 className="text-pitahaya-grey">Book a call with us today! Or send a message via the contact form.</h3> */}
            {/* </div>   */}
            <div className="w-full sm:w-3/4 md:w-2/3 xl:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center gap-5 px-3 sm:px-5 py-5 border-2 border-pitahaya-grey-900 rounded-md">
                <h2 className="text-pitahaya-black">Book a call with us</h2>
                <h3>Get your project kicked off with a meeting to discuss the goals of your platform and how we can make it happen! </h3>
                {/* <img src="https://dummyimage.com/300x100/808080/F8FBFC.jpg&text=Pitahaya+Labs+logo" /> */}
                <a target="_blank" href="https://cnnct.uk/pitahayalabs/initial-learning-platform-discussion" >
                    <button className="bg-pitahaya-yellow text-pitahaya-white px-4 py-2 rounded-md w-36 sm:w-56 md:w-56 h-14  hover:cursor-pointer hover:bg-pitahaya-yellow">
                        <h3>Book a call!</h3>
                    </button>                  
                </a>
            </div>
            <form 
                className="border-2 md:h-screen w-full sm:w-3/4  md:w-2/3 flex flex-col justify-center items-center gap-5 px-3 sm:px-5 py-5 rounded-md border-pitahaya-grey-900"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2>Send us a message</h2>
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                    <div className="flex flex-row justify-center items-center gap-1">
                        <label className="ml-2 text-pitahaya-black" htmlFor="name">Name</label>
                        <label className="text-pitahaya-yellow">*</label>
                    </div>
                    <input className="bg-pitahaya-white w-full rounded-md h-12 border-2 border-pitahaya-grey pl-2" type="text" placeholder="What's your name?" {...register("name", { required: true })} />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                    <div className="flex flex-row justify-center items-center gap-1">
                        <label className="ml-2 text-pitahaya-black" htmlFor="email">Email</label>
                        <label className="text-pitahaya-yellow">*</label>
                    </div>
                    <input className="bg-pitahaya-white w-full rounded-md h-12 border-2 border-pitahaya-grey pl-2" type="email" placeholder="What's your email?" {...register("email", { required: true })} />
                </div>
                <div className="flex flex-col justify-center items-start gap-2 w-full">
                    <div className="flex flex-row justify-center items-center gap-1">
                        <label className="ml-2 text-pitahaya-black" htmlFor="message">Message</label>
                        <label className="text-pitahaya-yellow">*</label>
                    </div>
                    <textarea className="bg-pitahaya-white w-full rounded-md h-36 border-2 border-pitahaya-grey pl-2 pt-1" placeholder="What would you like to tell us?" {...register("message", { required: true })} />
                </div>
                <input className="bg-pitahaya-black text-pitahaya-white px-4 py-2 rounded-md w-36 sm:w-56 md:w-56 h-14  hover:cursor-pointer hover:bg-pitahaya-yellow" type="submit" />

            </form>
        </section>
    );
}
export default Contact;