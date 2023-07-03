import mail from "../res/mail.png";
import { forwardRef, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Reaptcha from "reaptcha";
import { InView } from "react-intersection-observer";

const Form = forwardRef((props, ref) => {
  const str = "a401f3e7e0c804e3f5fb0867f1705755";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [verified, setVerified] = useState(false);
  const captchaRef = useRef(null);

  const [inView, setInView] = useState(false);
  const getClass = (str) => {
    if(InView)
    {
      return str + " animate-hide";
    }
    else{
      return str;
    }
  }


  const Submit = async (data) => {
    try {
        var form = document.getElementById('form')
        form.action = `https://formsubmit.co/${str}`;
        form.submit()
        // Handle the response from the server
        // For example, display a success message or handle errors
    } catch (error) {
        // Handle any error that occurs during the submission
        console.error(error);
    }
  };
  const verify = () => {
    setVerified(true);
    console.log("reset");
    setTimeout(() => {
      captchaRef.current.reset();
      setVerified(false);
    }, 15000);
  };
  return (
    <>
      <div ref={ref} className="flex min-h-[120%] flex-1 flex-col justify-center px-16 sm:px-2 py-4 lg:px-8">
        <div className="sm:mx-auto py-10 sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-4xl uppercase font-bold leading-9 tracking-tight text-black">
            Connect with us
          </h2>
        </div>
        <div className="mb-20 sm:mx-auto sm:w-full sm:max-w-sm">
          <InView onChange={setInView}>
            <form
              id="form"
              className={`space-y-6 px-10 py-5 ${inView ? 'animate-hide' : ''} border-2 rounded-lg `}
              onSubmit={handleSubmit(Submit)}
              /*action= {`https://formsubmit.co/shrutijadhavwork@gmail.com`} */ method="POST"
            >
              <img
                className="mx-auto h-20 w-20 animate-upSlow"
                src={mail}
                alt="Email"
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  {errors.name && (
                    <p className="mt-2 text-red-500">{errors.name.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                        message: "Email is not valid",
                      },
                    })}
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="mt-2 text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contact
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="contact"
                    name="contact"
                    {...register("contact", {
                      pattern: {
                        value: /\b[1-9]{1}\d{2}[-.]?\d{3}[-.]?\d{4}\b/g,
                        message: "Contact should be exactly 10 digits",
                      },
                    })}
                    placeholder="Enter your contact"
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  {errors.contact && (
                    <p className="mt-2 text-red-500">
                      {errors.contact.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Enquiry
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    id="enquiry"
                    name="message"
                    {...register("enquiry", {
                      minLength: {
                        value: 25,
                        message: "Enter at least 25 characters.",
                      },
                    })}
                    className="block px-2 w-full h-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  {errors.enquiry && (
                    <p className="mt-2 text-red-500">
                      {errors.enquiry.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex"></div>
              <Reaptcha
                className="hidden"
                sitekey="6Lc43s0mAAAAAJNEnjQjtdmBOY6xx2vt7jK9E5vB"
                ref={captchaRef}
                onVerify={verify}
                size="invisible"
              />
              <div>
                {!verified ? (
                  <button
                    className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => {
                      console.log(captchaRef.current);
                      captchaRef.current.execute();
                    }}
                  >
                    Verify Captcha
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </InView>
        </div>
      </div>
    </>
  );
})

export default Form;
