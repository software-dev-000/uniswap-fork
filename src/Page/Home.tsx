import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import TokenModal from "../Components/Trade/TokenModal.tsx"
import { useContext, useState } from "react";
import { MainContext } from "../App.tsx";
import SelectTokenButton from "../Components/Main/SelectTokenButton.tsx";
import SellToBuy from "../Components/Main/SellToBuy.tsx";
import Input from "../Components/Main/Input.tsx";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Home () {
  const _MainContext = useContext(MainContext)
  const [sellAmmount, setSellAmount] = useState(0)
  const [buyAmmount, setBuyAmount] = useState(0)

  const handleSellAmount = (v: number) => {
    setSellAmount(v)
  }
  const handleBuyAmount = (v: number) => {
    setBuyAmount(v)
  }
  return(
    <>
      <div className="bg-[#151515] flex flex-col justify-center items-center overflow-x-hidden">
        <div className="w-full h-[1380px] bg-[#161616]">
          <img className="w-20 h-20 rounded-[50%] animate-animation_1 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-aave.jpg" alt="test" ></img>
          <img className="w-20 h-20 rounded-[50%] animate-animation_2 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-crv.png" alt="test" ></img>
          <img className="w-20 h-20 rounded-[50%] animate-animation_3 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-dai.png" alt="test" ></img>
          <img className="w-24 h-24 rounded-[20%] animate-animation_4 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-ens.jpg" alt="test" ></img>
          <img className="w-20 h-20 rounded-[50%] animate-animation_5 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-eth.png" alt="test" ></img>
          <img className="w-20 h-20 rounded-[20%] animate-animation_6 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-euroc.jpg" alt="test" ></img>
          <img className="w-20 h-20 rounded-[50%] animate-animation_7 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-matic.jpg" alt="test" ></img>
          <img className="w-24 h-24 rounded-[50%] animate-animation_8 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-mco2.jpg" alt="test" ></img>
          <img className="w-24 h-24 rounded-[20%] animate-animation_9 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-op.jpg" alt="test" ></img>
          <img className="w-20 h-20 rounded-[20%] animate-animation_10 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-shib.jpg" alt="test" ></img>
          <img className="w-20 h-20 rounded-[50%] animate-animation_11 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-uni.png" alt="test" ></img>
          <img className="w-20 h-20 rounded-[50%] animate-animation_12 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-usdc.jpg" alt="test" ></img>
          <img className="w-20 h-18 rounded-[20%] animate-animation_13 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-usdp.png" alt="test" ></img>
          <img className="w-20 h-20 rounded-[50%] animate-animation_14 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-usdt.png" alt="test" ></img>
          <img className="w-20 h-20 rounded-[50%] animate-animation_15 blur-sm hover:blur-none transition-all cursor-pointer" src="/img/home/background_icons/icon-wbtc.png" alt="test" ></img>
        </div>

        <div className="absolute top-[140px] m-[0] flex flex-col justify-center items-center">
          <p className="text-white text-[42px] leading-[56px] font-semibold">
            Swap anytime,
          </p>
          <p className="text-white text-[42px] leading-[56px] font-semibold">
            anywhere
          </p>

          <div className="w-[480px] my-[4px] h-[320px] bg-[#131313] mt-[40px] rounded-[28px] py-[4px]">
            <div className="mx-[10px] my-[4px] bg-[#1B1B1B] p-[20px] rounded-[24px] border-[#1B1B1B] border-[1px] hover:border-[#252628] hover:border-[1px]">
              <div className="text-[18px] text-[#5E5E5E]">Sell</div>

              <div className="flex justify-between gap-6">
                <span className="text-[#5E5E5E]"><Input placeholder="0" fontSize={32} value={sellAmmount} handleChange={(e)=> handleSellAmount(Number(e.target.value))}/></span>
                <SelectTokenButton isSellToken={true}/>
              </div>
            </div>

            <SellToBuy />

            <div className="mx-[10px] my-[4px] bg-[#1B1B1B] p-[20px] rounded-[24px] border-[#1B1B1B] border-[1px] hover:border-[#252628] hover:border-[1px]">
              <div className="text-[18px] text-[#5E5E5E]">Buy</div>
              <div className="flex justify-between gap-6">
                <span className="text-[#5E5E5E]"><Input placeholder="0" fontSize={32} value={buyAmmount} handleChange={(e)=> handleBuyAmount(Number(e.target.value))}/></span>
                <SelectTokenButton isSellToken={false}/>
              </div>
            </div>

            <div className="bg-[#FC72FF] flex justify-center items-center rounded-[18px] h-[56px] m-[10px] cursor-pointer hover:bg-[#D24CD6]">
              <Link to="/trade" className="text-white text-[18px] font-semibold w-full h-full text-center mt-[24px]">Get started</Link>
            </div>
            <span className="flex justify-center items-center mt-[20px]">
              <span className="text-[#9b9b9b] mx-[20px] text-center font-semibold">
                The largest onchain marketplace. Buy and sell crypto on Ethereum and 11+ other chains.
              </span>
            </span>
            
          </div>

          <div className="mt-[200px] flex flex-col justify-center items-center animate-animation_bounce cursor-pointer">
            <span className="text-[#9b9b9b] font-semibold">Scroll to learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>




        <div className="max-w-[1440px] w-full m-[0_auto] flex flex-col items-center justify-center self-center ">
          <div id='go_direct_to_defi' className="flex-col basis-auto items-center min-w-0 min-h-0 w-full mb-[80px] pl-[40px] pr-[20px]">
            <span className="text-white font-medium text-[52px] leading-[50px] ">Go direct to DeFi</span>
            <div className="flex-col relative basis-auto items-stretch flex w-full mt-[40px]">
              <div className="flex flex-col md:flex-row grow items-stretch basis-auto relative gap-4 w-full">
                {/* Web app */}
                <div className={`bg-[#121E32] relative cursor-pointer w-full md:w-[calc(50%-8px)] min-h-[500px] h-[610px]
                  rounded-[32px] overflow-x-hidden overflow-y-hidden p-[32px] items-start flex flex-col group`}>
                  <TransitionButton color="#29B6F5" text="Web app" svg={<svg className="transition-all duration-300 ease-in-out translate-x-0 group-hover:-translate-x-10" width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3164 14.7471C21.3164 16.7471 20.3164 17.7471 18.3164 17.7471H14.3164V20.9971H16.8164C17.2264 20.9971 17.5664 21.3371 17.5664 21.7471C17.5664 22.1571 17.2264 22.4971 16.8164 22.4971H7.81641C7.40641 22.4971 7.06641 22.1571 7.06641 21.7471C7.06641 21.3371 7.40641 20.9971 7.81641 20.9971H10.3164V17.7471H6.31641C4.31641 17.7471 3.31641 16.7471 3.31641 14.7471C3.31641 14.6091 3.42841 14.4971 3.56641 14.4971H21.0664C21.2044 14.4971 21.3164 14.6091 21.3164 14.7471ZM18.3164 3.74707H6.31641C4.31641 3.74707 3.31641 4.74707 3.31641 6.74707V12.7471C3.31641 12.8851 3.42841 12.9971 3.56641 12.9971H21.0664C21.2044 12.9971 21.3164 12.8851 21.3164 12.7471V6.74707C21.3164 4.74707 20.3164 3.74707 18.3164 3.74707Z" fill="#2ABDFF"></path></svg>}/>

                  <div className="text-[#29B6F5] text-[36px] md:text-[26px] lg:text-[36px] leading-[44px] pt-[20px]">
                    Swapping made simple. Access 
                    thousands of tokens on 11+ chains.
                  </div>

                  <div className="pt-[50px] w-full">
                    <DeFiUnit src="/img/home/icon-ETH.png" name="Ethereum" unit="ETH" price="$2,584.07" percent="4.87%" />
                    <DeFiUnit src="/img/home/icon-USDC.png" name="USC Coin" unit="USDC" price="$1.00" percent="6.30%" />
                    <DeFiUnit src="/img/home/icon-UNI.png" name="Uniswap" unit="UNI" price="$5.98" percent="4.87%" />
                    <DeFiUnit src="/img/home/icon-LDO.png" name="Lido DAO" unit="LDO" price="$1.09" percent="7.21%" />
                    
                  </div>
                </div>

                {/* Uniswap wallet */}
                <div className={`bg-[#301f30] relative cursor-pointer w-full md:w-[calc(50%-8px)] min-h-[500px] h-[610px]
                  rounded-[32px] overflow-x-hidden overflow-y-hidden p-[32px_32px_0px_32px] items-start flex flex-col group` }>
              
                  <TransitionButton color="#FC72FF" text="Uniswap wallet" svg={<svg className="transition-all duration-300 ease-in-out translate-x-0 group-hover:-translate-x-10" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 4C2.34315 4 1 5.34315 1 7V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V7C23 5.34315 21.6569 4 20 4H4ZM3 12.2676V11C3 10.4485 3.44812 10 4.00115 10H19.9989C20.5519 10 21 10.4485 21 11V12.2676C20.7058 12.0974 20.3643 12 20 12H16C15.4477 12 14.9935 12.5284 14.7645 13.1028C14.4438 13.9072 13.789 14.8571 12 14.8571C10.29 14.8571 9.48213 13.9893 9.1936 13.2102C8.96576 12.595 8.49905 12 7.91447 12H4C3.63571 12 3.29417 12.0974 3 12.2676ZM19.9989 8C20.3498 8 20.6868 8.06029 21 8.17109V7C21 6.44772 20.5523 6 20 6H4C3.44772 6 3 6.44772 3 7V8.17109C3.31318 8.06029 3.65018 8 4.00115 8H19.9989Z" fill="#FC72FF"></path></svg>}/>

                  <div className="text-[#FC72FF] text-[36px] md:text-[26px] lg:text-[36px] leading-[44px] pt-[20px] pb-[50px]">
                    The wallet built for swapping. Available on iOS and Android
                  </div>

                  <div className="self-center overflow-hidden">
                    <img className="hover:-translate-y-[420px] duration-300" src="/img/home/home-1.png" alt="home-1"></img>
                  </div>
                </div>

              
              </div>

              <div className="flex flex-col md:flex-row items-stretch basis-auto relative gap-4 w-full mt-[16px]">
                {/* Developer docs */}
                <div className={`bg-[#122020] relative cursor-pointer w-full md:w-[calc(50%-8px)] min-h-[340px] h-[340px] 
                  rounded-[32px] overflow-x-hidden overflow-y-hidden p-[32px] items-center justify-center flex group` }>
                  <div className="flex flex-col justify-between items-start w-[60%]">
                    <TransitionButton color="#00C3A0" text="Developer docs" svg={<svg className="transition-all duration-300 ease-in-out translate-x-0 group-hover:-translate-x-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7.00001 17C6.74401 17 6.48801 16.902 6.29301 16.707L2.29301 12.707C1.90201 12.317 1.90201 11.683 2.29301 11.293L6.29301 7.29299C6.68401 6.90199 7.31601 6.90199 7.70701 7.29299C8.09801 7.68299 8.09801 8.31699 7.70701 8.70699L4.41401 12L7.70701 15.293C8.09801 15.683 8.09801 16.317 7.70701 16.707C7.51201 16.902 7.25601 17 7.00001 17ZM17.707 16.707L21.707 12.707C22.098 12.317 22.098 11.683 21.707 11.293L17.707 7.29299C17.316 6.90199 16.684 6.90199 16.293 7.29299C15.902 7.68299 15.902 8.31699 16.293 8.70699L19.586 12L16.293 15.293C15.902 15.683 15.902 16.317 16.293 16.707C16.488 16.902 16.744 17 17 17C17.256 17 17.512 16.902 17.707 16.707ZM9.937 20.351L15.937 4.35101C16.131 3.83401 15.869 3.25699 15.352 3.06399C14.834 2.86999 14.259 3.13198 14.064 3.64898L8.064 19.649C7.87 20.166 8.13201 20.743 8.64901 20.936C8.76501 20.98 8.88301 21 9.00001 21C9.40501 21 9.786 20.752 9.937 20.351Z" fill="#00C3A0"></path></svg>}/>

                    <div className="text-[#00C3A0] text-[36px] md:text-[26px] lg:text-[36px] leading-[44px] pt-[20px]">
                      Build the next generation of open applications and tools.
                    </div>

                  </div>

                  <div className=" w-[40%]">
                    <img className="object-contain" src="/img/home/home-3.png" alt="home-1"></img>
                  </div>
                  
                </div>

                {/* Liquidity */}
                <div className={`bg-[#221830] relative cursor-pointer w-full md:w-[calc(50%-8px)] min-h-[340px] h-[340px] 
                  rounded-[32px] overflow-x-hidden overflow-y-hidden p-[32px] items-center flex  group` }>
                    
                  <div className="flex flex-col w-[60%] items-start ">
                    <TransitionButton color="#9E62FF" text="Liquidity" svg={<svg className="transition-all duration-300 ease-in-out translate-x-0 group-hover:-translate-x-10" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7148 21.0011H11.7148C10.7148 21.0011 10.2148 20.5011 10.2148 19.5011V4.50108C10.2148 3.50108 10.7148 3.00108 11.7148 3.00108H12.7148C13.7148 3.00108 14.2148 3.50108 14.2148 4.50108V19.5011C14.2148 20.5011 13.7148 21.0011 12.7148 21.0011ZM21.2148 19.5011V9.50108C21.2148 8.50108 20.7148 8.00108 19.7148 8.00108H18.7148C17.7148 8.00108 17.2148 8.50108 17.2148 9.50108V19.5011C17.2148 20.5011 17.7148 21.0011 18.7148 21.0011H19.7148C20.7148 21.0011 21.2148 20.5011 21.2148 19.5011ZM7.21484 19.5011V13.5011C7.21484 12.5011 6.71484 12.0011 5.71484 12.0011H4.71484C3.71484 12.0011 3.21484 12.5011 3.21484 13.5011V19.5011C3.21484 20.5011 3.71484 21.0011 4.71484 21.0011H5.71484C6.71484 21.0011 7.21484 20.5011 7.21484 19.5011Z" fill="#9E62FF"></path></svg>}/>
                    <div className="text-[#9E62FF] text-[36px] md:text-[26px] lg:text-[36px] leading-[44px] md:leading-[32px] lg:leading-[44px] pt-[20px]">
                      Provide liquidity to pools on the Uniswap Protocol and earn fees on swaps.
                    </div>
                  </div>

                  <div className="-mt-[30px] w-[40%]">
                    <img className="object-contain" src="/img/home/home-2.png" alt="home-1"></img>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div id='trusted_by_millions' className="basis-auto items-center min-w-0 min-h-0 my-[80px]  pl-[40px] pr-[20px]">
            <div className="relative basis-auto items-stretch flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-[50%] flex flex-col justify-between">
                <p className="text-white font-medium text-[52px] leading-[50px] ">Trusted by millions</p>
                <div className="flex flex-col">
                  <p className="text-white font-medium text-[18px] leading-[24px] max-w-[80%] mb-[20px]">Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace, with billions of dollars in weekly volume across thousands of tokens on Ethereum and 7+ additional chains.</p>
                  <div className="flex p-[12px_16px_12px_16px] rounded-[24px] self-start bg-[#1B1B1B] group  cursor-pointer">
                    <div className="flex basis-auto items-center gap-4 group">
                      <span className="text-[20px] leading-[24px] text-white group-hover:opacity-40  transition-all duration-300">Learn more</span>
                      <svg className="group-hover:opacity-40  transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="w-full md:w-[50%] flex flex-wrap gap-4">
                {/* All time volume */}
                <TrustedBlock name="All time volume" value="$2.2T" isGreen={false} />
                <TrustedBlock name="All time swappers" value="16.6M" isGreen={false} />
                <TrustedBlock name="All time LP fees" value="$3.4B" isGreen={false} />
                <TrustedBlock name="24H volume" value="$1.1B" isGreen={true} />
                
              </div>

            </div>
          </div>

          <div id='connect_with_us' className="flex-col basis-auto items-center min-w-0 min-h-0 w-full my-[80px] pl-[40px] pr-[20px]">
            <span className="text-white font-medium text-[52px] leading-[50px] ">Connect with us</span>
            <div className="flex-col  basis-auto items-stretch flex mt-[40px]">
              <div className="flex flex-col md:flex-row items-stretch basis-auto  gap-4">
                
                {/* Help center */}
                <div className={`bg-[#281B14] relative cursor-pointer w-full md:w-[calc(25%-8px)] h-[250px] basis-auto 
                  rounded-[32px] overflow-x-hidden overflow-y-hidden p-[32px] flex flex-col items-start justify-between group `}>
                  <TransitionButton color="#FF4D00" text="Help center" svg={<svg className="transition-all duration-300 ease-in-out translate-x-0 group-hover:-translate-x-10" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 5.31967V18.3297C21.5 18.6597 21.1801 18.8898 20.8501 18.7998C18.4661 18.1208 16.073 18.1177 13.687 19.3077C13.486 19.4077 13.249 19.2717 13.249 19.0467V5.85276C13.249 5.78576 13.2701 5.71877 13.3091 5.66477C13.9321 4.80977 14.896 4.21471 16.019 4.07871C17.831 3.85871 19.5731 4.07879 21.2141 4.86179C21.3891 4.94479 21.5 5.12667 21.5 5.31967ZM8.97998 4.07968C7.16798 3.85968 5.42591 4.07976 3.78491 4.86276C3.61091 4.94576 3.5 5.12777 3.5 5.32077V18.3308C3.5 18.6608 3.8199 18.8908 4.1499 18.8008C6.5339 18.1218 8.92699 18.1187 11.313 19.3087C11.514 19.4087 11.751 19.2727 11.751 19.0477V5.85373C11.751 5.78673 11.7299 5.71974 11.6909 5.66574C11.0669 4.81074 10.104 4.21568 8.97998 4.07968Z" fill="#FF4D00"></path></svg>}/>

                  <div className={`text-[#FF4D00] text-[24px] leading-[28px] pt-[20px]`}>
                    Get support
                  </div>
                </div>

                {/* Help center */}
                {/* <ConnectBlock title="Get support" text="#FF4D00" bgColor="#271A14" width="25">
                  <TransitionButton color="#FF4D00" text="Help center" svg={<svg className="transition-all duration-300 ease-in-out translate-x-0 group-hover:-translate-x-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12.02 17.5C11.468 17.5 11.0149 17.052 11.0149 16.5C11.0149 15.948 11.458 15.5 12.01 15.5H12.02C12.573 15.5 13.02 15.948 13.02 16.5C13.02 17.052 12.572 17.5 12.02 17.5ZM13.603 12.5281C12.872 13.0181 12.7359 13.291 12.7109 13.363C12.6059 13.676 12.314 13.874 12 13.874C11.921 13.874 11.841 13.862 11.762 13.835C11.369 13.703 11.1581 13.278 11.2891 12.885C11.4701 12.345 11.9391 11.836 12.7671 11.281C13.7881 10.597 13.657 9.84707 13.614 9.60107C13.501 8.94707 12.95 8.38988 12.303 8.27588C11.811 8.18588 11.3301 8.31488 10.9541 8.62988C10.5761 8.94688 10.3589 9.41391 10.3589 9.90991C10.3589 10.3239 10.0229 10.6599 9.60889 10.6599C9.19489 10.6599 8.85889 10.3239 8.85889 9.90991C8.85889 8.96891 9.27099 8.08396 9.98999 7.48096C10.702 6.88496 11.639 6.63605 12.564 6.80005C13.831 7.02405 14.8701 8.07097 15.0911 9.34497C15.3111 10.607 14.782 11.7381 13.603 12.5281Z" fill="#FF4D00"></path></svg>} />
                </ConnectBlock> */}

                {/* Help center */}
                <div className={`bg-[#21201A] relative cursor-pointer w-full md:w-[calc(25%-8px)] h-[250px] basis-auto 
                  rounded-[32px] overflow-x-hidden overflow-y-hidden p-[32px] flex flex-col items-start justify-between group `}>
                  <TransitionButton color="#8E8767" text="Blog" svg={<svg className="transition-all duration-300 ease-in-out translate-x-0 group-hover:-translate-x-10" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 5.31967V18.3297C21.5 18.6597 21.1801 18.8898 20.8501 18.7998C18.4661 18.1208 16.073 18.1177 13.687 19.3077C13.486 19.4077 13.249 19.2717 13.249 19.0467V5.85276C13.249 5.78576 13.2701 5.71877 13.3091 5.66477C13.9321 4.80977 14.896 4.21471 16.019 4.07871C17.831 3.85871 19.5731 4.07879 21.2141 4.86179C21.3891 4.94479 21.5 5.12667 21.5 5.31967ZM8.97998 4.07968C7.16798 3.85968 5.42591 4.07976 3.78491 4.86276C3.61091 4.94576 3.5 5.12777 3.5 5.32077V18.3308C3.5 18.6608 3.8199 18.8908 4.1499 18.8008C6.5339 18.1218 8.92699 18.1187 11.313 19.3087C11.514 19.4087 11.751 19.2727 11.751 19.0477V5.85373C11.751 5.78673 11.7299 5.71974 11.6909 5.66574C11.0669 4.81074 10.104 4.21568 8.97998 4.07968Z" fill="#8E8767"></path></svg>}/>

                  <div className={`text-[#8E8767] text-[24px] leading-[28px] pt-[20px]`}>
                    Insights and news from team
                  </div>
                </div>
{/*                 
                <ConnectBlock title="Insights and news from team" text="#8E8767" bgColor="#21201A" width="25">
                  <TransitionButton color="#8E8767" text="Blog" svg={<svg className="transition-all duration-300 ease-in-out translate-x-0 group-hover:-translate-x-10" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 5.31967V18.3297C21.5 18.6597 21.1801 18.8898 20.8501 18.7998C18.4661 18.1208 16.073 18.1177 13.687 19.3077C13.486 19.4077 13.249 19.2717 13.249 19.0467V5.85276C13.249 5.78576 13.2701 5.71877 13.3091 5.66477C13.9321 4.80977 14.896 4.21471 16.019 4.07871C17.831 3.85871 19.5731 4.07879 21.2141 4.86179C21.3891 4.94479 21.5 5.12667 21.5 5.31967ZM8.97998 4.07968C7.16798 3.85968 5.42591 4.07976 3.78491 4.86276C3.61091 4.94576 3.5 5.12777 3.5 5.32077V18.3308C3.5 18.6608 3.8199 18.8908 4.1499 18.8008C6.5339 18.1218 8.92699 18.1187 11.313 19.3087C11.514 19.4087 11.751 19.2727 11.751 19.0477V5.85373C11.751 5.78673 11.7299 5.71974 11.6909 5.66574C11.0669 4.81074 10.104 4.21568 8.97998 4.07968Z" fill="#8E8767"></path></svg>}/>
                </ConnectBlock> */}

                <ConnectBlock title="Follow @Uniswap on X for the latest updates" text="#FC72FF" bgColor="#311C31" width="50">
                  <TransitionButton color="#FC72FF" text="Stay connected" svg={<svg className="transition-all duration-300 ease-in-out translate-x-0 group-hover:-translate-x-10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.8789 20.394C21.1189 20.594 20.9789 20.994 20.6689 20.994C19.6389 21.034 18.0591 20.894 17.0891 19.864C16.2991 20.144 15.419 20.2841 14.499 20.2841C12.481 20.2841 10.686 19.607 9.49902 18.368C9.31002 18.17 9.35802 17.785 9.79102 17.819C10.024 17.835 10.259 17.844 10.499 17.844C15.119 17.844 18.614 15.143 19.353 11.235C19.403 10.973 19.7291 10.886 19.8931 11.097C20.5931 12.003 20.998 13.1481 20.998 14.5031C20.998 16.0331 20.4679 17.314 19.5879 18.264C19.6989 18.964 20.0889 19.754 20.8789 20.394ZM17.998 9.67102C17.998 9.62402 17.992 9.58103 17.991 9.53503C17.917 5.44903 14.594 3 10.499 3C6.35802 3 3 5.50202 3 9.67102C3 11.439 3.608 12.915 4.625 14.015C4.5 14.816 4.05009 15.733 3.14209 16.467C2.86709 16.7 3.02503 17.159 3.38403 17.167C4.56703 17.209 6.39203 17.05 7.50903 15.858C7.73703 15.937 7.97094 16.006 8.21094 16.066C8.93194 16.247 9.69998 16.3409 10.501 16.3409C14.64 16.3419 17.998 13.84 17.998 9.67102Z" fill="#FC72FF"></path></svg>} />
                </ConnectBlock> 

              </div>


            </div>
          </div>
        </div>
      </div>  
      {_MainContext.modal.showModal && createPortal(<TokenModal />, document.body) } 
      
    </>
  )
}

interface TransitionButtonProps {
  color: string; // Define the type for color
  text: string; // Define the type for color
  svg: React.ReactNode; // Define the type for svg
}
const TransitionButton: React.FC<TransitionButtonProps> = ({color, text, svg}) => {
  return (
    <div className={`bg-[#131313] text-[${color}] rounded-[24px]`} >
      <div className="p-[10px] flex gap-2 overflow-hidden">
        {svg}
        <span className="transition-all duration-300 ease-in-out group-hover:-translate-x-7">{text}</span>
        <svg className="mr-[-32px] transition-all duration-300 ease-in-out group-hover:-translate-x-7" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flex: "0 0 auto"}}><path fillRule="evenodd" clipRule="evenodd" d="M4 12.1143C4 11.562 4.44771 11.1143 5 11.1143L16.5858 11.1143L11.2929 5.82136C10.9024 5.43084 10.9024 4.79767 11.2929 4.40715C11.6834 4.01663 12.3166 4.01663 12.7071 4.40715L19.7071 11.4072C20.0976 11.7977 20.0976 12.4308 19.7071 12.8214L12.7071 19.8214C12.3166 20.2119 11.6834 20.2119 11.2929 19.8214C10.9024 19.4308 10.9024 18.7977 11.2929 18.4072L16.5858 13.1143L5 13.1143C4.44771 13.1143 4 12.6665 4 12.1143Z" fill={color}></path></svg>
      </div>
    </div>
  )
}

interface DeFiUnitProps {
  src : string;
  name : string;
  unit : string;
  price : string;
  percent : string
}

const DeFiUnit : React.FC<DeFiUnitProps> = ({src, name, unit, price, percent}) => {
  return (
    <div className="flex rounded-[10px] bg-[#131313] items-center justify-between p-[16px_12px] mb-[10px] group hover:bg-[#1b1b1b] hover:scale-105 transition-all text-[24px] md:text-[18px] lg:text-[24px]">
      <div className="flex gap-4 items-center justify-center">
        <img src={src} alt="ether" className="w-8 h-8 rounded-[50%]"></img>
        <p className="text-white font-bold ">{name}<span className="text-[#9B9B9B]"> {unit}</span></p>
      </div>

      <div className="flex gap-4 items-center justify-center">
        <p className="text-white font-bold ">{price}<span className="text-[#21C35C]"> {percent}</span></p>
      </div>
    </div>
  )
}

interface TrustedBlockProps {
  name : string;
  value : string;
  isGreen : boolean;
}

const TrustedBlock : React.FC<TrustedBlockProps> = ({name, value, isGreen}) => {
  return (
    <div className={`bg-[#1B1B1B] relative cursor-pointer w-[calc(50%-8px)] h-[250px] basis-auto 
      rounded-[32px]  p-[32px] flex flex-col items-start justify-between group overflow-hidden`}>
      <p className={`${isGreen ? "text-[#40B66B]" : "text-[rgb(155,155,155)]"} text-[24px] font-medium leading-[32px]`}>
        {name}
      </p>
      <p className={`${isGreen ? "text-[#40B66B]" : "text-[#FFFFFF]"}  text-[52px] font-medium leading-[52px] pt-[20px]`}>
        {value}
      </p>
    </div>
  )
  
}

interface ConnectBlockProps {
  children : React.ReactNode;
  title : string;
  text : string;
  bgColor : string;
  width : string;
}

const ConnectBlock : React.FC<ConnectBlockProps> = ({children, title, text, bgColor, width}) => {
  return(
    <div className={`bg-[${bgColor}] relative cursor-pointer w-full md:w-[calc(${width}%-8px)] h-[250px] basis-auto 
      rounded-[32px] overflow-x-hidden overflow-y-hidden p-[32px] flex flex-col items-start justify-between group `}>
      {children}

      <div className={`text-[${text}] text-[24px] leading-[28px] pt-[20px]`}>
        {title}
      </div>
    </div>
  )
}