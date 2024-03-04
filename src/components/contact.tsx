import Link from "next/link";
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
        <section id="contact" className="w-full h-auto flex flex-col justify-center items-center gap-10 bg-pitahaya-white text-center">   
            <div className="flex flex-col justify-center items-center gap-5">
                <h2 className="text-pitahaya-black">Contact</h2>
                <h3 className="text-pitahaya-grey">Book a call with us today! Or send a message via the contact form.</h3>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center gap-5 px-5">
                <img src="https://dummyimage.com/300x100/808080/F8FBFC.jpg&text=Pitahaya+Labs+logo" />
                <a target="_blank" href="https://cnnct.uk/pitahayalabs/initial-learning-platform-discussion" >
                    <button className="bg-pitahaya-black text-pitahaya-white px-4 py-2 rounded-md w-36 sm:w-56 md:w-56 h-14  hover:cursor-pointer hover:bg-pitahaya-yellow">
                        <h3>Book a call</h3>
                    </button>                  
                </a>
            </div>
            <form 
                className="bg-pitahaya-beige h-full w-10/12 flex flex-col justify-center items-center gap-5 px-5 py-5 rounded-md"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input className="bg-pitahaya-white w-full rounded-md h-8" {...register("name", { required: true })} />
                <input className="bg-pitahaya-white w-full rounded-md h-8" {...register("email", { required: true })} />
                <input className="bg-pitahaya-white w-full rounded-md h-24" {...register("message", { required: true })} />
                <input className="bg-pitahaya-black text-pitahaya-white px-4 py-2 rounded-md w-36 sm:w-56 md:w-56 h-14  hover:cursor-pointer hover:bg-pitahaya-yellow" type="submit" />
            </form>
        </section>
    );
}
export default Contact;