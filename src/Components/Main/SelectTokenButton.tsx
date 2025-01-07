import { MainContext } from "../../App.tsx";
import { useContext } from "react";
interface SelectTokenButtonProps {
  isSellToken : boolean;
}

const SelectTokenButton: React.FC<SelectTokenButtonProps> = ({ isSellToken }) => {
  const _MainContext = useContext(MainContext)
  
  const handleClick = () => {
    isSellToken ? _MainContext.currentToken.handleIsSellToken(true) : _MainContext.currentToken.handleIsSellToken(false)
    _MainContext.modal.handleShowModal(true)
  };

  return (
    <div onClick={handleClick} className="p-2 cursor-pointer text-[20px] text-white bg-[#131313] rounded-[24px] flex justify-center items-center hover:bg-[#252628]">
      {isSellToken ?
        (<>
          <img className="rounded-[50%] mx-[6px] w-[28px] h-[28px]" src={_MainContext.sellToken.sellToken.src} alt="test"></img>
          <p className="mr-[10px] font-semibold">
            {_MainContext.sellToken.sellToken.subTitle}
          </p>
        </>)
        :
        (<>
          <img className="rounded-[50%] mx-[6px] w-[28px] h-[28px]" src={_MainContext.buyToken.buyToken.src} alt="test"></img>
          <p className="mr-[10px] font-semibold">
            {_MainContext.buyToken.buyToken.subTitle}
          </p>
        </>)
      }
      
      {/* <svg className="ml-1 w-[12px] h-[7px]" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#FFFFFF"></path></svg> */}
    </div>
  )
}

export default SelectTokenButton