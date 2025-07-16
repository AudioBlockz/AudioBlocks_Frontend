"use client"
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { createConfig, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { liskSepolia, mainnet, sepolia } from "viem/chains";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ReactNode } from "react";

const config = createConfig({
	chains: [mainnet, sepolia, liskSepolia],
	multiInjectedProviderDiscovery: false,
	transports: {
		[mainnet.id]: http(),
    [liskSepolia.id]: http(),
    [sepolia.id]: http()
	},
});

const queryClient = new QueryClient();

const  Provider=({ children }: { children: ReactNode })=> {
  return (
    <DynamicContextProvider
      settings={{
				environmentId: "c686da1e-ac86-4bd4-a2f4-5fe6ff42ed85",
				walletConnectors: [EthereumWalletConnectors],
			}}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            {/* <DynamicWidget /> */}
            {children}
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}

export default Provider;