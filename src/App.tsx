import React from 'react';
import { createContext, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './Layout/Layout.tsx'
import Home from './Page/Home.tsx'
import Trade from './Page/Trade.tsx'
import Explore from './Page/Explore.tsx';
import Pool from './Page/Pool/Pool.tsx';
import PoolCreate from './Page/Pool/PoolCreate.tsx';
import { arrToken, arrPool } from './Components/Main/TokeData.tsx'

// import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
// import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css"

const thead_data = [
  {
    id: 1,
    values: ['Token name', 'Price', '1 hour', '1 day', 'FDV', 'Volume']
  },
  {
    id: 2,
    values: ['Pool', 'Transaction', 'TVL', '1 day volume', '7 day volume', '1 day APR']
  },
]

const tbody_data = [
  {
    id: 1,
    values: arrToken
  }, {
    id: 2,
    values: arrPool.map((pool) => {
      let tokenOne = arrToken.filter((token) => pool.tokenOne === token.id)
      let tokenTwo = arrToken.filter((token) => pool.tokenTwo === token.id)
      return { ...pool, tokenOneSrc: tokenOne[0].src, tokenOneName: tokenOne[0].subTitle, tokenTwoSrc: tokenTwo[0].src, tokenTwoName: tokenTwo[0].subTitle }
    })
  }
]
interface Table {
  tableIndex: number,
  arrHead: { id: number, values: Array<string> },
  arrBody: { id: number, values: Array<{}> },
  sort: { isDsc: boolean, category: number }
}
interface Token {
  id: number;
  src: string;
  title: string;
  subTitle: string;
}
interface MainContextProps {
  modal: {
    showModal: boolean;
    handleShowModal: Function;
  }
  currentToken: {
    isSellToken: boolean;
    handleIsSellToken: Function;
  }
  sellToken: {
    sellToken: Token;
    handleSellToken: Function;
  }
  buyToken: {
    buyToken: Token;
    handleBuyToken: Function;
  }
  trade: {
    tradeTab: number;
    handleTradeTab: Function;
  }
  explore: {
    curTable: Table,
    handletableIndex: Function,
    handleSort: Function
  }
}

export const MainContext = createContext<MainContextProps>({
  modal: {
    showModal: false,
    handleShowModal: () => { },
  },
  currentToken: {
    isSellToken: true,
    handleIsSellToken: () => { },
  },
  sellToken: {
    sellToken: { id: 0, src: '', title: '', subTitle: '' },
    handleSellToken: () => { },
  },
  buyToken: {
    buyToken: { id: 0, src: '', title: '', subTitle: '' },
    handleBuyToken: () => { },
  },
  trade: {
    tradeTab: 0,
    handleTradeTab: () => { },
  },
  explore: {
    curTable: { tableIndex: 0, arrHead: thead_data[0], arrBody: tbody_data[0], sort: { isDsc: false, category: 0 } },
    handletableIndex: () => { },
    handleSort: () => { },
  }

})

function App() {
  // const endpoint = web3.clusterApiUrl("devnet")
  const wallets = useMemo(() => [], [])
  const [showModal, setShowModal] = useState(false)
  const [isSellToken, setIsSellToken] = useState(true)
  const [sellToken, setSellToken] = useState({ id: 1, src: "/img/tokens/eth.png", title: "Ethereum", subTitle: "ETH" })
  const [buyToken, setBuyToken] = useState({ id: 2, src: "/img/tokens/1inch.png", title: "1inch", subTitle: "1INCH" })
  const [tradeTab, setTradeTab] = useState(0)
  const [curTable, setCurTable] = useState({
    tableIndex: 0,
    arrHead: thead_data[0],
    arrBody: tbody_data[0],
    sort: { isDsc: false, category: 0 }
  })

  const handletableIndex = (v: number) => {
    setCurTable({ ...curTable, tableIndex: v, arrHead: thead_data[v], arrBody: tbody_data[v], sort: { isDsc: false, category: 0 } })
  }

  const handleShowModal = (value: boolean): void => {
    setShowModal(value)
  }
  const handleIsSellToken = (value: boolean): void => {
    setIsSellToken(value)
  }
  const handleSellToken = (value: Token): void => {
    setSellToken(value)
  }
  const handleBuyToken = (value: Token): void => {
    setBuyToken(value)
  }
  const handleTradeTab = (curTab: number): void => {
    console.log('current Tab : ', curTab)
    setTradeTab(curTab)
  }
  const handleSort = (head_item: number) => {
    const newSort = { isDsc: !curTable.sort.isDsc, category: head_item };

    // Sort the values array
    const sortedValues = curTable.arrBody.values.slice().sort((a, b) => {
      const order = newSort.isDsc ? 1 : -1;
      if ((a as any)[newSort.category] < (b as any)[newSort.category]) {
        return -1 * order;
      }
      if ((a as any)[newSort.category] > (b as any)[newSort.category]) {
        return 1 * order;
      }
      return 0;
    });

    setCurTable({ ...curTable, arrBody: { ...curTable.arrBody, values: sortedValues }, sort: newSort })
  }

  return (
    <>
      {/* <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}> */}
      <MainContext.Provider value={{
        modal: {
          showModal,
          handleShowModal,
        },
        currentToken: {
          isSellToken,
          handleIsSellToken,
        },
        sellToken: {
          sellToken,
          handleSellToken,
        },
        buyToken: {
          buyToken,
          handleBuyToken,
        },
        trade: {
          tradeTab,
          handleTradeTab,
        },
        explore: {
          curTable,
          handletableIndex,
          handleSort
        }
      }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='trade' element={<Trade />} />
              <Route path='explore' element={<Explore />} />
              <Route path='explore/tokens' element={<Explore />} />
              <Route path='pool' element={<Pool />} />
              <Route path='pool/create' element={<PoolCreate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
      {/* </WalletProvider>
      </ConnectionProvider> */}
    </>

  );
}

export default App;
