import { Tab } from "@headlessui/react";
import { Fragment } from 'react'
import { Swap } from "./Swap";
import { Orders } from "./Orders";
import { Help } from "./Help";

export const Home = () => {

  return (

    <div className="w-full justify-center flex flex-1 relative bg-stone-100 ">
      <div className="w-full max-w-5xl flex flex-col text-left p-0">
        <Tab.Group>
          <Tab.List className="inline-flex justify-center w-full" role="group">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'bg-stone-400 text-white border-stone-400 flex align-middle shadow-sm py-2 px-4 text-xs font-medium border border-l-0 border-r-0 rounded-l-md uppercase outline-0' : 'bg-white text-stone-900 flex align-middle shadow-sm py-2 px-4 text-xs font-medium border border-stone-200 border-r-0 rounded-l-md uppercase'
                  }
                >
                  Swap
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'bg-stone-400 text-white border-stone-400 flex align-middle shadow-sm py-2 px-4 text-xs font-medium border  border-l-0 border-r-0 uppercase outline-0' : 'bg-white text-stone-900 flex align-middle shadow-sm py-2 px-4 text-xs font-medium border border-stone-200 border-l-0 border-r-0 uppercase'
                  }
                >
                  Orders
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'bg-stone-400 text-white border-stone-400 flex align-middle shadow-sm py-2 px-4 text-xs font-medium border border-l-0 rounded-r-md uppercase outline-0' : 'bg-white text-stone-900 flex align-middle shadow-sm py-2 px-4 text-xs font-medium border border-stone-200 border-l-0 rounded-r-md uppercase'
                  }
                >
                  Help
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Swap />
            </Tab.Panel>
            <Tab.Panel>
              <Orders />
            </Tab.Panel>
            <Tab.Panel>
              <Help />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <div className="w-full text-center text-stone-400 text-xs  py-8">
          Powered by 0x Protocol v3 and WakeUp Labs.
        </div>
      </div>
    </div>
  )
}
