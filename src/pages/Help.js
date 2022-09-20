export const Help = () => {

  return (

    <div className="w-full justify-center flex">
      <div className="w-full max-w-5xl flex flex-col text-left px-4">
      <div className="text-4xl font-black py-8 uppercase text-center tracking-widest text-[#658191]">
          Help
        </div>
        <div className="flex w-full flex-col items-center">
        <div className=" bg-gradient-to-r from-[#16273a] to-[#05162e] text-sm p-6 rounded-lg w-full max-w-4xl justify-center flex flex-col border border-transparent  border-[#061224] shadow-2xl ">
            <div className="w-full">
              <div className="flex flex-col w-full text-left">
                <div className="text-lg py-2 text-white">Maker Side</div>
                <div className="text-sm  text-stone-400">
                  Go to the swap tab, then:
                  <ul className="py-4">
                    <li> 1. Select assets(ERC721 and/or ERC1155, ERC20) from your wallet</li>
                    <li>2. Input the taker address you want to swap with</li>
                    <li>3. Select the assets(ERC721 and/or ERC1155, ERC20) from taker wallet</li>
                    <li>4. After that click CONTINUE, and approve all assets you want to swap</li>
                    <li>5. Click CREATE SWAP botton and sign this order without any gas fee</li>
                  </ul>
                  That’s it, tell your friend to go to our website and check ORDERS tab to find this order!
                </div>
              </div>
              <div className="flex flex-col w-full text-left border-t mt-8 pt-6">
                <div className="text-lg py-2 text-white">Taker Side</div>
                <div className="text-sm text-stone-400">
                  <ul className="py-4">
                    <li>1. Visit your Orders, Open Orders and find orders with CONFIRM status</li>
                    <li>2. Click your order and review the swap details between you and the maker</li>
                    <li>3. Click approve and confirm each asset to be swapped</li>
                    <li>4. Click CONFIRM button to fill this order once approval completed</li>
                  </ul>
                  That’s it! SWAP DONE, CONGRATS!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
