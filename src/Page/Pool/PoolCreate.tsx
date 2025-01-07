import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { MainContext } from "../../App";
import TokenModal from "../../Components/Trade/TokenModal.tsx"
import Input from "../../Components/Main/Input";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function PoolCreate () {
  const _MainContext = useContext(MainContext)
  const [deposit, setDeposit] = useState([0, 0])
  
  const handleDeposit = (pos : number, amount : number) => {
    setDeposit(prev => {
      const newDeposit =[...prev]
      newDeposit[pos] = isNaN(amount) ? 0 : amount
      return newDeposit
    })
  }

  return(
    <>
      <div id="pool_create_panel" className="flex justify-center items-start bg-[#131313] w-full min-h-screen">
        <div className="flex flex-col gap-4 max-w-[600px] w-[600px] p-3 rounded-[12px] border-[1px] border-[#2e2e2e] ">
          <div id="start" className="flex justify-between items-center w-full text-white mt-3">
            <Link to='/pool'> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </Link>
            <span>Add liquidity</span>
            <Menu as="div" className="relative inline-block text-left ">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ">
                  <svg className="hover:text-[#737373]" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M20.83 14.6C19.9 14.06 19.33 13.07 19.33 12C19.33 10.93 19.9 9.93999 20.83 9.39999C20.99 9.29999 21.05 9.1 20.95 8.94L19.28 6.06C19.22 5.95 19.11 5.89001 19 5.89001C18.94 5.89001 18.88 5.91 18.83 5.94C18.37 6.2 17.85 6.34 17.33 6.34C16.8 6.34 16.28 6.19999 15.81 5.92999C14.88 5.38999 14.31 4.41 14.31 3.34C14.31 3.15 14.16 3 13.98 3H10.02C9.83999 3 9.69 3.15 9.69 3.34C9.69 4.41 9.12 5.38999 8.19 5.92999C7.72 6.19999 7.20001 6.34 6.67001 6.34C6.15001 6.34 5.63001 6.2 5.17001 5.94C5.01001 5.84 4.81 5.9 4.72 6.06L3.04001 8.94C3.01001 8.99 3 9.05001 3 9.10001C3 9.22001 3.06001 9.32999 3.17001 9.39999C4.10001 9.93999 4.67001 10.92 4.67001 11.99C4.67001 13.07 4.09999 14.06 3.17999 14.6H3.17001C3.01001 14.7 2.94999 14.9 3.04999 15.06L4.72 17.94C4.78 18.05 4.89 18.11 5 18.11C5.06 18.11 5.12001 18.09 5.17001 18.06C6.11001 17.53 7.26 17.53 8.19 18.07C9.11 18.61 9.67999 19.59 9.67999 20.66C9.67999 20.85 9.82999 21 10.02 21H13.98C14.16 21 14.31 20.85 14.31 20.66C14.31 19.59 14.88 18.61 15.81 18.07C16.28 17.8 16.8 17.66 17.33 17.66C17.85 17.66 18.37 17.8 18.83 18.06C18.99 18.16 19.19 18.1 19.28 17.94L20.96 15.06C20.99 15.01 21 14.95 21 14.9C21 14.78 20.94 14.67 20.83 14.6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" fill="#9B9B9B"></path></svg>
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="text-[#828282]  w-[300px] absolute right-0 z-20 mt-2  origin-top-right rounded-md bg-[#131313] shadow-lg ring-1 ring-[#FFFFFF] ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-semibold ">Max.slippage </span>
                        <svg viewBox="0 0 16 16" fill="none" stroke-width="8" className="text-[rgb(94,94,94)] w-4 h-4" ><path d="M8.00001 1.33334C4.31801 1.33334 1.33334 4.318 1.33334 8C1.33334 11.682 4.31801 14.6667 8.00001 14.6667C11.682 14.6667 14.6667 11.682 14.6667 8C14.6667 4.318 11.682 1.33334 8.00001 1.33334ZM8.50001 11C8.50001 11.276 8.27601 11.5 8.00001 11.5C7.72401 11.5 7.50001 11.276 7.50001 11V7.95264C7.50001 7.67664 7.72401 7.45264 8.00001 7.45264C8.27601 7.45264 8.50001 7.67664 8.50001 7.95264V11ZM8.01336 6.33334C7.64536 6.33334 7.34327 6.03467 7.34327 5.66667C7.34327 5.29867 7.63868 5 8.00668 5H8.01336C8.38202 5 8.68002 5.29867 8.68002 5.66667C8.68002 6.03467 8.38136 6.33334 8.01336 6.33334Z" fill="currentColor"></path></svg>
                      </div>
                      <div className="flex hover:opacity-40 duration-300 items-center gap-1">
                        <span className="text-white font-semibold ">Auto</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-dovdUy hnyjJx"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem>
                    <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-semibold ">Transaction deadline</span>
                        <svg viewBox="0 0 16 16" fill="none" stroke-width="8" className="text-[rgb(94,94,94)] w-4 h-4" ><path d="M8.00001 1.33334C4.31801 1.33334 1.33334 4.318 1.33334 8C1.33334 11.682 4.31801 14.6667 8.00001 14.6667C11.682 14.6667 14.6667 11.682 14.6667 8C14.6667 4.318 11.682 1.33334 8.00001 1.33334ZM8.50001 11C8.50001 11.276 8.27601 11.5 8.00001 11.5C7.72401 11.5 7.50001 11.276 7.50001 11V7.95264C7.50001 7.67664 7.72401 7.45264 8.00001 7.45264C8.27601 7.45264 8.50001 7.67664 8.50001 7.95264V11ZM8.01336 6.33334C7.64536 6.33334 7.34327 6.03467 7.34327 5.66667C7.34327 5.29867 7.63868 5 8.00668 5H8.01336C8.38202 5 8.68002 5.29867 8.68002 5.66667C8.68002 6.03467 8.38136 6.33334 8.01336 6.33334Z" fill="currentColor"></path></svg>
                      </div>
                      <div className="flex hover:opacity-40 duration-300 items-center gap-1">
                        <span className="text-white font-semibold ">10m</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-dovdUy hnyjJx"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                  </MenuItem>

                  {/* divider */}
                  <MenuItem>
                    <div className="border-t-[1px] border-[#222222] w-[90%] m-3 "></div>
                  </MenuItem>

                  <MenuItem>
                    <div className="flex-col justify-between items-center cursor-pointer text-[14px] px-4 py-2">
                      <div className="flex justify-between items-start">
                        <div className="max-w-[70%]">
                          <span className="text-white font-semibold ">Default trade options</span>
                          <span className="text-[#828282] block pt-1 leading-4">The Uniswap client selects the cheapest trade option factoring price and network costs.</span>
                          
                        </div>
                        <div className={`border-[1px] bg-[#FC72FF] border-[#222222] rounded-[16px] w-[62px] h-[34px] p-1 flex items-center flex-row-reverse`}>
                          {/* <span className="font-semibold text-[#FC72FF] bg-[#311C31] rounded-[16px] py-1 px-3">Auto</span> */}
                          <div className="bg-white p-1 rounded-[50%]">
                            <svg viewBox="0 0 16 16" stroke-width="8" className="text-[rgb(252,114,255)] w-[14px] h-[14px]"><g stroke="currentColor" fill="none" stroke-width="1" fill-rule="evenodd"><g fill="currentColor" fill-rule="nonzero" transform="translate(2.5, 4)"><path d="M3.55465821,8 L3.55845321,8 C3.81525468,8 4.06231429,7.90333333 4.24468713,7.73073333 L10.7152208,1.57625328 C11.0949264,1.21600661 11.0949264,0.630565273 10.7152208,0.270319937 C10.3358589,-0.0901993995 9.72233481,-0.0901067328 9.34311041,0.270598603 L3.5641182,5.76674665 L1.66220743,3.9297133 C1.28548552,3.56584663 0.671967663,3.5625933 0.290128011,3.9193333 C-0.0925957655,4.27689997 -0.097102321,4.86150664 0.27920159,5.22497331 L2.86726929,7.7248 C3.04881026,7.9002 3.29572549,7.99906667 3.55465821,8 Z"></path></g></g></svg>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="text-[#828282] block pt-1 leading-4">Includes</span>
                        <svg className="mt-[6px]" width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="AutoRouterIconGradient3f99231e-0b47-4f52-adb2-9e5a6eb5bf70" x1="-10.1807" y1="-12.0006" x2="10.6573" y2="-11.6017" gradientUnits="userSpaceOnUse"><stop stop-color="#4673FA"></stop><stop offset="1" stop-color="#9646FA"></stop></linearGradient></defs><path d="M9.97131 6.19803C9.91798 6.07737 9.79866 6.00003 9.66666 6.00003H6.66666V1.00003C6.66666 0.862034 6.58201 0.738037 6.45267 0.688704C6.32267 0.638704 6.17799 0.674696 6.08532 0.776696L0.0853237 7.44336C-0.00267631 7.54136 -0.0253169 7.68137 0.0286831 7.80204C0.0820164 7.9227 0.20133 8.00003 0.33333 8.00003H3.33333V13C3.33333 13.138 3.41799 13.262 3.54732 13.3114C3.58665 13.326 3.62666 13.3334 3.66666 13.3334C3.75933 13.3334 3.85 13.2947 3.91467 13.2227L9.91467 6.55603C10.0027 6.4587 10.0246 6.31803 9.97131 6.19803Z" fill="url(#AutoRouterIconGradient3f99231e-0b47-4f52-adb2-9e5a6eb5bf70)"></path></svg>
                        <span className="text-[#9646fa]  block pt-1 leading-4">UniswapX</span>
                      </div>

                      
                    </div>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            
          </div>

          <div id="ceenter" className="flex flex-col border-t-[1px] border-[#2e2e2e] text-white text-[16px] py-4 font-semibold gap-3">
            <p>Select pair</p>
            <div className="flex gap-2">
              <div onClick={() => {_MainContext.currentToken.handleIsSellToken(true); _MainContext.modal.handleShowModal(true)}} 
                className="w-[50%] p-2 border-[1px] border-[#2e2e2e] rounded-[16px] cursor-pointer text-[20px] text-white flex justify-between items-center group">
                <div className="flex justify-center items-center">
                  <img className="rounded-[50%] w-[24px] h-[24px] group-hover:opacity-40 transition-all duration-300" src={_MainContext.sellToken.sellToken.src} alt="test"></img>
                  <p className="mx-[10px] text-[18px] font-semibold group-hover:opacity-40 transition-all duration-300">
                    {_MainContext.sellToken.sellToken.subTitle}
                  </p>
                </div>
                <svg className="mr-[10px] group-hover:opacity-40 transition-all duration-300" fill="none" width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg" ><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#9B9B9B"></path></svg>
              </div>

              <div onClick={() => {_MainContext.currentToken.handleIsSellToken(false); _MainContext.modal.handleShowModal(true)}} 
                className="w-[50%] p-2 border-[1px] border-[#2e2e2e] rounded-[16px] cursor-pointer text-[20px] text-white flex justify-between items-center group">
                <div className="flex justify-center items-center">
                  <img className="rounded-[50%] w-[24px] h-[24px] group-hover:opacity-40 transition-all duration-300" src={_MainContext.buyToken.buyToken.src} alt="test"></img>
                  <p className="mx-[10px] text-[18px] font-semibold group-hover:opacity-40 transition-all duration-300">
                    {_MainContext.buyToken.buyToken.subTitle}
                  </p>
                </div>
                <svg className="mr-[10px] group-hover:opacity-40 transition-all duration-300" fill="none" width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg" ><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#9B9B9B"></path></svg>
              </div>

            </div>

            {/* fee tier */}
            <div className="flex justify-between items-center border-[1px] border-[#2e2e2e] p-4  rounded-[16px]">
              <div className="flex flex-col items-start justify-start">
                <span>0.30% fee tier</span>
                <span className="text-[12px] px-2 bg-[#1b1b1b] rounded-[16px]">73 % select</span>
              </div>
              <div className="border-[1px] border-[#2e2e2e] px-2 py-1 text-[#8e8e8e] hover:bg-[#0E0E0E] rounded-[8px] cursor-pointer">
                Edit
              </div>
            </div>

            {/* Set price range */}
            <div className="flex justify-between items-center">
              <p>Set price range</p>
              <div className="flex justify-between items-center gap-2 cursor-pointer">
                <p className="border-[1px] border-[#2e2e2e] rounded-[8px] text-[14px] p-2 hover:border-[#5E5E5E]">Full range</p>
                <div className="border-[1px] border-[#2e2e2e] rounded-[8px] text-[14px] flex items-center justify-center">
                  <p className="px-2 py-1 bg-[#1b1b1b] text-[#535353] rounded-[8px]">{_MainContext.buyToken.buyToken.subTitle}</p>
                  <p className="px-2 py-1 rounded-[8px]">{_MainContext.sellToken.sellToken.subTitle}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center border-[1px] bg-[#1b1b1b] border-[#272727] p-4  rounded-[16px]">
              <div className="flex flex-col items-start justify-start">
                <span className="text-[12px] text-[#7b7b7b]">Low price</span>
                <span className="text-[18px]">0.002121202</span>
                <span className="text-[12px] text-[#7b7b7b]">WBTC per ETH</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-[20px] border-[1px] bg-[#131313] border-[#272727] rounded-[8px] p-1 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
                <span className="text-[20px] border-[1px] bg-[#131313] border-[#272727] rounded-[8px] p-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center border-[1px] bg-[#1b1b1b] border-[#272727] p-4  rounded-[16px]">
              <div className="flex flex-col items-start justify-start">
                <span className="text-[12px] text-[#7b7b7b]">Low price</span>
                <span className="text-[18px]">0.002121202</span>
                <span className="text-[12px] text-[#7b7b7b]">WBTC per ETH</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-[20px] border-[1px] bg-[#131313] border-[#272727] rounded-[8px] p-1 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
                <span className="text-[20px] border-[1px] bg-[#131313] border-[#272727] rounded-[8px] p-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </div>
            </div>

            {/* Deposit amounts */}
            <div className="flex justify-between items-center">
              <p>Deposit amounts</p>
            </div>

            <div className="flex flex-col justify-center items-center border-[1px] bg-[#1b1b1b] border-[#272727] p-4 rounded-[16px] gap-y-4">
              <div className="flex items-center justify-between w-full gap-3">
                <Input fontSize={20} placeholder="0" value={deposit[0]} handleChange={(e) => handleDeposit(0, parseInt(e.target.value))} />
                <div className="cursor-pointer text-[20px] text-white bg-[#131313] rounded-[24px] flex justify-center items-center hover:bg-[#252628] p-1">
                  <img className="rounded-[50%] mx-[6px] w-[28px] h-[28px]" src={_MainContext.sellToken.sellToken.src} alt="test"></img>
                  <p className="mr-[10px] font-semibold">
                    {_MainContext.sellToken.sellToken.subTitle}
                  </p>
                </div>
              </div>
              <span className="text-[12px] text-[#7b7b7b] self-start">{deposit[0] === 0 ? "-" : "$" + (deposit[0] * 1539).toFixed(2) }</span>
            </div>

            <div className="flex flex-col justify-center items-center border-[1px] bg-[#1b1b1b] border-[#272727] p-4 rounded-[16px] gap-y-4">
              <div className="flex items-center justify-between w-full gap-3">
                <Input fontSize={20} placeholder="0" value={deposit[1]} handleChange={(e) => handleDeposit(1, parseInt(e.target.value))}/>
                <div className="cursor-pointer text-[20px] text-white bg-[#131313] rounded-[24px] flex justify-center items-center hover:bg-[#252628] p-1">
                  <img className="rounded-[50%] mx-[6px] w-[28px] h-[28px]" src={_MainContext.buyToken.buyToken.src} alt="test"></img>
                  <p className="mr-[10px] font-semibold">
                    {_MainContext.buyToken.buyToken.subTitle}
                  </p>
                </div>
              </div>
              <span className="text-[12px] text-[#7b7b7b] self-start">{deposit[1] === 0 ? "-" : "$" + (deposit[1] * 355).toFixed(2) }</span>
            </div>

            <div className="bg-[#311C31] hover:bg-[#39273C] transition-all duration-300 flex justify-center items-center rounded-[18px] h-[56px] cursor-pointer">
              <p className="text-[#FC72FF] text-[18px] font-semibold w-full h-full text-center mt-[24px]">Connect wallet</p> 
            </div>
          </div>

        </div>
      </div>
      {_MainContext.modal.showModal && createPortal(<TokenModal />, document.body) }
    </>
  )
}