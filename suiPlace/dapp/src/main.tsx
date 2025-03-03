import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit'
import { getFullnodeUrl } from '@mysten/sui.js/client'

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  testnet: { url: getFullnodeUrl('testnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
})
createRoot(document.getElementById('root')!).render(
  // <QueryClientProvider client={new QueryClient()}>
  //   <SuiClientProvider network={getFullnodeUrl('testnet')} >
  //     <WalletProvider>
  <App />
  //     </WalletProvider>
  //   </SuiClientProvider>
  // </QueryClientProvider>
)
