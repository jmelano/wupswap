export const Nav = () => {

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center text-[#c7effb] text-sm">
              <div className=" flex text-md rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-2" >
                WUSWAP
              </div>
            </div>
            <div className="flex justify-center w-full">
            </div>
          </div>
          <div className="right-0 flex items-center">
            <button type="button" className="bg-[#243c4a] flex text-xs rounded-sm border-2 border-[#8dafbc] focus:outline-[#8dafbc] focus:ring-0 focus:ring-offset-0   p-1.5 uppercase px-4 text-[#c7effb]" >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};