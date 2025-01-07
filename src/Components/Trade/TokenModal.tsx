import { useContext, useState, useDeferredValue, useEffect } from "react";
import { MainContext } from "../../App.tsx";
import TokenList from "./TokenList.tsx";

const TokenModal  = () => {
  const [search, setSearch] = useState("")
  const deferredSearch = useDeferredValue(search)
  const _MainContext = useContext(MainContext)

  const handleSearchChange = (value : string) => {
    setSearch(value)
  }

  useEffect(() => {
    const handleKeyDown = (event:KeyboardEvent) => {
      if (event.key === 'Escape') {
        _MainContext.modal.handleShowModal(false);
      }
    };

    if (_MainContext.modal.showModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [_MainContext.modal]);

  console.log('modal invoked')
  
  return (
    <>
      <div onClick={() => _MainContext.modal.handleShowModal(false)} className="absolute z-[10000] top-0 left-0 w-full h-full bg-[#0F0F0F] opacity-60 flex justify-center items-center">
      </div>
      <div className="flex w-full h-full justify-center items-center">
        <div className={`absolute z-[10002] p-[15px_15px_0px_15px] top-[5%] w-[400px] h-[90%] max-h-[600px] bg-[#131313] rounded-[20px] border-[1px] border-[#303030]
          flex flex-col`} >
          <div className="flex justify-between w-full">
            <p className="text-white">Select a token</p>
            <svg onClick={() => _MainContext.modal.handleShowModal(false)} className="w-[24px] h-[24px] ml-[auto] cursor-pointer" viewBox="0 0 16 16" fill="none" strokeWidth="8" ><path d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM4.53033 3.46967C4.23744 3.17678 3.76256 3.17678 3.46967 3.46967C3.17678 3.76256 3.17678 4.23744 3.46967 4.53033L4.53033 3.46967ZM11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697L11.4697 12.5303ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967ZM3.46967 4.53033L11.4697 12.5303L12.5303 11.4697L4.53033 3.46967L3.46967 4.53033Z" fill="#FFFFFF"></path></svg>
          </div>

          <div id="middle" className="flex content-center items-start mt-[12px] h-[48px] group ">
            <div className="grid grid-cols-1 grid-rows-2 max-h-calc-custom] w-[400px]">
              <div className={`flex bg-[#1b1b1b]  border-[1px_solid_rgba(255,255,255,0.07)] min-w-[280px] max-w-[400px] p-[8px_16px] 
                rounded-[20px] h-[40px] items-center gap-1`}>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <span className="contents">
                  <input className="text-white focus:outline-none placeholder-[#5E5E5E] font-semibold ml-[10px] w-[320px] focus:border-none active:border-none font-system m-0 p-0 resize-none bg-[#1B1B1B] " 
                    placeholder="Search tokens" value={search} onChange={(e) => handleSearchChange(e.target.value)}/>
                </span>
                
                <svg className=" transition-all duration-300" fill="none" width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg" ><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#9B9B9B"></path></svg>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-3">
            <svg className="w-4 h-4 mt-1" viewBox="0 0 18 17" fill="none" strokeWidth="8" ><path d="M8.80054 0.829883L10.4189 4.09404C10.5406 4.33988 10.7756 4.50989 11.0481 4.54906L14.7838 5.08902C15.4688 5.18818 15.7422 6.0282 15.2464 6.50987L12.5456 9.13071C12.3481 9.32238 12.258 9.5982 12.3047 9.86904L12.9221 13.4557C13.0471 14.1832 12.283 14.7382 11.628 14.3957L8.38805 12.6999C8.14471 12.5724 7.85469 12.5724 7.61219 12.6999L4.37468 14.394C3.71885 14.7374 2.95216 14.1815 3.07799 13.4524L3.69556 9.86904C3.74223 9.5982 3.65218 9.32238 3.45468 9.13071L0.753871 6.50987C0.257205 6.0282 0.530481 5.18818 1.21631 5.08902L4.95217 4.54906C5.22384 4.50989 5.45885 4.33988 5.58135 4.09404L7.19969 0.829883C7.52553 0.167383 8.47221 0.167383 8.80054 0.829883Z" fill="#9B9B9B"></path></svg>
            <p className="text-[#9B9B9B] text-[16px] ml-2 font-semibold">Popular tokens</p>
          </div>

          <TokenList search={deferredSearch} />
        </div>
      </div>
    </>
  )
}

export default TokenModal
