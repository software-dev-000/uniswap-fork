import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { createPortal } from "react-dom";
import Input  from "../Components/Main/Input.tsx"
import TokenModal from "../Components/Trade/TokenModal.tsx"
import { MainContext } from "../App.tsx";
import SelectTokenButton from "../Components/Main/SelectTokenButton.tsx"
import SellToBuy from "../Components/Main/SellToBuy.tsx";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Trade () {
  const _MainContext = useContext(MainContext)

  return(
    <>
      <div id="trade_panel" className="flex justify-center items-start bg-[#131313] w-full min-h-screen">
        <div className="w-[480px] h-[320px] bg-[#131313] mt-[50px] rounded-[32px] relative">
          <div className="flex mb-[10px]">
            <div className="flex w-2/3 justify-between px-[20px] ">
              <TabButton title="Swap" handleClick={() => _MainContext.trade.handleTradeTab(0)} isActive={_MainContext.trade.tradeTab === 0}/>
              <TabButton title="Limit" handleClick={() => _MainContext.trade.handleTradeTab(1)} isActive={_MainContext.trade.tradeTab === 1}/>
              <TabButton title="Send" handleClick={() => _MainContext.trade.handleTradeTab(2)} isActive={_MainContext.trade.tradeTab === 2}/>
              <TabButton title="Buy" handleClick={() => _MainContext.trade.handleTradeTab(3)} isActive={_MainContext.trade.tradeTab === 3}/>
            </div>
            { _MainContext.trade.tradeTab === 0 &&
            <>
              <div className="ml-auto px-[10px] cursor-pointer">
                <Menu as="div" className="relative inline-block text-left ">
                  <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ">
                      <svg className="hover:text-[#737373]" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M20.83 14.6C19.9 14.06 19.33 13.07 19.33 12C19.33 10.93 19.9 9.93999 20.83 9.39999C20.99 9.29999 21.05 9.1 20.95 8.94L19.28 6.06C19.22 5.95 19.11 5.89001 19 5.89001C18.94 5.89001 18.88 5.91 18.83 5.94C18.37 6.2 17.85 6.34 17.33 6.34C16.8 6.34 16.28 6.19999 15.81 5.92999C14.88 5.38999 14.31 4.41 14.31 3.34C14.31 3.15 14.16 3 13.98 3H10.02C9.83999 3 9.69 3.15 9.69 3.34C9.69 4.41 9.12 5.38999 8.19 5.92999C7.72 6.19999 7.20001 6.34 6.67001 6.34C6.15001 6.34 5.63001 6.2 5.17001 5.94C5.01001 5.84 4.81 5.9 4.72 6.06L3.04001 8.94C3.01001 8.99 3 9.05001 3 9.10001C3 9.22001 3.06001 9.32999 3.17001 9.39999C4.10001 9.93999 4.67001 10.92 4.67001 11.99C4.67001 13.07 4.09999 14.06 3.17999 14.6H3.17001C3.01001 14.7 2.94999 14.9 3.04999 15.06L4.72 17.94C4.78 18.05 4.89 18.11 5 18.11C5.06 18.11 5.12001 18.09 5.17001 18.06C6.11001 17.53 7.26 17.53 8.19 18.07C9.11 18.61 9.67999 19.59 9.67999 20.66C9.67999 20.85 9.82999 21 10.02 21H13.98C14.16 21 14.31 20.85 14.31 20.66C14.31 19.59 14.88 18.61 15.81 18.07C16.28 17.8 16.8 17.66 17.33 17.66C17.85 17.66 18.37 17.8 18.83 18.06C18.99 18.16 19.19 18.1 19.28 17.94L20.96 15.06C20.99 15.01 21 14.95 21 14.9C21 14.78 20.94 14.67 20.83 14.6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" fill="#9B9B9B"></path></svg>
                      {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" /> */}
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="text-[#828282]  w-[300px] absolute right-0 z-20  origin-top-right rounded-md bg-[#131313] shadow-lg ring-1 ring-[#FFFFFF] ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
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
            </>
            }
            
          </div>
          { _MainContext.trade.tradeTab === 0 && <SwapTab />}
          { _MainContext.trade.tradeTab === 1 && <LimitTab />}
          { _MainContext.trade.tradeTab === 2 && <SendTab />}
          { _MainContext.trade.tradeTab === 3 && <BuyTab />} 
          
        </div>
      </div>
      {_MainContext.modal.showModal && createPortal(<TokenModal />, document.body) }
      
      
    </>
  )
}




const SwapTab = () => {
  const [sellAmmount, setSellAmount] = useState(0)
  const [buyAmmount, setBuyAmount] = useState(0)

  const handleSellAmount = (v: number) => {
    setSellAmount(v)
  }
  const handleBuyAmount = (v: number) => {
    setBuyAmount(v)
  }
  return (
    <div className='relative'>
      <div className="mx-[10px] my-[4px] bg-[#1B1B1B] p-[20px] rounded-[24px] border-[#1B1B1B] border-[1px] hover:border-[#252628] hover:border-[1px]">
        <div className="text-[18px] text-[#5E5E5E]">Sell</div>

        <div className="flex justify-between">
          <span className={`text-[32px] ${sellAmmount!==0 ? "text-white" : "text-[#5E5E5E]"} `}><Input placeholder="0" fontSize={32} value={sellAmmount} handleChange={(e)=> handleSellAmount(Number(e.target.value))}/></span>  
          <SelectTokenButton isSellToken={true}/>
        </div>
      </div>
      
      <SellToBuy />

      <div className="mx-[10px] my-[4px] bg-[#1B1B1B] p-[20px] rounded-[24px] border-[#1B1B1B] border-[1px] hover:border-[#252628] hover:border-[1px]">
        <div className="text-[18px] text-[#5E5E5E]">Buy</div>
        <div className="flex justify-between">
          <span className={`text-[32px] ${buyAmmount!==0 ? "text-white" : "text-[#5E5E5E]"} `}><Input placeholder="0" fontSize={32} value={buyAmmount} handleChange={(e)=> handleBuyAmount(Number(e.target.value))}/></span>  
          <SelectTokenButton isSellToken={false}/>
        </div>
      </div>

      <div className="bg-[#311C31] hover:bg-[#39273C] transition-all duration-300 flex justify-center items-center rounded-[18px] h-[56px] mx-[10px] cursor-pointer">
        <Link to="/" className="text-[#FC72FF] text-[18px] font-semibold w-full h-full text-center mt-[24px]">Connect wallet</Link>
      </div>
    </div>
  )
}


const LimitTab= () => {
  const [sellAmmount, setSellAmount] = useState(0)
  const [buyAmmount, setBuyAmount] = useState(0)

  const [rate, setRate] = useState(100)
  const [period, setPeriod] = useState(1)

  const worthValue = (2525.25 * rate / 100).toFixed(2)

  const handleRate = (value : number) : void => {
    setRate(value)
  }

  const handlePeriod = (value : number) : void => {
    setPeriod(value)
  }

  const handleSellAmount = (v: number) => {
    setSellAmount(v)
  }

  const handleBuyAmount = (v: number) => {
    setBuyAmount(v)
  }

  return (
    <>
      <div className="mx-[10px] my-[4px] bg-[#1B1B1B] p-[20px] rounded-[24px] flex flex-col border-[#1B1B1B] border-[1px] hover:border-[#252628] hover:border-[1px]">
        <div className="flex justify-between text-[#9B9B9B] text-[14px] font-semibold">
          <div className="flex gap-2">
            <div>
              When 1
            </div>
            <div className="flex justify-center items-center group cursor-pointer ">
              <img className="w-[20px] h-[20px] group-hover:opacity-50 transition-all duration-300" src="/img/home/icon-ETH.png" alt="test" ></img>
              <p className="text-white ml-[6px] group-hover:text-[#A4A4A4]  transition-all duration-300">ETH</p>
            </div>
            <div>
              is worth
            </div>
          </div>
          <div className="ml-auto">
            <svg className="hover:opacity-40 cursor-pointer transition-all" width="16px" height="16px" viewBox="0 3 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4834 5.71191C19.0879 5.29883 18.4727 5.30762 18.0859 5.71191L13.6562 10.2471C13.4805 10.4229 13.3662 10.6953 13.3662 10.9326C13.3662 11.4863 13.7529 11.8643 14.2979 11.8643C14.5615 11.8643 14.7725 11.7764 14.9482 11.5918L16.7588 9.71094L17.9189 8.375L17.8486 10.2383L17.8486 21.6465C17.8486 22.1914 18.2441 22.5869 18.7891 22.5869C19.334 22.5869 19.7207 22.1914 19.7207 21.6465L19.7207 10.2383L19.6592 8.375L20.8105 9.71094L22.6211 11.5918C22.7969 11.7764 23.0166 11.8643 23.2803 11.8643C23.8164 11.8643 24.2031 11.4863 24.2031 10.9326C24.2031 10.6953 24.0889 10.4229 23.9131 10.2471L19.4834 5.71191ZM7.84668 22.2793C8.24218 22.6924 8.85742 22.6836 9.24414 22.2793L13.6738 17.7529C13.8496 17.5684 13.9639 17.2959 13.9639 17.0586C13.9639 16.5137 13.5771 16.1357 13.0322 16.1357C12.7773 16.1357 12.5576 16.2236 12.3818 16.3994L10.5713 18.2803L9.41992 19.6162L9.48144 17.7529L9.48144 6.34473C9.48144 5.80859 9.08594 5.4043 8.54101 5.4043C8.00488 5.4043 7.60937 5.80859 7.60937 6.34473L7.60937 17.7529L7.6709 19.6162L6.51953 18.2803L4.70898 16.3994C4.5332 16.2236 4.31347 16.1357 4.05859 16.1357C3.51367 16.1357 3.12695 16.5137 3.12695 17.0586C3.12695 17.2959 3.24121 17.5684 3.41699 17.7529L7.84668 22.2793Z" fill="#9B9B9B"></path></svg>
          </div>
        </div>

        <div className="text-[36px] text-[#FFFFFF] font-semibold">{worthValue}</div>
        
        <div className="flex text-[16px]  font-semibold">
          <RateButton title="Market" handleClick={() => handleRate(100) } isActive={rate===100} />
          <RateButton title="+1%" handleClick={() => handleRate(101) } isActive={rate===101} />
          <RateButton title="+5%" handleClick={() => handleRate(105) } isActive={rate===105} />
          <RateButton title="+10%" handleClick={() => handleRate(110) } isActive={rate===110} />
        </div>

      </div>

      <div className="mx-[10px] my-[4px] bg-[#1B1B1B] p-[20px] rounded-[24px] border-[#1B1B1B] border-[1px] hover:border-[#252628] hover:border-[1px]">
        <div className="text-[18px] text-[#5E5E5E]">Sell</div>
        <div className="flex justify-between">
          <span className={`text-[32px] ${sellAmmount!==0 ? "text-white" : "text-[#5E5E5E]"} `}><Input placeholder="0" fontSize={32} value={sellAmmount} handleChange={(e)=> handleSellAmount(Number(e.target.value))}/></span>  
          {/* <div className="cursor-pointer text-[20px] text-white bg-[#131313] rounded-[24px] flex justify-center items-center">
            <img className="mx-[6px] w-[28px] h-[28px]" src="/img/home/icon-ETH.png" alt="test"></img>
            <p className="mr-[10px] font-semibold">
              ETH
            </p>
            <svg className="mr-[10px]" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#FFFFFF"></path></svg>
          </div> */}
          <SelectTokenButton  isSellToken={true}/>

        </div>
      </div>
      
      <SellToBuy />


      <div className="mx-[10px] my-[4px] bg-[#1B1B1B] p-[20px] rounded-[24px] border-[#1B1B1B] border-[1px] hover:border-[#252628] hover:border-[1px]">
        <div className="text-[18px] text-[#5E5E5E]">Buy</div>
        <div className="flex justify-between">
          <span className={`text-[32px] ${buyAmmount!==0 ? "text-white" : "text-[#5E5E5E]"} `}><Input placeholder="0" fontSize={32} value={buyAmmount} handleChange={(e)=> handleBuyAmount(Number(e.target.value))}/></span>

          {/* <div className="cursor-pointer text-[20px] text-white bg-[#131313] rounded-[24px] flex justify-center items-center">
            <img className="mx-[6px] w-[28px] h-[28px]" src="/img/home/icon-ETH.png" alt="test"></img>
            <p className="mr-[10px] font-semibold">
              USDC
            </p>
            <svg className="mr-[10px]" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#FFFFFF"></path></svg>
          </div> */}
          <SelectTokenButton  isSellToken={false}/>

        </div>
      </div>

      <div className="mx-[10px] my-[4px]  p-[20px] rounded-[24px] flex justify-between">
        <div className="text-[#9B9B9B] font-semibold">Expiry</div>
        <div className="flex mr-[-10px]">
          <RateButton title="1 day" handleClick={() => handlePeriod(1) } isActive={period===1} />
          <RateButton title="1 week" handleClick={() => handlePeriod(7) } isActive={period===7} />
          <RateButton title="1 month" handleClick={() => handlePeriod(30) } isActive={period===30} />
          <RateButton title="1 year" handleClick={() => handlePeriod(365) } isActive={period===365} />
        </div>
      </div>


      <div className="bg-[#311C31] hover:bg-[#39273C] my-[4px] transition-all duration-300 flex justify-center items-center rounded-[18px] h-[56px] mx-[10px]  cursor-pointer">
        <p className="text-[#FC72FF] text-[18px] font-semibold w-full h-full text-center mt-[24px]">Connect wallet</p> 
      </div>

      <div className="mx-[10px] my-[10px] bg-[#1B1B1B] p-[10px_0px_10px_10px] rounded-[16px] flex">
        <svg className="ml-[10px] w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor" strokeWidth="8" ><path d="M21.6074 17.1522L15.0004 4.79599C13.7204 2.40199 10.2814 2.40199 9.00042 4.79599L2.39349 17.1522C1.21949 19.3482 2.81353 22.0001 5.30853 22.0001H18.6923C21.1863 22.0001 22.7814 19.3472 21.6074 17.1522ZM11.2504 10.0001C11.2504 9.58609 11.5864 9.25009 12.0004 9.25009C12.4144 9.25009 12.7504 9.58609 12.7504 10.0001V14.0001C12.7504 14.4141 12.4144 14.7501 12.0004 14.7501C11.5864 14.7501 11.2504 14.4141 11.2504 14.0001V10.0001ZM12.0204 18.0001C11.4684 18.0001 11.0153 17.5521 11.0153 17.0001C11.0153 16.4481 11.4584 16.0001 12.0104 16.0001H12.0204C12.5734 16.0001 13.0204 16.4481 13.0204 17.0001C13.0204 17.5521 12.5724 18.0001 12.0204 18.0001Z" fill="#9B9B9B"></path></svg>
        <div className="ml-[8px] text-[14px] text-white font-semibold">
          Limits may not execute exactly when tokens reach the specified price. 
          <span className="text-[13px] text-[#FC72FF]"> Learn more</span>
        </div>
        
      </div>
    </>
  )
}


const SendTab = () => {
  const [amount, setAmount] = useState(0)

  const handleChange = (value : number) : void => {
    setAmount(value)
  }

  const _MainContext = useContext(MainContext)

  return (
    <>
      <div className="m-[10px] bg-[#1B1B1B] p-[20px] rounded-[24px]">
        <div className="text-[14px] text-[#9B9B9B] font-semibold mb-[50px]">You're sending</div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <span className={`text-[70px] ${amount!==0 ? "text-white" : "text-[#5E5E5E]"} inline-flex `}>$<Input placeholder="0" fontSize={70} handleChange={(e)=> handleChange(Number(e.target.value))}/></span>
          </div>
          <div className="text-[#5E5E5E] font-semibold flex mb-[60px] group cursor-pointer">
            <span className="group-hover:opacity-40 transition-all duration-300">0 ETH</span>
            <svg className="group-hover:opacity-40 cursor-pointer transition-all duration-300 ml-[6px] mt-[5px]" width="16px" height="16px" viewBox="0 3 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4834 5.71191C19.0879 5.29883 18.4727 5.30762 18.0859 5.71191L13.6562 10.2471C13.4805 10.4229 13.3662 10.6953 13.3662 10.9326C13.3662 11.4863 13.7529 11.8643 14.2979 11.8643C14.5615 11.8643 14.7725 11.7764 14.9482 11.5918L16.7588 9.71094L17.9189 8.375L17.8486 10.2383L17.8486 21.6465C17.8486 22.1914 18.2441 22.5869 18.7891 22.5869C19.334 22.5869 19.7207 22.1914 19.7207 21.6465L19.7207 10.2383L19.6592 8.375L20.8105 9.71094L22.6211 11.5918C22.7969 11.7764 23.0166 11.8643 23.2803 11.8643C23.8164 11.8643 24.2031 11.4863 24.2031 10.9326C24.2031 10.6953 24.0889 10.4229 23.9131 10.2471L19.4834 5.71191ZM7.84668 22.2793C8.24218 22.6924 8.85742 22.6836 9.24414 22.2793L13.6738 17.7529C13.8496 17.5684 13.9639 17.2959 13.9639 17.0586C13.9639 16.5137 13.5771 16.1357 13.0322 16.1357C12.7773 16.1357 12.5576 16.2236 12.3818 16.3994L10.5713 18.2803L9.41992 19.6162L9.48144 17.7529L9.48144 6.34473C9.48144 5.80859 9.08594 5.4043 8.54101 5.4043C8.00488 5.4043 7.60937 5.80859 7.60937 6.34473L7.60937 17.7529L7.6709 19.6162L6.51953 18.2803L4.70898 16.3994C4.5332 16.2236 4.31347 16.1357 4.05859 16.1357C3.51367 16.1357 3.12695 16.5137 3.12695 17.0586C3.12695 17.2959 3.24121 17.5684 3.41699 17.7529L7.84668 22.2793Z" fill="#5E5E5E"></path></svg>
          </div>
          
        </div>

        <div className="border-[1px] border-[#131313] -mx-[20px] w-[calc(100%+40px)] mb-[10px]"></div>

        <div onClick={() => {_MainContext.currentToken.handleIsSellToken(true); _MainContext.modal.handleShowModal(true)}} className="cursor-pointer text-[20px] text-white  rounded-[24px] flex justify-between items-center group">
          <div className="flex justify-center items-center">
            <img className="rounded-[50%]  w-[36px] h-[36px] group-hover:opacity-40 transition-all duration-300" src={_MainContext.sellToken.sellToken.src} alt="test"></img>
            <p className="mx-[10px] text-[18px] font-semibold group-hover:opacity-40 transition-all duration-300">
              {_MainContext.sellToken.sellToken.subTitle}
            </p>
          </div>

          <svg className="mr-[10px] group-hover:opacity-40 transition-all duration-300" fill="none" width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg" ><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#9B9B9B"></path></svg>
        </div>
      </div>
      
      

      <div className="m-[10px] bg-[#1B1B1B] p-[20px] rounded-[24px] mt-[-6px]">
        <div className="text-[#8F8F8F]">To</div>
        <div className="text-white pt-[10px]">
          <Input placeholder="Wallet address or ENS name" />
        </div>
      </div>

      <div className="bg-[#311C31] hover:bg-[#39273C] transition-all duration-300 flex justify-center items-center rounded-[18px] h-[56px] m-[10px] mt-[-6px] cursor-pointer">
        <Link to="/" className="text-[#FC72FF] text-[18px] font-semibold w-full h-full text-center mt-[24px]">Connect wallet</Link>
      </div>
    </>
  )
}


const BuyTab = () => {
  const [amount, setAmount] = useState(0)
  const [preAmount, setPreAmount] = useState(0)

  const handlePreAmount = (value : number) : void => {
    setPreAmount(value)
    setAmount(value)
  }
  
  const handleAmount = (value : number) : void => {
    setAmount(value)
  }
 

  const _MainContext = useContext(MainContext)

  return (
    <>
      <div className="m-[10px] bg-[#1B1B1B] p-[20px] rounded-[24px]">
        <div className="mb-[50px] flex justify-between">
          <div className="text-[14px] text-[#9B9B9B] font-semibold ">You're buying</div>
          <div className="flex justify-center rounded-[16px] p-[6px] items-center text-[#5E5E5E] cursor-pointer group bg-[#373737] hover:opacity-80 duration-300">
            <img className="w-[20px] h-[20px] group-hover:opacity-40 duration-300" src="/img/home/icon-ETH.png" alt="test"></img>
            <svg className="ml-[10px] group-hover:opacity-40 duration-300" fill="none" width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg" ><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#9B9B9B"></path></svg>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div>
            <span className={`text-[70px] ${amount!==0 ? "text-white" : "text-[#5E5E5E]"} inline-flex `}>$<Input placeholder="0" value={amount} fontSize={70} handleChange={(e)=> handleAmount(Number(e.target.value))}/></span>
          </div>
          
          <div onClick={() => {_MainContext.currentToken.handleIsSellToken(false); _MainContext.modal.handleShowModal(true)}} className="flex justify-center items-center text-[#5E5E5E] cursor-pointer group">
            <img className="w-[20px] h-[20px] group-hover:opacity-40 duration-300 rounded-[50%]" src={_MainContext.buyToken.buyToken.src} alt="test"></img>
            <p className="mx-[10px] text-[18px] font-semibold group-hover:opacity-40 duration-300">
              {_MainContext.buyToken.buyToken.subTitle}
            </p>
            <svg className="mr-[10px] group-hover:opacity-40 duration-300" fill="none" width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg" ><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#9B9B9B"></path></svg>
          </div>

          <div className="text-[#5E5E5E] font-semibold flex mb-[60px] mt-[20px] group cursor-pointer">
            <RateButton title="$100" handleClick={() => handlePreAmount(100) } isActive={preAmount===100} />
            <RateButton title="$300" handleClick={() => handlePreAmount(300) } isActive={preAmount===300} />
            <RateButton title="$1000" handleClick={() => handlePreAmount(1000) } isActive={preAmount===1000} />
            
          </div>

        </div>
      </div>
      

      <div className="bg-[#311C31] hover:bg-[#39273C] transition-all duration-300 flex justify-center items-center rounded-[18px] h-[56px] m-[10px] mt-[-6px] cursor-pointer">
        <Link to="/" className="text-[#FC72FF] text-[18px] font-semibold w-full h-full text-center mt-[24px]">Connect wallet</Link>
      </div>
    </>
  )
}


interface TabButtonProps {
  title : string,
  isActive : boolean,
  handleClick : (event: React.MouseEvent<HTMLDivElement>) => void,
}

const TabButton : React.FC<TabButtonProps> = ({title, isActive, handleClick}) => {
  return (
    <div onClick={handleClick} className={`rounded-[18px] text-[#9B9B9B] font-semibold transition-all duration-300 cursor-pointer hover:text-[#656565] px-[16px] py-[6px] mx-[-10px] mr-[6px] ${isActive && "bg-[#242424] text-white"}`}>
      <p>{title}</p>
    </div>
  )
}

interface RateButtonProps {
  title : string,
  isActive : boolean,
  handleClick : (event: React.MouseEvent<HTMLDivElement>) => void,
}
const RateButton: React.FC<RateButtonProps> = ({title, handleClick, isActive}) => {
  return (
    <div onClick={handleClick} className={`border-[1px] border-[#2B2B2B] hover:opacity-60 duration-300 font-semibold flex justify-center items-center text-[#9B9B9B] cursor-pointer rounded-[14px] px-[10px] mr-[8px] ${isActive && "bg-[#2B2B2B] text-white"}`}>
      <p>{title}</p>
    </div>
  )
}




