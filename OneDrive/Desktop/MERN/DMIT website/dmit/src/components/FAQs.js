import { ArrowDownCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import faq from "../res/faqIcon.svg";
import { useState } from "react";
const items = [{
    title: "What to do in DMIT's big life of the year",
    description: "It takes input in the form of values for Red, Green and Blue ranging from 0 to 255 and then converts those values to a hexadecimal string that can be used to specify color in html/css code. Photo editing software usually represents color in RGB and therefore if you would like to use the colors you use in your photo editing software as the background of your html element then you will have to get the hexadecimal representation of the RGB values."
}, {
    title: "What to do in DMIT's big life of the year",
    description: "It takes input in the form of values for Red, Green and Blue ranging from 0 to 255 and then converts those values to a hexadecimal string that can be used to specify color in html/css code. Photo editing software usually represents color in RGB and therefore if you would like to use the colors you use in your photo editing software as the background of your html element then you will have to get the hexadecimal representation of the RGB values."
}]
function FAQs() {
  const [selectedFAQ, setSelectedFAQ] = useState(-1);
  const handleFAQClick = (e, index) => {
    if(selectedFAQ === index)
    setSelectedFAQ(-1);
    else{
      setSelectedFAQ(index);
    }
  }

  console.log(items.length)
  return (
    <div className="h-screen bg-white flex flex-nowrap justify-center">
      <div className="flex flex-col container mb-10 items-center mt-16">
        <div id="title" className="self-center w-fit mb-16">
          <h1 className="text-slate-900 border-t-8 pb-1 border-b-8 rounded-lg border-slate-800 w-full flex justify-center font-bold text-4xl md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <div className="flex mt-16 justify-center">
            <img
              src={faq}
              alt="faqIcon"
              className="flex justify-center max-w-[10rem]"
            ></img>
          </div>
        </div>
        <div id="accordion" className="divide-y-2 mb-10  divide-gray-500" style={{ width: '70vw' }}>
            {
                (items.map((item, index)=>(
                    <div key={index} className={` bg-slate-900 ${index === 0 ? 'rounded-t-md' : (index===items.length - 1 ? 'rounded-b-md' : '')}`}>
                        <div onClick={(e)=>handleFAQClick(e, index)} className={`flex p-4 justify-between items-center text-xl `}>
                            <h2 className="text-3xl text-white basis-3/4 mx-2">{item.title}</h2>
                            <ChevronDownIcon  className={`self-end transition-transform duration-500 w-10 h-10 ${index === selectedFAQ ? 'rotate-180 text-white' : ' hover:text-white'}`}></ChevronDownIcon>
                        </div>
                       <div className={`bg-white border border-black text-justify motion-safe:transition-dropdown duration-700 ease-in-out text-slate-900 mt-2 w-full text-2xl ${index ===selectedFAQ ? 'p-4 max-h-96 overflow-auto' : 'px-4 max-h-0 overflow-hidden'} ${index ===items.length - 1 ? 'mb-16' : ''}`}>
                        {item.description}
                        </div>
                    </div>
                )))
            }
        </div>
      </div>
    </div>
  );
}

export default FAQs;
