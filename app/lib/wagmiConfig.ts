import { createConfig, http } from 'wagmi'
import { mainnet, bscTestnet } from 'wagmi/chains'

const config = createConfig({
  chains: [mainnet, bscTestnet], 
  ssr: true, 
  transports: {
    [mainnet.id]: http(),
    [bscTestnet.id]: http(),
  },
})

export { config };