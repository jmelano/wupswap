import { Tab } from "@headlessui/react";
import { Fragment } from 'react'

export const Orders = () => {

  return (
    <div className="w-full justify-center flex">
      <div className="w-full max-w-5xl flex flex-col text-left px-4">
      <div className="text-4xl font-black py-8 uppercase text-center tracking-widest text-[#658191]">
          Orders
        </div>
        <Tab.Group>
          <div className="flex w-full flex-col items-center">
            <Tab.List className="flex items-center gap-1 justify-center w-full max-w-4xl opacity-70 text-center" role="group">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected ? 'bg-white text-stone-900 border-stone-200  flex align-middle shadow-sm py-4 px-4 text-xs font-medium border border-b-0 rounded-t-md uppercase outline-0 w-1/2 justify-center' : 'bg-stone-200 text-stone-400 border-stone-200 flex align-middle shadow-sm py-4 px-4 text-xs font-medium border border-b-0 rounded-t-md uppercase w-1/2 justify-center'
                    }
                  >
                    Open orders
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected ? 'bg-white text-stone-900 border-stone-200  flex align-middle shadow-sm py-4 px-4 text-xs font-medium border border-b-0 rounded-t-md uppercase outline-0 w-1/2 justify-center' : 'bg-stone-200 text-stone-400 border-stone-200 flex align-middle shadow-sm py-4 px-4 text-xs font-medium border border-b-0 rounded-t-md uppercase w-1/2 justify-center'
                    }
                  >
                    History
                  </button>
                )}
              </Tab>
            </Tab.List>
            <div className="bg-white text-sm p-6 rounded-b-lg border-stone-200 border border-t-0 w-full max-w-4xl justify-center flex flex-col opacity-70">
              <Tab.Panels>
                <Tab.Panel>
                  <div className="w-full">
                    <div className="bg-stone-50 rounded-xl flex  flex-row p-3">
                      <div className="flex flex-col w-full text-center">
                        <div className="text-lg py-8 text-stone-400">No orders yet</div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="w-full">
                    <div className="bg-stone-50 rounded-xl flex  flex-row p-3">
                      <div className="flex flex-col w-full text-center">
                        <div className="text-lg py-8 text-stone-400">No history yet</div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </div>
        </Tab.Group>
      </div>
    </div>
  )
}
