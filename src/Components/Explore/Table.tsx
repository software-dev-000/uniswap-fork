import { useState, useContext } from "react"
import { MainContext } from "../../App.tsx";

export default function Table () {

  const _MainContext = useContext(MainContext)

  return(
    <>
      <div className="flex justify-between mb-4">
        <div className="flex gap-4">
          <span onClick={() => _MainContext.explore.handletableIndex(0)} className={` font-semibold text-[28px] cursor-pointer 
            text-center ${_MainContext.explore.curTable.tableIndex === 0 ? "text-white" : "text-[#7e7e7e]"}`}>Tokens</span>
          <span onClick={() => _MainContext.explore.handletableIndex(1)} className={` font-semibold text-[28px] cursor-pointer 
            text-center ${_MainContext.explore.curTable.tableIndex === 1 ? "text-white" : "text-[#7e7e7e]"}`}>Pools</span>
        </div>

        <div>

        </div>
      </div>

      <div id="data-table" className="w-full flex flex-col">
        <div className={`bg-[#1B1B1B] h-12 text-[#9B9B9B] font-normal flex justify-between items-center 
          border-[1px] border-[#2a2b2c] rounded-t-lg text-right rounded-tl-lg px-5`}>
            <div className="cursor-pointer hover:text-[#6E6E6E] duration-300 w-[5%] text-left">#</div>
            {_MainContext.explore.curTable.arrHead.values.map((head_item, index) => {
              if (index === 0)
                return <div key={index} className="w-[25%] cursor-pointer hover:text-[#6E6E6E] duration-300 text-left">{head_item}</div>
              else {
                return (
                  <div key={index} className="w-[15%] cursor-pointer hover:text-[#6E6E6E] duration-300 flex items-center justify-end"
                    onClick={() => _MainContext.explore.handleSort(index)}>
                    { _MainContext.explore.curTable.sort.isDsc === true && _MainContext.explore.curTable.sort.category === index &&
                      <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                      </svg>
                    }
                    { _MainContext.explore.curTable.sort.isDsc === false && _MainContext.explore.curTable.sort.category === index &&
                      <svg className="w-[16px] h-[16px] rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                      </svg>
                    }
                    
                    <span>{head_item}</span>
                  </div>
                )}
            }
          )}
        </div>

        <div className=" border-[1px] border-[#2a2b2c] rounded-b-lg border-t-0 mb-4">
          {_MainContext.explore.curTable.tableIndex === 0 ? _MainContext.explore.curTable.arrBody.values.map((token:any, index) => (
            <div key={token.id} className={`rounded-lg px-5 bg-[#131313] cursor-pointer hover:bg-[#303030]  h-16 text-white font-normal text-[14px] text-right 
            flex justify-between items-center`}>
              <span className="w-[5%] text-left">{index}</span>
              <div className="w-[25%] flex cursor-pointer py-2 group justify-start items-center gap-2 overflow-y-hidden" >
                <img className="rounded-[50%] w-7 h-7" src={token.src} alt={token.title} />
                <span className="text-white font-semibold">{token.title}</span>
                <span className="text-[#9B9B9B]">{token.subTitle}</span>
              </div>
              <span className="w-[15%]">${token.price.toFixed(2)}</span>
              <span className="w-[15%]">{token.hour.toFixed(2)}%</span>
              <span className="w-[15%]">{token.day.toFixed(2)}%</span>
              <span className="w-[15%]">${token.FDV.toFixed(2)}</span>
              <span className="w-[15%]">${token.volume.toFixed(2)}</span>
            </div>)) 
            :
            _MainContext.explore.curTable.arrBody.values.map((pool:any, index) => {

              return (
                  <div key={pool.poolId} className={`rounded-lg px-5 bg-[#131313] cursor-pointer hover:bg-[#303030]  h-16 text-white font-normal text-[14px] text-right 
                  flex justify-between items-center`}>
                    <span className="w-[5%] text-left">{index}</span>
                    <div className="w-[25%] flex cursor-pointer py-2 group justify-start items-center gap-2 overflow-y-hidden" >
                      <div className="flex ">
                        <img className="rounded-[14px_0px_0px_14px] w-[14px] h-7 object-cover object-[0%_0%]" src={pool.tokenOneSrc} alt={pool.tokenOneName} />
                        <img className="ml-[2px] rounded-[0px_14px_14px_0px] w-[14px] h-7 object-cover object-[100%_0%]" src={pool.tokenTwoSrc} alt={pool.tokenTwoName} />
                      </div> 
                      <span className="text-white font-semibold">{pool.tokenOneName}-{pool.tokenTwoName}</span>
                    </div>
                    <span className="w-[15%]">${pool.transaction}</span>
                    <span className="w-[15%]">{pool.tvl.toFixed(2)}%</span>
                    <span className="w-[15%]">${pool.oneday.toFixed(2)}%</span>
                    <span className="w-[15%]">${pool.sevenday.toFixed(2)}</span>
                    <span className="w-[15%]">${pool.apr.toFixed(2)}</span>
                  </div>
                )})
            }
        </div>
      </div>
      
    </>
  )
}