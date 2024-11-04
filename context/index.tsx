/**
 * Context provider for the Wagmi SDK and React Query
 * 
 * Detailed documentation can be found here:
 * https://docs.reown.com/appkit/next/core/installation
 * https://docs.reown.com/appkit/javascript/core/installation
 */


'use client'

import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { wagmiAdapter, projectId } from '@/config'
import { createAppKit } from '@reown/appkit/react' 

/** 
 * Import the networks you want to use.
 * For this example we are using the sepolia network.
 * You can find the list of available networks in the documentation:
 * 
 * https://wagmi.sh/react/api/chains
 * https://viem.sh/docs/chains/introduction
 * https://docs.reown.com/appkit/next/core/custom-networks
 */ 
import { sepolia } from '@reown/appkit/networks'



const queryClient = new QueryClient()

// 1. Get a project ID at https://cloud.reown.com
if (!projectId) {
  throw new Error('Project ID is not defined')
}

// 2. Configure the metadata
const metadata = {
  name: 'Web3 demo',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

/**
 * 3. Create the modal instance
 * 
 * The modal instance is used to open the connect modal, e.g.:
 * openConnectModalBtn.addEventListener('click', () => modal.open())
 */ 

export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [sepolia],
  defaultNetwork: sepolia,
  metadata: metadata,
  features: {
    analytics: false, // Optional - defaults to your Cloud configuration
    swaps: false,
  },
  themeMode: 'light',
})

/**
 * In this example we are using Sepolia testnet. If we wanted to use another network, we would need to change the network configuration.
 * Example for Arbitrum network:
 * 
 * export const modal = createAppKit({
 * adapters: [wagmiAdapter],
 * projectId,
 * networks: [arbitrum],
 * defaultNetwork: arbitrum,
 * metadata: metadata,
 * features: {
 *   analytics: false, // Optional - defaults to your Cloud configuration
 *   swaps: false,
 * },
 * themeMode: 'light',
 * // Optional - add custom tokens that will be displayed in the wallet
 * tokens: {
 *   "eip155:42161": { // Arbitrum
 *     address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
 *   },
 * }
 *})
 */

// 4. Create the ContextProvider
export function ContextProvider({ children, cookies }: Readonly<{ children: ReactNode; cookies: string | null }>) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
    