import jsonData from "../res/data.json";
import customer from "../res/customer-review.png";
import open from "../res/open.png";
import close from "../res/close.png";
import { forwardRef } from "react";

const Reviews = forwardRef((props, ref)=> {
  const data = jsonData.slice(0,3)
  return (
    <>
      <div ref={ref} className="min-h-[90vh] w-screen relative py-10 bg-[#050A30] overflow-x-hidden">
        <div className="flex mb-10 mx-10  justify-between px-2 flex-wrap">
          <div className="m-auto text-justify basis-3/5 text-3xl lg:text-4xl capitalize text-gray-50">
            <p className="text-center">See what our customers have to say</p>
          </div>
          <div className="rounded-md m-auto px-4 py-10 sm:py-0 basis-2/5p x-2">
            <img
              className="align-middle  lg:w-52 lg:h-52 rounded-xl ring-8 ring-offset- ring-white bg-white w-28 h-28"
              src={customer}
            ></img>
          </div>
        </div>
        <div className="flex sm:mt-16 flex-wrap justify-center w-full">
         

            {data.map((entry, index) => (
               <div className={`${index % 2 === 0 ? "sm:mb-14 sm:mt-0" : "sm:mt-14"} mt-10 flex sm:basis-1/4 mx-4 px-2 py-2 border border-white `}>
                  <div className=" basis-1/6 flex justify-center">
              <img className="w-5 h-5" src={open}></img>
              <span></span>
            </div>
            <div className="basis-4/6 flex mt-8 flex-col justify-between text-justify">
            <h2 className="text-center leading-tight flex-col flex-grow text-sm sm:text-xl font-bold sm:tracking-tight text-white">
              {entry.review}
            </h2>
            <h2 className="text-center mt-6 mb-2 text-sm lg:text-lg uppercase font-bold leading-tight tracking-tight text-gray-400">
              {entry.full_name}, {entry.age}
            </h2>
            </div>
            <div className=" basis-1/6 flex justify-center">
              <img className="w-5 h-5" src={close}></img>
              <span></span>
            </div>
            </div>
                )
                )
            }
            
          
        </div>
      </div>
    </>
  );
})

export default Reviews;
