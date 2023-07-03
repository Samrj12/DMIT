


function Intro(){

    return ( 
        <>
        <div className="py-20"  style={{minHeight: "90vh"}}//style={{background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"}}
        >
          <div className="container flex flex-col items-center justify-center h-3/5 mx-auto px-6">
          <img src={require('../res/brain.png')} alt="DMIT" className="origin-center rotate-90 w-64 h-64 mb-4 animate-up" />
          <div className='flex'>
          <h2 className="text-6xl font-bold px-1 mb-2 text-gray-950">
              D.
            </h2>
            <h2 className="text-6xl font-bold  px-1 mb-2 text-gray-700">
              M.
            </h2>
            <h2 className="text-6xl font-bold px-1 mb-2 text-gray-500">
              I.
            </h2>
            <h2 className="text-6xl font-bold  px-1 mb-2 text-gray-300">
              T.
            </h2>
          </div>
          <h2 className="text-3xl uppercase font-bold  px-1 mb-2 text-gray-900">
              Know your child's innate talent
            </h2>
          </div>
        </div>
        </>
        
     );
}

export default Intro;