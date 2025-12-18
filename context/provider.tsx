'use client';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector';
import { createConfig, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { lisk, liskSepolia } from 'viem/chains';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { ReactNode } from 'react';
import { SdkViewSectionType, SdkViewType } from '@dynamic-labs/sdk-api';

const config = createConfig({
  chains: [lisk, liskSepolia],
  multiInjectedProviderDiscovery: false,
  transports: {
    [liskSepolia.id]: http(),
    [lisk.id]: http(),
  },
});

const evmNetworks = [
  {
    blockExplorerUrls: ['https://sepolia-blockscout.lisk.com/'],
    chainId: 4202,
    chainName: 'Lisk Sepolia',
    iconUrls: ['https://cryptologos.cc/logos/lisk-lsk-logo.svg'],
    name: 'Lisk Sepolia',
    nativeCurrency: {
      decimals: 18,
      name: 'Lisk',
      symbol: 'LSK',
      iconUrl: 'https://app.dynamic.xyz/assets/networks/lisk.svg',
    },
    networkId: 4202,
    rpcUrls: ['https://rpc.sepolia-api.lisk.com'],
    vanityName: 'Lisk Sepolia',
  },
  
];

const queryClient = new QueryClient();

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || '',
        walletConnectors: [EthereumWalletConnectors],
        overrides: {
          evmNetworks,
          views: [
            {
              type: SdkViewType.Login,
              sections: [
                {
                  type: SdkViewSectionType.Email,
                },
                {
                  type: SdkViewSectionType.Separator,
                  label: 'Or',
                },
                {
                  type: SdkViewSectionType.Social,
                  defaultItem: 'google',
                },
              ],
            },
          ],
        },
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
};

export default Provider;
