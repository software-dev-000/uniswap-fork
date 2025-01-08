import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import * as web3 from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css"
import { useMemo } from "react";

export default function Presale() {
  const endpoint = web3.clusterApiUrl('devnet');
  const wallets = useMemo(() => [], []);


  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <WalletMultiButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}