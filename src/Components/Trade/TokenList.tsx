
import { memo, useContext } from "react";
import { MainContext } from "../../App.tsx";
import {Token, arrToken} from "../Main/TokeData.tsx"

interface TokenListProps { 
  search : string
}

const TokenList : React.FC<TokenListProps> = ({ search }) => {
  const _MainContext = useContext(MainContext)

  const handleSearch = (search: string): Token[] => {
    // let now = performance.now()
    // while(performance.now() - now < 10) {

    // }
    return arrToken.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
  };
  
  const setTokenCategory = (value : Token) => {
    _MainContext.currentToken.isSellToken ? _MainContext.sellToken.handleSellToken(value) : _MainContext.buyToken.handleBuyToken(value)  
    _MainContext.modal.handleShowModal(false)
  }

  const res = handleSearch(search)

  return (
    <div className="flex flex-col  my-2 overflow-y-auto px-3 -mx-3 w-full">
      {res.length > 0 ? res.map(({ id, src, title, subTitle }) => (
        <div key={id} className="flex w-full cursor-pointer py-2 pl-3 group hover:bg-[#181818]" onClick={() => setTokenCategory( {id, src, title, subTitle })}>
          <img className="rounded-[50%] w-10 h-10 mt-[6px]" src={src} alt={title} />
          <div className="w-full ml-4 flex flex-col group-hover:bg-[#181818]">
            <span className="text-white font-semibold">{title}</span>
            <span className="text-[#9B9B9B]">{subTitle}</span>
          </div>
        </div>))
        :
        (<div className="w-full cursor-pointer py-2 px-4 group text-[#5E5E5E] text-center">
          <span className="text-center">No results found for &nbsp;</span>
          <span className="text-white ">{search}</span>
        </div>)
      }
    </div>
    
  )
}

export default memo(TokenList)
