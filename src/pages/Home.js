import { Tab } from "@headlessui/react";
import { Fragment } from 'react'
import { Swap } from "./Swap";
import { Orders } from "./Orders";
import { Help } from "./Help";

export const Home = () => {

  return (

    <div className="w-full justify-center flex flex-1 relative " >
      <div className="w-full max-w-5xl flex flex-col text-left p-0">
        <Tab.Group>
          <Tab.List className="inline-flex justify-center w-full " role="group">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'bg-[#243c4a] text-white border-[#658191] flex align-middle shadow-sm py-2 px-4 text-xs font-medium border border-l border-r-0 rounded-l-sm uppercase outline-0 tracking-widest' : 'bg-[#45606f] text-stone-900 flex align-middle shadow-sm py-2 px-4 text-xs font-medium border border-[#658191] border-r-0 rounded-l-sm uppercase tracking-widest'
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
                    selected ? 'bg-[#243c4a] text-white border-[#658191] flex align-middle shadow-sm py-2 px-4 text-xs font-medium border  border-l-0 border-r-0 uppercase outline-0 tracking-widest' : 'bg-[#45606f] text-[#061224] flex align-middle shadow-sm py-2 px-4 text-xs font-medium border border-[#658191] border-l-0 border-r-0 uppercase tracking-widest'
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
                    selected ? 'bg-[#243c4a] text-white border-[#658191] flex align-middle shadow-sm py-2 px-4 text-xs font-medium border border-l-0 rounded-r-sm uppercase outline-0 tracking-widest' : 'bg-[#45606f] text-[#061224] flex align-middle shadow-sm py-2 px-4 text-xs font-medium border border-[#658191] border-l-0 rounded-r-sm uppercase tracking-widest'
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
