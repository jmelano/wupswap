export const Nav = () => {

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center text-gray-400 text-md">
              <div className="text-stone-900 flex text-md rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white p-2" >
                WUSWAP
              </div>
            </div>
            <div className="flex justify-center w-full">
            </div>
          </div>
          <div className="right-0 flex items-center">
            <button type="button" className="bg-stone-500 flex text-sm rounded-full focus:outline-stone-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-400 focus:ring-white p-2 px-4 text-stone-200" >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};