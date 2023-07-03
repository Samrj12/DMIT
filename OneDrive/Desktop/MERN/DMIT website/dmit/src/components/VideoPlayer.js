import { forwardRef } from "react";
import Video from "./Video";
import { ArrowDownCircleIcon, ClockIcon } from "@heroicons/react/24/outline";
const VideoPlayer = forwardRef((props, ref) => {
  return (
    <>
      <div className="px-4 lg:px-14 py-8 w-full min-h-screen grid-cols-1 justify-items-center bg-gray-950">
        <div className="flex w-full">
          <h1 ref={ref} id="heading" class="mb-4 flex items-center justify-end text-5xl basis-1/2 font-extrabold leading-none tracking-tight md:text-6xl lg:text-7xl text-white">
            What's
          </h1>
          <h1 class="mb-4 ml-4 flex items-center text-5xl basis-1/2 font-extrabold leading-none tracking-tight md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-emerald-400">
            DMIT
          </h1>
        </div>
        <div className="md:mb-5 px-2 py-5 flex justify-center uppercase text-2xl text-center font-normal text-gray-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-200">
          Watch these short informative videos from us
        </div>
        
        <div className="mb-10 py-2 px-4 flex flex-col-reverse md:grid grid-cols-3 gap-3">
          <div className="col-span-2 rounded-lg">
            <Video></Video>
          </div>
          <div className="flex flex-col justify-center col-span-1">
            <div className="flex flex-col justify-center">
            <h2 class="h-full text-center mt-3 px-3 basis-1/3 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl lg:mt-6 text-white">
              Get to know it in:
            </h2>
            </div>
            <div className="basis-2/3 flex md:flex-col items-center justify-center gap-3">
              <button
                type="button"
                className="mt-5 mb-2 lg:scale-125 lg:mb-5 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2 text-center"
              >
                45s{" "}
                <ClockIcon className="block align-middle self-center w-5 h-5 lg:w-15 lg:h-15 animate-pulse"></ClockIcon>
              </button>
              <button
                type="button"
                className="mt-5 mb-2 text-white lg:scale-125  bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2 text-center"
              >
                90s{" "}
                <ClockIcon className="w-5 h-5 lg:w-15 lg:h-15 animate-pulse"></ClockIcon>
              </button>
            </div>
          </div>
          
        </div>
        <div className="px-8">
        <div className="border-gray-500 border border-double"/>
        </div>
        
        <div className="mt-10 py-2 px-4 flex flex-col gap-3">
          <h2 className="mt-15 mb-5 text-center text-4xl lg:text-5xl leading-9 tracking-tight text-rose-500 font-bold">
            Capitalize on YOUR strongest type of intelligence to achieve your goals
          </h2>
          <div className="container flex gap-10 justify-center flex-wrap mt-5 mb-10">
          <div className="w-1/7 px-2 rounded-xl w-fit h-fit mt-5 py-2 bg-gray-900 border-2 border-blue-600 transition-all ease-in-out hover:scale-110 ">
          <h2 className=" text-center text-4xl lg:text-5xl leading-9 tracking-tight text-transparent  bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 font-bold">
            AQ
          </h2>
          </div>
          
          <div className="w-1/7 rounded-xl h-15 mt-5 px-3 py-2 bg-gray-900 border-2 border-red-600 transition-all ease-in-out hover:scale-110"><h2 className="text-center text-4xl lg:text-5xl leading-9 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-bold">
            IQ
          </h2></div>
          

          <div className="w-1/7 rounded-xl h-fit mt-5 px-3 py-2 bg-gray-900 border-2 border-purple-600 transition-all ease-in-out hover:scale-110"> <h2 className="text-center text-4xl lg:text-5xl leading-9 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 font-bold">
            CQ
          </h2></div>
         

          <div className="w-1/7 rounded-xl h-fit mt-5 px-3 py-2 bg-gray-900 border-2 border-red-600 transition-all ease-in-out hover:scale-110"><h2 className= "text-center text-4xl lg:text-5xl leading-9 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 font-bold">
            LQ
          </h2>
</div>
          
          <div className="w-1/7 rounded-xl h-fit mt-5 px-3 py-2 bg-gray-900 border-2 border-green-600 transition-all ease-in-out hover:scale-110"><h2 className="text-center text-4xl lg:text-5xl leading-9 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-400 to-purple-700 font-bold">
            IQ
          </h2></div>
          

          <div className="w-1/7 rounded-xl h-fit mt-5 px-2 lg:px-0  py-2 bg-gray-900 border-2 border-yellow-600 transition-all ease-in-out hover:scale-110"><h2 className="text-center text-4xl lg:text-5xl leading-9 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300 font-bold">
            MQ
          </h2></div>
          

          <div className="w-1/7 rounded-xl h-fit mt-5 px-3 lg:px-0 py-2 bg-gray-900 border-2 border-purple-600 transition-all ease-in-out hover:scale-110">
          <h2 className="text-center text-4xl lg:text-5xl leading-9 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-400 font-bold">
            SQ
          </h2>
          </div>
          
          </div>
        </div>
        <h2 className="col-span-3 mt-10 text-center text-4xl lg:text-6xl font-bold leading-9 tracking-tight text-gray-200">
            Want to learn more about it from us?
        </h2>
        <div className="flex justify-center mt-8">
        <ArrowDownCircleIcon className="w-14 h-14 align-middle animate-pulse"></ArrowDownCircleIcon>
        </div>
      </div>
    </>
  );
})

export default VideoPlayer;
