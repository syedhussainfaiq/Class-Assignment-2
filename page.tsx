export default  function Home(){
  return(
    <div className="flex flex-col item-centre px-4 md:px-16 bg-[#252B42] overflow-hidden">
      {/*navbar*/}
        <nav className="p-4 w-full">
          <div className="container mx-auto flex justify-between item-centre">
          <div className="text-white text-[20px] md:text-[24px] font-bold"><span>BrandName</span></div>
            {/*text navigation*/}
          
               <div className="space-x-4 text-white hidden md:flex mr-4 lg:mr-[450px] ml-4 gap-4 text-[14px] leading-[24px] mt-[16px"> 
                            <span>Home</span>
                            <span>Product</span>
                            <span>Pricing</span>
                            <span>Contact</span>
                </div>
                
                
                
                {/*login button*/}
                <div className="space-x-4">
                    <span className="text-[#fffff] text-[14px] hover:text-[#cccccc]">Login</span>
                <button className="bg-[#23A6F0] text-white px-4 py-2 rounded text-[14px]">JOIN US</button>
                 </div>
                 </div>
                 
                  </nav>
                
                
                
                        {/*main contant*/}

                    <div className="flex flex-col item-centre gap-[40px] mt-[104px]   ">
                      <div className="text-center">
                
                      
                      
                       <div className="text-[#35A6F0] text-[16px] font-bold">Welcome</div>
                       <h1 className="text-white text-5xl font-bold mb-6">Selling on the</h1>
                       <h1 className="text-white text-5xl font-bold mb-6">internet like a pro</h1> 
                       <p className="text-gray-300 text-lg mb-10">
                        We know how large object will act,but things on a <br/>small scale 
                        just do not act that way.
                        </p>
                        
                       <div className="flex space-x-4 mt-[40px] justify-centre item-centre">
                       <button className="bg-[#35A6F0] text-white px-6 py-2 rounded">Get Quote Now</button>
                       <button className="border border-blue-500 py
                       -2 px-6 rounded-lg text-blue-500 hover:bg-blue-400">Learn More</button>
                    </div>
                    </div>

                    {/*cards section*/}
                    <div className="flex flex-wrap justify-centre mt-[100px] gap-[50px] mb-[80px]">
                   
                   
                   
                   
                
        
        
                    {/* card 1*/}

                     <div className="bg-white text-black p-[35px] rounded-lg shadow-md w-full max-w-[328px]">
                      <div className="w-20 h-20 rounded-xl bg-[#FCEBEB] mx-auto mb-4 ml-2 "></div>
                      <h2 className="text-gray-800 font-bold text-xl mb-2">Traning courses</h2>
                      <div className="h-[2px] bg-[#F74040] w-[50px] my-[10px]"></div>
                      <p className="text-gray-600 mt-6 mb-4">The gradual accumulation of information about atomic and smal-scale behaviour...</p>
                      </div>

                    {/*  card 2*/}

                     <div className="bg-white text-black p-[35px] rounded-lg shadow-md w-full max-w-[328px] ">
                      <div className="w-20 h-20 rounded-xl bg-[#B9EAA8] mx-auto mb-4 ml-2"></div>
                      <h2 className="text-gray-800 font-bold text-xl mb-2">2,769  Online courses</h2>
                      <div  className="h-[2px] bg-[#F74040] w-[50px] my-[10px]"></div>
                      <p className="text-gray-600 mt-6 mb-4">The gradual accumulation of information about atomic and smal-scale behaviour...</p>
                     </div>

                    {/*card 3*/}
                     <div className="bg-[#35A6F0] text-white p-[35px] rounded-lg shadow-md w-full max-w-[328px]">
                      <div className="w-20 h-20 rounded-xl bg-[#fff] max-auto mb-4 ml-2"></div>
                      <h2 className="text-white font-bold text-xl mb-2">Traning courses </h2>
                      <div className="h-[2px] bg-[#F74040] w-[50px] my-[10px]"></div>
                      <p className="text-white mt-6 mb-4">The gradual accumulation of information about atomic and small-scale behaviour...</p>
                     </div>
                      </div>
                      </div>
                      </div>
  );
}

















