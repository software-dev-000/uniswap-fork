import { Link } from "react-router-dom"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Pool () {
  return(
    <>
      <div id="pool_panel" className="flex justify-center items-start bg-[#131313] w-full min-h-screen">
        <div className="flex flex-col gap-4 max-w-[850px] w-[480px] sm:w-[850px] p-2">
          <div id="start" className="flex flex-col justify-start items-center sm:flex-row sm:justify-between w-full">
            <div className="flex gap-2 justify-start items-center cursor-pointer w-full sm:w-fit" >
              <p className="font-semibold text-white text-[28px]">Positions</p>

              <Menu as="div" className="relative inline-block text-left ">
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ">
                  <div className="flex items-center justify-center gap-1 rounded-[8px] border-[1px] border-[#2e2e2e] pl-3 py-1 hover:bg-[#1B1B1B]">
                    <span className="text-white font-semibold text-[16px]">v3</span>
                    <svg className="m-[10px] group-hover:opacity-40 transition-all duration-300" fill="none" width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg" ><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#9B9B9B"></path></svg>
                  </div>
                  {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" /> */}
                </MenuButton>

                <MenuItems
                  transition
                  className="text-[#828282] w-[160px] absolute z-10 mt-2  origin-top-right rounded-md bg-[#131313] shadow-lg ring-1 ring-[#FFFFFF] ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <div className="flex justify-start items-center cursor-pointer text-[16px] px-4 py-2 group gap-3">
                        <svg className="group-hover:text-white" width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2971 7.20007H12.4971V3.19995C12.4971 1.43263 13.9298 0 15.6971 0C17.4644 0 18.8972 1.43263 18.8972 3.19995H17.2971C17.2971 2.31631 16.5807 1.60005 15.6971 1.60005C14.8134 1.60005 14.0972 2.31631 14.0972 3.19995V12.0001H12.4971V8.80012H5.2971V10.4001H3.69705V3.20002C3.69705 1.4327 5.12982 6.80089e-05 6.89715 6.80089e-05C8.66447 6.80089e-05 10.0971 1.4327 10.0971 3.20002H8.49705C8.49705 2.31638 7.78079 1.60011 6.89715 1.60011C6.0135 1.60011 5.2971 2.31638 5.2971 3.20002V7.20007ZM1.59424 14.3428L1 12.8573C3.85069 11.717 6.97772 11.717 10.3501 12.8411C13.3778 13.8503 16.1173 13.8503 18.5999 12.8573L19.1942 14.3428C16.3435 15.4831 13.2164 15.4831 9.84407 14.3589C6.81633 13.3497 4.07687 13.3497 1.59424 14.3428ZM1.59424 18.3426L1 16.8571C3.85069 15.7168 6.97772 15.7168 10.3501 16.841C13.3778 17.8502 16.1173 17.8502 18.5999 16.8571L19.1942 18.3426C16.3435 19.4829 13.2164 19.4829 9.84407 18.3588C6.81633 17.3497 4.07687 17.3497 1.59424 18.3426Z" fill="currentColor"></path></svg>
                        <span className="font-semibold group-hover:text-white">v2 pools</span>
                      </div>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>

            <div className="flex gap-2 items-center w-full sm:w-fit">
              <Menu as="div" className="-ml-3 sm:ml-0 relative inline-block text-left w-1/2 sm:w-fit">
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ">
                  <div className="flex items-center justify-between sm:justify-center w-full sm:w-fit h-10 gap-1 rounded-[8px] border-[1px] border-[#2e2e2e] pl-3 py-1 hover:bg-[#1B1B1B] cursor-pointer">
                    <span className="text-white font-semibold text-[16px] ">More</span>
                    <svg className="m-[10px] group-hover:opacity-40 transition-all duration-300" fill="none" width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg" ><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#9B9B9B"></path></svg>
                  </div>
                    {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" /> */}
                </MenuButton>

                <MenuItems
                  transition
                  className="text-[#828282] w-[200px] absolute z-10 mt-2 py-1 origin-top-right rounded-md bg-[#131313] shadow-lg ring-1 ring-[#FFFFFF] ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2 group ">
                      <span className="font-semibold group-hover:text-white">Migrate</span>
                      <svg className="group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
                    </div>
                  </MenuItem>

                  <MenuItem>
                    <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2 group ">
                      <span className="font-semibold group-hover:text-white">V2 liquidity</span>
                      <svg className="group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
                    </div>
                  </MenuItem>

                  <MenuItem>
                    <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2 group ">
                      <span className="font-semibold group-hover:text-white">Learn</span>
                      <svg className="group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                  </MenuItem>
                </MenuItems>
              </Menu>
             
              <div className="flex items-center justify-center w-1/2 sm:w-fit h-10 gap-1 rounded-[8px] border-[1px] border-[#2e2e2e] px-3 py-1 bg-[#fc71fe] hover:bg-[#FB58FF] cursor-pointer">
                <span className="text-white font-semibold text-[16px]"><Link to='/pool/create'>+ New Position</Link></span>
              </div>
            </div>
          </div>

          <div id="center" className="flex flex-col gap-4 w-full h-[180px] items-center justify-center border-[1px] border-[#2e2e2e] rounded-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
            <span className="text-white text-[14px] font-semibold w-[260px] text-center" >Your active V3 liquidity positions will appear here.</span>
          </div>

          <div id="last" className="hidden sm:flex  justify-center gap-2">
            <div className="flex flex-col items-start justify-start w-[50%] gap-1 rounded-[12px] border-[1px] border-[#2e2e2e] px-3 py-3 hover:bg-[#1B1B1B] cursor-pointer">
              <div className="text-white text-[14px] font-semibold"><span>Learn about providing liquidity ↗</span></div>
              <div className="text-white text-[14px] font-semibold">Check out our v3 LP walkthrough and migration guides.</div>
            </div>

            <div className="flex flex-col items-start justify-center w-[50%] gap-1 rounded-[12px] border-[1px] border-[#2e2e2e] px-3 py-3 hover:bg-[#1B1B1B] cursor-pointer">
              <div className="text-white text-[14px] font-semibold text-start">Top pools ↗</div>
              <div className="text-white text-[14px] font-semibold">Explore Uniswap Analytics.</div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}