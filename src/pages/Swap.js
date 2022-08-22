import { Tab } from "@headlessui/react";

export const Swap = () => {

  return (
    <div className="w-full justify-center flex">
      <div className="w-full max-w-5xl flex flex-col text-left px-4">
        <div className="text-4xl font-thin py-8 uppercase text-center">
          Swap
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="bg-white text-sm p-6 rounded-lg w-full max-w-lg justify-center flex flex-col">
            <div className="w-full">
              <div className="w-full flex pb-4">
                <div className="basis-1/2 text-stone-800">YOU SEND</div>
                <div className="basis-1/2 text-stone-800 text-right">BALANCE: xx ETH</div>
              </div>
              <div className="bg-stone-50 rounded-xl flex  flex-row p-3">
                <div className="flex  flex-col">
                  <div class="flex h-20 w-20 shrink-0 grow-0 items-center justify-center rounded-full bg-stone-200 text-green-700 text-xl cursor-pointer">
                    +
                  </div>
                  <div className="text-xs py-2">Select NFT</div>
                </div>
              </div>
            </div>
            <div className=" w-full mt-4">
              <div className="w-full flex pb-4">
                <div className="basis-1/2 text-stone-800">YOU RECEIVE</div>
                <div className="basis-1/2 text-stone-800 text-right underline cursor-pointer">Add counterparty address</div>
              </div>
              <div className="bg-stone-50 rounded-xl flex flex-row p-3">
                <div className="flex  flex-col">
                  <div class="flex h-20 w-20 shrink-0 grow-0 items-center justify-center rounded-full bg-stone-200 text-green-700 text-xl cursor-pointer">
                    ?
                  </div>
                  <div className="text-xs py-2">
                    Waiting for counterparty address...
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="bg-stone-500 flex text-md uppercase rounded-full focus:outline-stone-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-400 focus:ring-white p-4 justify-center text-stone-200 mt-4 text-center w-full" >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
