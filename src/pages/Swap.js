import { Tab } from "@headlessui/react";

export const Swap = () => {

  return (
    <div className="w-full justify-center flex">
      <div className="w-full max-w-5xl flex flex-col text-left px-4">
        <div className="text-4xl font-black py-8 uppercase text-center tracking-widest text-[#658191]">
          Swap
        </div>
        <div className="flex w-full flex-col items-center opacity-[70%]">
          <div className=" bg-gradient-to-r from-[#16273a] to-[#05162e] text-sm p-6 rounded-lg w-full max-w-4xl justify-center flex flex-col border border-transparent  border-[#061224] shadow-2xl ">
            <div className="w-full">
              <div className="w-full flex pb-4">
                <div className="basis-1/2 text-[#658191] tr flexacking-widest">YOU SEND</div>
                <div className="basis-1/2 text-[#658191] tracking-widest text-right">BALANCE: xx ETH</div>
              </div>
              <div className="bg-gradient-to-br from-[#254052] via-[#354a57] to-[#1d2e3d]  rounded-md flex border border-[#45606f] flex-row p-3">
                <div className="flex  flex-col">
                  <div class="flex h-20 w-20 shrink-0 grow-0 items-center justify-center rounded-md bg-stone-200 text-green-700 text-xl cursor-pointer">
                    +
                  </div>
                  <div className="text-xs py-2">Select NFT</div>
                </div>
              </div>
            </div>
            <div className=" w-full mt-4">
              <div className="w-full flex pb-4">
                <div className="basis-1/2 text-[#658191] tracking-widest">YOU RECEIVE</div>
                <div className="basis-1/2 text-[#658191] tracking-widest text-right underline cursor-pointer">Add counterparty address</div>
              </div>
              <div className="bg-gradient-to-br from-[#254052] via-[#354a57] to-[#1d2e3d] rounded-md flex flex-row p-3 border border-[#45606f]">
                <div className="flex  flex-col">
                  <div class="flex h-20 w-20 shrink-0 grow-0 items-center justify-center rounded-md bg-stone-200 text-green-700 text-xl cursor-pointer">
                    ?
                  </div>
                  <div className="text-xs py-2">
                    Waiting for counterparty address...
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="bg-[#243c4a] hover:bg-[#45606f] flex text-md uppercase rounded-md border border-[#45606f] focus:outline-[#8dafbc] focus:ring-0  p-4 justify-center text-[#c7effb] mt-4 text-center w-full tracking-widest font-black" >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
