/**
 * This file is used to configure the Wagmi Adapter.
 * 
 * Detailed documentation can be found here:
 * https://docs.reown.com/appkit/next/core/installation
 */

import { cookieStorage, createStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { sepolia } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_WAGMI_PROJECT_ID;

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Define the networks you want to use
export const networks = [sepolia]

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig