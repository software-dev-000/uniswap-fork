import { Link } from "react-router-dom"
import { MainContext } from "../App.tsx";
import { useContext } from "react";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Header() {
  const _MainContext = useContext(MainContext)

  const data = [
    {
      id: 1,
      title: 'Uniswap',
      children:
        <div className="hidden group-hover:block transition-all w-[320px] drop-shadow-lg bg-[#131313] absolute top-14 left-0 rounded-[16px] border-grade">
          <div className="bg-[#131313] shadow-lg text-[#9B9B9B] rounded-[6px] m-[4px] px-[30px] py-[20px] font-semibold flex flex-col justify-center items-start">
            <span className="text-white cursor-default mt-[4px]">Company</span>
            <Link to="/" className="hover:text-[#FC74FE] mt-[8px]">Careers</Link>
            <Link to="/" className="hover:text-[#FC74FE] mt-[8px]">Blog</Link>

            <span className="text-white cursor-default mt-[16px]">Protocol</span>
            <Link to="/" className="hover:text-[#FC74FE] mt-[8px]">Governance</Link>
            <Link to="/" className="hover:text-[#FC74FE] mt-[8px]">Developers</Link>

            <span className="text-white cursor-default mt-[16px]">Need help?</span>
            <Link to="/" className="hover:text-[#FC74FE] mt-[8px]">Help center</Link>
            <Link to="/" className="hover:text-[#FC74FE] mt-[8px]">Contact us</Link>

            <span className="border-[1px] border-[#242424] w-full my-[16px]"></span>

            <div className="flex justify-between items-center hover:bg-[#311C31] m-[-10px] p-[10px_20px_10px_10px] rounded-[12px]">
              <div>
                <img className=" w-[30px] h-[30px] rounded-[6px]" src="/img/home/background_icons/icon-uni.png" alt="test"></img>
              </div>
              <div className="pl-[12px] flex flex-col items-start justify-center">
                <p className="text-[#FC72FF] "> Download Uniswap</p>
                <p className="text-[#FC72FF] text-[14px]">Available on iOS and Android</p>
              </div>
            </div>
          </div>

        </div>
    },

    {
      id: 2,
      title: 'Trade',
      children:
        <div className="hidden group-hover:block transition-all w-[160px] drop-shadow-lg bg-[#131313] absolute top-14  rounded-[16px]">
          <HeaderButton to="trade" title="Swap" handleClick={() => { _MainContext.trade.handleTradeTab(0) }} />
          <HeaderButton to="trade" title="Limit" handleClick={() => { _MainContext.trade.handleTradeTab(1) }} />
          <HeaderButton to="trade" title="Send" handleClick={() => { _MainContext.trade.handleTradeTab(2) }} />
          <HeaderButton to="trade" title="Buy" handleClick={() => { _MainContext.trade.handleTradeTab(3) }} />
        </div>
    },

    {
      id: 3,
      title: 'Explore',
      children:
        <div className="hidden group-hover:block transition-all w-[160px] drop-shadow-lg bg-[#131313] absolute top-14  rounded-[16px]">
          <HeaderButton to="/explore" title="Tokens" handleClick={() => _MainContext.explore.handletableIndex(0)} />
          <HeaderButton to="/explore" title="Pools" handleClick={() => _MainContext.explore.handletableIndex(1)} />
          <HeaderButton to="/explore" title="Transactions" handleClick={() => { }} />
          <HeaderButton to="/explore" title="NFTs" handleClick={() => { }} />
        </div>
    },

    {
      id: 4,
      title: 'Pool',
      children:
        <div className="hidden group-hover:block transition-all w-[160px] drop-shadow-lg bg-[#131313] absolute top-14  rounded-[16px]">
          <HeaderButton to="pool" title="View position" />
          <HeaderButton to="/pool/create" title="Create position" />
        </div>
    },
    {
      id: 5,
      title: 'Presale',
      children: ""
    },
  ]
  return (
    <>
      <div className="flex justify-between items-center w-full sticky top-0 z-50 bg-[#131313]">
        <div id="left">
          <nav className="p-[0px_12px] h-[72px] flex items-center content-center">
            <div className="flex items-center gap-6  h-2/3 pl-[10px]">
              {/* <Dropdown menu={{ items }} placement="bottom">
              <Button>bottom</Button>
            </Dropdown> */}
              {data.map((item) => {
                if (item.id === 1)
                  return (
                    <div key={item.id} className="flex gap-1 cursor-pointer justify-center items-center group h-full " >
                      <Link className="text-[#FA71FD] font-semibold text-[18px] flex items-center gap-1" to={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none" cursor="pointer"><path d="M6.04898 1.5328C5.77502 1.49053 5.76347 1.48557 5.89239 1.46587C6.13945 1.42808 6.72283 1.47958 7.12484 1.57466C8.06336 1.79654 8.91735 2.36494 9.82894 3.37442L10.0711 3.64261L10.4176 3.58721C11.8771 3.35393 13.3619 3.53933 14.6038 4.10994C14.9454 4.26692 15.4841 4.5794 15.5514 4.6597C15.5728 4.6853 15.6122 4.85003 15.6389 5.02582C15.7311 5.63398 15.6849 6.10014 15.4979 6.44831C15.3962 6.63778 15.3905 6.69782 15.4589 6.85997C15.5135 6.98936 15.6658 7.08513 15.8166 7.08492C16.1252 7.08451 16.4574 6.58831 16.6113 5.89789L16.6724 5.62364L16.7935 5.76009C17.4579 6.5087 17.9796 7.52962 18.0693 8.25631L18.0926 8.44578L17.981 8.27353C17.7888 7.97714 17.5957 7.77537 17.3484 7.61264C16.9027 7.31931 16.4314 7.21948 15.1833 7.15406C14.056 7.09498 13.418 6.99921 12.7854 6.79404C11.709 6.445 11.1664 5.98015 9.88789 4.31174C9.31999 3.57068 8.96899 3.16067 8.61984 2.83048C7.82646 2.08022 7.04689 1.68675 6.04898 1.5328Z" fill="#FC74FE"></path><path d="M15.8056 3.1874C15.834 2.69082 15.9017 2.36329 16.0379 2.06417C16.0917 1.94577 16.1422 1.84887 16.15 1.84887C16.1578 1.84887 16.1344 1.93626 16.0979 2.04305C15.999 2.33335 15.9827 2.73041 16.0509 3.19236C16.1374 3.77851 16.1866 3.86308 16.8095 4.49624C17.1017 4.79322 17.4415 5.16778 17.5647 5.32859L17.7887 5.62099L17.5647 5.41202C17.2908 5.15648 16.6608 4.65812 16.5216 4.58688C16.4283 4.5391 16.4145 4.53992 16.3569 4.5969C16.3039 4.6494 16.2927 4.72829 16.2853 5.10123C16.2739 5.68248 16.1942 6.05556 16.002 6.4286C15.898 6.63037 15.8816 6.58731 15.9757 6.35957C16.046 6.18953 16.0531 6.11478 16.0526 5.55209C16.0515 4.42152 15.9165 4.14972 15.1251 3.68412C14.9247 3.56616 14.5943 3.39606 14.3911 3.30608C14.1878 3.2161 14.0264 3.13773 14.0322 3.13187C14.0547 3.10969 14.8265 3.33374 15.1371 3.45259C15.5992 3.62938 15.6754 3.65229 15.7316 3.63096C15.7692 3.61667 15.7874 3.5077 15.8056 3.1874Z" fill="#FC74FE"></path><path d="M6.58113 5.12149C6.02497 4.35993 5.68086 3.19229 5.75536 2.31943L5.77839 2.04932L5.90499 2.0723C6.14272 2.11543 6.55263 2.26718 6.74457 2.38313C7.2713 2.7013 7.49933 3.12019 7.73132 4.19585C7.79928 4.51092 7.88843 4.86746 7.92946 4.98817C7.9955 5.18246 8.24507 5.63629 8.44797 5.93103C8.59412 6.1433 8.49704 6.24389 8.17398 6.21488C7.68059 6.17058 7.01227 5.71183 6.58113 5.12149Z" fill="#FC74FE"></path><path d="M15.1311 10.7894C12.532 9.74852 11.6165 8.84507 11.6165 7.32069C11.6165 7.09636 11.6243 6.91281 11.6338 6.91281C11.6432 6.91281 11.7438 6.98684 11.8572 7.07734C12.3843 7.49779 12.9745 7.67736 14.6083 7.91444C15.5698 8.05396 16.1109 8.16664 16.61 8.33127C18.1963 8.85454 19.1778 9.91646 19.4119 11.3629C19.4799 11.7831 19.44 12.5713 19.3297 12.9867C19.2427 13.3147 18.977 13.9061 18.9066 13.9288C18.8871 13.9351 18.8679 13.8606 18.8629 13.7593C18.8361 13.2162 18.5602 12.6874 18.0968 12.2913C17.5699 11.841 16.862 11.4825 15.1311 10.7894Z" fill="#FC74FE"></path><path d="M13.3064 11.2218C13.2738 11.029 13.2174 10.7829 13.1809 10.6748L13.1146 10.4782L13.2377 10.6158C13.4082 10.8061 13.5429 11.0496 13.6571 11.3739C13.7442 11.6215 13.754 11.6951 13.7534 12.0973C13.7527 12.4922 13.7418 12.575 13.6614 12.7978C13.5345 13.1492 13.377 13.3983 13.1128 13.6657C12.638 14.1463 12.0276 14.4124 11.1468 14.5228C10.9937 14.5419 10.5474 14.5743 10.1551 14.5945C9.16633 14.6457 8.51558 14.7514 7.93085 14.9556C7.84678 14.985 7.77172 15.0028 7.7641 14.9952C7.74044 14.9718 8.13855 14.7358 8.46739 14.5782C8.93106 14.3561 9.39262 14.2348 10.4268 14.0636C10.9376 13.9789 11.4652 13.8763 11.5991 13.8354C12.8642 13.4496 13.5145 12.454 13.3064 11.2218Z" fill="#FC74FE"></path><path d="M14.4979 13.3263C14.1525 12.588 14.0732 11.8751 14.2624 11.2103C14.2827 11.1392 14.3152 11.0811 14.3348 11.0811C14.3544 11.0811 14.4359 11.1249 14.5159 11.1784C14.675 11.285 14.9941 11.4644 15.8444 11.9255C16.9054 12.5009 17.5104 12.9464 17.9218 13.4554C18.2821 13.9012 18.505 14.4089 18.6123 15.028C18.6731 15.3787 18.6375 16.2225 18.547 16.5757C18.2617 17.6891 17.5987 18.5637 16.6531 19.0741C16.5145 19.1488 16.3901 19.2102 16.3767 19.2105C16.3632 19.2108 16.4137 19.0831 16.4889 18.9268C16.807 18.2654 16.8432 17.622 16.6027 16.9059C16.4554 16.4674 16.1552 15.9324 15.5489 15.0282C14.8441 13.9768 14.6713 13.6971 14.4979 13.3263Z" fill="#FC74FE"></path><path d="M4.73535 17.3101C5.69986 16.5001 6.89994 15.9246 7.9931 15.748C8.46422 15.6719 9.24904 15.7021 9.68529 15.8132C10.3846 15.9912 11.0101 16.3898 11.3355 16.8648C11.6534 17.329 11.7898 17.7336 11.9318 18.6336C11.9878 18.9887 12.0488 19.3453 12.0672 19.426C12.1739 19.8924 12.3814 20.2653 12.6386 20.4526C13.0471 20.7499 13.7505 20.7684 14.4424 20.5C14.5598 20.4544 14.6618 20.4229 14.669 20.43C14.694 20.4548 14.3456 20.6868 14.0998 20.8089C13.7691 20.9732 13.5061 21.0367 13.1566 21.0367C12.5229 21.0367 11.9967 20.7161 11.5577 20.0623C11.4713 19.9336 11.2771 19.5482 11.1262 19.2059C10.6626 18.1543 10.4337 17.834 9.89554 17.4834C9.42717 17.1784 8.82312 17.1237 8.3687 17.3453C7.77179 17.6364 7.60525 18.3951 8.03277 18.8759C8.20269 19.067 8.51955 19.2318 8.77865 19.2639C9.26337 19.3239 9.67993 18.9571 9.67993 18.4703C9.67993 18.1543 9.5578 17.9739 9.25033 17.8359C8.83039 17.6475 8.379 17.8678 8.38116 18.2601C8.3821 18.4274 8.45535 18.5325 8.62398 18.6084C8.73216 18.6571 8.73467 18.6609 8.64646 18.6427C8.26115 18.5632 8.17088 18.1012 8.48068 17.7945C8.85263 17.4263 9.62176 17.5888 9.88587 18.0914C9.99684 18.3025 10.0097 18.7229 9.91297 18.9768C9.69646 19.545 9.06517 19.8438 8.42476 19.6812C7.98875 19.5705 7.81122 19.4506 7.28553 18.9121C6.37207 17.9762 6.01745 17.7949 4.70055 17.5904L4.44819 17.5512L4.73535 17.3101Z" fill="#FC74FE"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.44926 0.55979C3.4998 4.24228 5.60086 5.76161 5.83435 6.0826C6.02713 6.34765 5.95457 6.58593 5.62431 6.77268C5.44065 6.87651 5.06307 6.98171 4.87401 6.98171C4.66018 6.98171 4.58677 6.89967 4.58677 6.89967C4.46279 6.78271 4.39296 6.80317 3.75628 5.67912C2.87236 4.31495 2.13263 3.18331 2.11245 3.16437C2.06579 3.12055 2.06659 3.12203 3.66615 5.96862C3.92459 6.56192 3.71756 6.7797 3.71756 6.86421C3.71756 7.03611 3.67041 7.12646 3.4572 7.36299C3.10178 7.75736 2.9429 8.20047 2.82821 9.11753C2.69963 10.1455 2.33809 10.8717 1.33613 12.1146C0.749626 12.8421 0.653656 12.9754 0.505663 13.2687C0.319254 13.6379 0.267998 13.8447 0.247224 14.311C0.225267 14.804 0.268031 15.1225 0.419469 15.5939C0.552047 16.0065 0.690435 16.279 1.04422 16.824C1.34953 17.2944 1.52533 17.6439 1.52533 17.7806C1.52533 17.8894 1.54621 17.8895 2.01931 17.7833C3.15151 17.529 4.07085 17.0817 4.58791 16.5337C4.9079 16.1944 4.98303 16.0071 4.98547 15.5422C4.98707 15.2381 4.97631 15.1745 4.89367 14.9995C4.75914 14.7148 4.51424 14.4781 3.97447 14.1111C3.26721 13.6302 2.96514 13.2431 2.88169 12.7107C2.81325 12.2738 2.89265 11.9656 3.28391 11.15C3.68888 10.3058 3.78924 9.94602 3.85713 9.09507C3.90097 8.5453 3.96169 8.32848 4.12051 8.15445C4.28614 7.97297 4.43525 7.91151 4.84517 7.85581C5.51345 7.765 5.93898 7.59304 6.28876 7.27246C6.5922 6.99435 6.71917 6.72638 6.73866 6.32298L6.75345 6.01722L6.58388 5.82059C5.96981 5.10846 0.0380236 0 0.000233728 0C-0.00783924 0 0.194231 0.251923 0.44926 0.55979ZM1.87003 14.8689C2.00887 14.6243 1.9351 14.3099 1.70287 14.1563C1.48343 14.0112 1.14256 14.0795 1.14256 14.2687C1.14256 14.3264 1.17464 14.3684 1.24695 14.4054C1.36871 14.4677 1.37754 14.5378 1.28175 14.681C1.18473 14.826 1.19256 14.9535 1.30384 15.0402C1.48319 15.1799 1.73707 15.103 1.87003 14.8689Z" fill="#FC74FE"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.17519 8.0162C6.86146 8.11204 6.55649 8.44275 6.46209 8.78951C6.4045 9.00105 6.43718 9.37214 6.52344 9.48675C6.6628 9.67184 6.79757 9.72061 7.16249 9.71807C7.87695 9.71311 8.49805 9.40834 8.57025 9.02734C8.62944 8.71503 8.35666 8.28221 7.98092 8.0922C7.78703 7.99419 7.37468 7.9553 7.17519 8.0162ZM8.01039 8.66577C8.12056 8.51006 8.07237 8.34178 7.88498 8.22796C7.52814 8.01124 6.9885 8.19058 6.9885 8.52587C6.9885 8.69277 7.26991 8.87487 7.52786 8.87487C7.69955 8.87487 7.9345 8.77304 8.01039 8.66577Z" fill="#FC74FE"></path></svg>
                        <span className=" hidden lg:block">{item.title}</span>
                        <svg viewBox="0 0 18 12" fill="none" stroke-width="8" className="sm:hidden ml-2 text-[rgb(155,155,155)] w-[22px] h-[22px]"><path d="M1.5 6H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.5 1H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.5 11H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M10.6979 16.2453L6.31787 9.75247C5.58184 8.66118 6.2058 7 7.35185 7L16.6482 7C17.7942 7 18.4182 8.66243 17.6821 9.75247L13.3021 16.2453C12.623 17.2516 11.377 17.2516 10.6979 16.2453Z" fill="#FC74FE"></path></svg>
                      </Link>
                      {item.children}
                    </div>
                  )
                else
                  return (
                    <div key={item.id} className="hidden sm:flex flex-col justify-center items-center group h-full">
                      <div className="">
                        <Link className="text-[#959595] font-semibold text-[18px]" to={item.title.toLowerCase()}>{item.title}</Link>
                      </div>
                      {item.children}
                    </div>
                  )
              })}
            </div>
          </nav>
        </div>

        <div id="middle" className="hidden lg:flex content-center items-start  h-[42px] group group-hover:bg-[#181818]">
          <div className="grid grid-cols-1 grid-rows-2 max-h-calc-custom] w-[400px]">
            <div className={`flex bg-[#1b1b1b] group-hover:bg-[#181818] border-[1px_solid_rgba(255,255,255,0.07)] min-w-[280px] max-w-[400px] p-[8px_16px] 
              rounded-[20px] h-[40px] items-center gap-1`}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <span className="contents">
                <input className="text-white focus:outline-none  ml-[10px] w-[320px] focus:border-none active:border-none font-system m-0 p-0 resize-none bg-[#1B1B1B] group-hover:bg-[#181818]"
                  placeholder="Search tokens and NFT collections" />
              </span>
              <div className={`bg-[rgba(255,255,255,0.07)] text-[#9b9b9b] ml-[auto] w-[20px] h-[20px] rounded-[4px] text-sm font-medium 
                flex items-center content-center opacity-60 backdrop-opacity-[blur(60px)] p-[0px_8px]`}>
                /
              </div>
            </div>
          </div>
        </div>

        <div id="right" className="flex gap-2 items-center">
          <svg className="lg:hidden mr-4 hover:bg-[#181818] duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <button className="bg-[#131313] text-[#DFDFDF] font-semibold rounded-[20px] p-[5px_15px] border-2 border-[#2F2F2F] hover:bg-[#1B1B1B] hidden lg:block">Get the app</button>

          <Menu as="div" className="relative inline-block text-left ">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="8" style={{ color: "rgb(155, 155, 155)", width: "20px", height: "20px", cursor: "pointer" }}><path d="M6.82977 12.75C6.97977 15.83 8.01977 18.97 9.82977 21.76C5.58977 20.82 2.35979 17.19 2.02979 12.75H6.82977ZM9.82977 2.23999C5.58977 3.17999 2.35979 6.81 2.02979 11.25H6.82977C6.97977 8.17 8.01977 5.02999 9.82977 2.23999ZM12.1998 2H11.7998L11.4998 2.42999C9.59979 5.12999 8.48977 8.23 8.32977 11.25H15.6698C15.5098 8.23 14.3998 5.12999 12.4998 2.42999L12.1998 2ZM8.32977 12.75C8.48977 15.77 9.59979 18.87 11.4998 21.57L11.7998 22H12.1998L12.4998 21.57C14.3998 18.87 15.5098 15.77 15.6698 12.75H8.32977ZM17.1698 12.75C17.0198 15.83 15.9798 18.97 14.1698 21.76C18.4098 20.82 21.6398 17.19 21.9698 12.75H17.1698ZM21.9698 11.25C21.6398 6.81 18.4098 3.17999 14.1698 2.23999C15.9798 5.02999 17.0198 8.17 17.1698 11.25H21.9698Z" fill="currentColor"></path></svg>
                {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" /> */}
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="text-[#828282] w-[300px] absolute -right-[220%] z-10 mt-2  origin-top-right rounded-md bg-[#131313] shadow-lg ring-1 ring-[#FFFFFF] ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <span className="text-white block px-4 py-2 text-sm ">Global preferences</span>
                </MenuItem>
                <MenuItem>
                  <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2">
                    <span className="text-[14px]">Theme</span>
                    <div className="border-[1px] border-[#222222] rounded-[16px] p-[2px] flex items-center">
                      <span className="font-semibold text-[#FC72FF] bg-[#311C31] rounded-[16px] py-1 px-3">Auto</span>
                      <span className="font-semibold text-[#9B9B9B] py-1 px-3"><svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke-width="8" ><path d="M16.5 12C16.5 14.481 14.481 16.5 12 16.5C9.519 16.5 7.5 14.481 7.5 12C7.5 9.519 9.519 7.5 12 7.5C14.481 7.5 16.5 9.519 16.5 12ZM12.75 5V3C12.75 2.586 12.414 2.25 12 2.25C11.586 2.25 11.25 2.586 11.25 3V5C11.25 5.414 11.586 5.75 12 5.75C12.414 5.75 12.75 5.414 12.75 5ZM12.75 21V19C12.75 18.586 12.414 18.25 12 18.25C11.586 18.25 11.25 18.586 11.25 19V21C11.25 21.414 11.586 21.75 12 21.75C12.414 21.75 12.75 21.414 12.75 21ZM5.75 12C5.75 11.586 5.414 11.25 5 11.25H3C2.586 11.25 2.25 11.586 2.25 12C2.25 12.414 2.586 12.75 3 12.75H5C5.414 12.75 5.75 12.414 5.75 12ZM21.75 12C21.75 11.586 21.414 11.25 21 11.25H19C18.586 11.25 18.25 11.586 18.25 12C18.25 12.414 18.586 12.75 19 12.75H21C21.414 12.75 21.75 12.414 21.75 12ZM7.58099 7.58099C7.87399 7.28799 7.87399 6.81299 7.58099 6.51999L6.16699 5.10599C5.87399 4.81299 5.39899 4.81299 5.10599 5.10599C4.81299 5.39899 4.81299 5.87399 5.10599 6.16699L6.51999 7.58099C6.66599 7.72699 6.85799 7.80099 7.04999 7.80099C7.24199 7.80099 7.43399 7.72699 7.58099 7.58099ZM18.894 18.894C19.187 18.601 19.187 18.126 18.894 17.833L17.48 16.419C17.187 16.126 16.712 16.126 16.419 16.419C16.126 16.712 16.126 17.187 16.419 17.48L17.833 18.894C17.979 19.04 18.171 19.114 18.363 19.114C18.555 19.114 18.748 19.041 18.894 18.894ZM6.16699 18.894L7.58099 17.48C7.87399 17.187 7.87399 16.712 7.58099 16.419C7.28799 16.126 6.81299 16.126 6.51999 16.419L5.10599 17.833C4.81299 18.126 4.81299 18.601 5.10599 18.894C5.25199 19.04 5.44399 19.114 5.63599 19.114C5.82799 19.114 6.01999 19.041 6.16699 18.894ZM17.48 7.58099L18.894 6.16699C19.187 5.87399 19.187 5.39899 18.894 5.10599C18.601 4.81299 18.126 4.81299 17.833 5.10599L16.419 6.51999C16.126 6.81299 16.126 7.28799 16.419 7.58099C16.565 7.72699 16.757 7.80099 16.949 7.80099C17.141 7.80099 17.333 7.72699 17.48 7.58099Z" fill="currentColor"></path></svg></span>
                      <span className="font-semibold text-[#9B9B9B] py-1 px-3"><svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke-width="8" ><path d="M12.133 3C12.136 3 12.14 3 12.143 3C12.462 3 12.6 3.39301 12.36 3.60001C10.679 5.04701 9.75503 7.32199 10.226 9.77399C10.749 12.495 12.988 14.566 15.773 14.938C17.532 15.173 19.161 14.728 20.456 13.839C20.719 13.658 21.068 13.897 20.989 14.203C19.885 18.519 15.626 21.595 10.767 20.902C6.73101 20.326 3.54402 17.087 3.06602 13.095C2.81602 11.013 3.289 9.05101 4.27 7.42001C5.86 4.77401 8.78601 3 12.133 3Z" fill="currentColor"></path></svg></span>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2">
                    <span className="">Language</span>
                    <div className="flex hover:opacity-40 duration-300">
                      <span className="text-white font-semibold inline">English</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-dUWDJJ jwYqbo"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2">
                    <span className="">Currency</span>
                    <div className="flex hover:opacity-40 duration-300">
                      <span className="text-white font-semibold inline">USD</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-dUWDJJ jwYqbo"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                  </div>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          {/* <button className="bg-[#311C31] text-[#FC72FF] font-semibold rounded-[20px] p-[10px_15px] hover:bg-[#2C192C]">Connect</button> */}

          <Menu as="div" className="relative inline-block text-left ">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ">
                <button className="bg-[#311C31] text-[#FC72FF] font-semibold rounded-[20px] p-[10px_15px] hover:bg-[#2C192C]">Connect</button>
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="text-[#828282] w-[360px] absolute right-5 z-10 mt-2  origin-top-right rounded-md bg-[#131313] shadow-lg ring-1 ring-[#FFFFFF] ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <span className="text-white block px-4 py-2 text-sm ">Conenct a wallet</span>
                </MenuItem>
                <MenuItem>
                  <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2 w-full">
                    <div className="border-[1px] border-[#222222] rounded-[16px] p-3 flex items-center w-full gap-3 hover:bg-[#242424]">
                      <img className="w-10 h-10 rounded-lg" src="/img/home/background_icons/icon-uni.png" alt="ss"></img>
                      <div className="flex-col ">
                        <span className="text-white font-semibold ">Get Uniswap Wallet</span>
                        <span className="text-white block text-[12px]">Available on iOS, Android, and Chrome</span>
                      </div>
                    </div>
                  </div>
                </MenuItem>

                <MenuItem>
                  <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2 w-full">
                    <div className="border-[1px] border-[#222222] rounded-[16px] p-3 flex items-center w-full gap-3 hover:bg-[#242424]">
                      <svg viewBox="0 0 22 22" fill="none" stroke-width="8" className="w-10 h-10 text-[rgb(252,114,255)] bg-[rgb(49,28,49)] rounded-lg"> <path d="M6.92609 1.83331H3.87053C3.33028 1.83331 2.81215 2.04793 2.43013 2.42995C2.04811 2.81197 1.8335 3.33009 1.8335 3.87035V6.92591M20.1668 6.92591V3.87035C20.1668 3.33009 19.9522 2.81197 19.5702 2.42995C19.1882 2.04793 18.67 1.83331 18.1298 1.83331H15.0742M15.0742 20.1666H18.1298C18.67 20.1666 19.1882 19.952 19.5702 19.57C19.9522 19.188 20.1668 18.6699 20.1668 18.1296V15.0741M1.8335 15.0741V18.1296C1.8335 18.6699 2.04811 19.188 2.43013 19.57C2.81215 19.952 3.33028 20.1666 3.87053 20.1666H6.92609M12.1829 12.1827V14.5483M12.1829 16.9139H14.5484V12.1827M14.5482 13.3654H16.9138M16.914 15.7311V16.9139M5.67739 5.08581H9.22578C9.5524 5.08581 9.81717 5.35059 9.81717 5.67721V9.22559C9.81717 9.55221 9.5524 9.81699 9.22578 9.81699H5.67739C5.35077 9.81699 5.08599 9.55221 5.08599 9.22559V5.67721C5.08599 5.35059 5.35077 5.08581 5.67739 5.08581ZM5.67739 12.1827H9.22578C9.5524 12.1827 9.81717 12.4475 9.81717 12.7741V16.3225C9.81717 16.6491 9.5524 16.9139 9.22578 16.9139H5.67739C5.35077 16.9139 5.08599 16.6491 5.08599 16.3225V12.7741C5.08599 12.4475 5.35077 12.1827 5.67739 12.1827ZM12.7743 5.08581H16.3226C16.6493 5.08581 16.914 5.35059 16.914 5.67721V9.22559C16.914 9.55221 16.6493 9.81699 16.3226 9.81699H12.7743C12.4476 9.81699 12.1829 9.55221 12.1829 9.22559V5.67721C12.1829 5.35059 12.4476 5.08581 12.7743 5.08581Z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      <div className="flex-col ">
                        <span className="text-white font-semibold ">Get Uniswap Wallet</span>
                        <span className="text-white block text-[12px]">Available on iOS, Android, and Chrome</span>
                      </div>
                    </div>
                  </div>
                </MenuItem>

                {/* divider */}
                <MenuItem>
                  <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2 w-full">
                    <div className="border-t-[1px] border-[#222222] w-[30%]"></div>
                    <div className="flex" ><span>Other wallets </span><svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-etKGGb XlDFW"><path d="M13.9912 11.9609C14.2812 11.9609 14.5273 11.8379 14.8086 11.6094L20.75 6.81055C20.9609 6.62598 21.0928 6.3623 21.0928 6.0459C21.0928 5.43945 20.6094 5 20.0557 5C19.8008 5 19.5371 5.10547 19.291 5.30762L14 9.5791L8.7002 5.30762C8.44531 5.10547 8.19043 5 7.93555 5C7.38184 5 6.89844 5.43945 6.89844 6.0459C6.89844 6.3623 7.03027 6.62598 7.24121 6.81055L13.1738 11.6006C13.4639 11.8379 13.71 11.9609 13.9912 11.9609Z" fill="#70757A"></path><path d="M14.0928 15C13.8115 15 13.5654 15.1318 13.2754 15.3604L7.34277 20.1592C7.13184 20.335 7 20.5986 7 20.9238C7 21.5215 7.4834 21.9609 8.03711 21.9609C8.29199 21.9609 8.54688 21.8643 8.80176 21.6621L14.1016 17.3906L19.3926 21.6621C19.6387 21.8643 19.9023 21.9609 20.1572 21.9609C20.7109 21.9609 21.1943 21.5215 21.1943 20.9238C21.1943 20.5986 21.0625 20.335 20.8516 20.1592L14.9102 15.3604C14.6289 15.1318 14.3828 15 14.0928 15Z" fill="#70757A"></path></svg></div>
                    <div className="border-t-[1px] border-[#222222] w-[30%]"></div>
                  </div>
                </MenuItem>

                <MenuItem>
                  <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2 w-full">
                    <div className="border-[1px] border-[#222222] rounded-[16px] p-3 flex items-center w-full gap-3 hover:bg-[#242424]">
                      <img className="w-10 h-10 rounded-lg" src="/img/home/header-wallet-1.svg" alt="ss"></img>
                      <span className="text-white font-semibold ">Wallet Connect</span>
                    </div>
                  </div>
                </MenuItem>

                <MenuItem>
                  <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2 w-full">
                    <div className="border-[1px] border-[#222222] rounded-[16px] p-3 flex items-center w-full gap-3 hover:bg-[#242424]">
                      <img className="w-10 h-10 rounded-lg" src="/img/home/header-wallet-2.svg" alt="ss"></img>
                      <span className="text-white font-semibold ">Coinbase Wallet</span>
                    </div>
                  </div>
                </MenuItem>

                <MenuItem>
                  <div className="flex justify-between items-center cursor-pointer text-[14px] px-4 py-2 font-semibold">
                    By connecting a wallet, you agree to Uniswap Labs' Terms of Service and consent to its Privacy Policy.
                  </div>
                </MenuItem>



              </div>
            </MenuItems>
          </Menu>


        </div>
      </div>

    </>
  )
}

interface HeaderButtonProps {
  title: string;
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
  to?: string
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ title, handleClick, to }) => {
  return (
    <div onClick={handleClick} className="bg-[#1B1B1B] hover:bg-[#242424] text-[#9B9B9B] rounded-[6px] m-[4px] p-[10px] font-semibold flex flex-col justify-center items-start">
      <Link to={to ?? '/'} className="w-full h-full">{title}</Link>
    </div>
  )
}