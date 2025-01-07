import { useContext } from "react"
import { MainContext } from "../../App.tsx"

export default function SellToBuy () {
  const _MainContext = useContext(MainContext)
  const handleSelltoBuy = () => {
    let temp = _MainContext.sellToken.sellToken
    _MainContext.sellToken.handleSellToken(_MainContext.buyToken.buyToken)
    _MainContext.buyToken.handleBuyToken(temp)
  }

  return (
    <div onClick={() => handleSelltoBuy()} className={`z-10 absolute rounded-[12px] h-[40px] w-[40px] my-[-22px] mx-[220px] bg-[rgb(27,27,27)] border-4 border-[#131313] flex items-center justify-center cursor-pointer `}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
    </div>
  )
}