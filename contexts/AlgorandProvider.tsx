'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from 'react';
import { PeraWalletConnect } from '@perawallet/connect';
import algosdk from 'algosdk'; // <-- 1. Import the Algorand SDK

// Define the Algorand client configuration
const algodToken = ''; // No token needed for public TestNet client
const algodServer = 'https://testnet-api.algonode.cloud';
const algodPort = 443;

// Create the Algodv2 client instance
const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// --- Context Shape Definition ---
interface AccountInfo {
  address: string;
  amount: number; // Balance in microAlgos
}

interface AlgorandContextType {
  peraWallet: PeraWalletConnect | null;
  accounts: string[];
  accountInfo: AccountInfo | null; // <-- 2. Add state for account info
  connectWallet: () => Promise<string[]>;
  disconnectWallet: () => void;
  isLoading: boolean;
}

const AlgorandContext = createContext<AlgorandContextType | undefined>(
  undefined
);

// --- Provider Component ---
export const AlgorandProvider = ({ children }: { children: ReactNode }) => {
  const [peraWallet, setPeraWallet] = useState<PeraWalletConnect | null>(() => {
    if (typeof window !== 'undefined') {
      return new PeraWalletConnect({ chainId: 416002 });
    }
    return null;
  });

  const [accounts, setAccounts] = useState<string[]>([]);
  const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null); // State for balance
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // --- 3. Function to fetch account details from the blockchain ---
  const fetchAccountInfo = useCallback(async (address: string) => {
    if (!address) return;
    
    // Validate the address before making the API call
    if (!algosdk.isValidAddress(address)) {
      console.error('Invalid Algorand address:', address);
      setAccountInfo(null);
      return;
    }
    
    try {
      const info = await algodClient.accountInformation(address).do();
      setAccountInfo({
        address: info.address,
        amount: info.amount,
      });
    } catch (error) {
      console.error('Failed to fetch account info:', error);
      setAccountInfo(null);
    }
  }, []);

  // Effect to fetch account info whenever the connected accounts change
  useEffect(() => {
    if (accounts.length > 0) {
      fetchAccountInfo(accounts[0]);
    } else {
      setAccountInfo(null);
    }
  }, [accounts, fetchAccountInfo]);


  const connectWallet = useCallback(async (): Promise<string[]> => {
    if (!peraWallet) return [];
    setIsLoading(true);
    try {
      const newAccounts = await peraWallet.reconnectSession();
      if (newAccounts.length) {
        setAccounts(newAccounts);
        return newAccounts;
      } else {
        const connectedAccounts = await peraWallet.connect();
        setAccounts(connectedAccounts);
        return connectedAccounts;
      }
    } catch (error) {
      console.error('Failed to connect Pera Wallet:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, [peraWallet]);


  const disconnectWallet = useCallback(async () => {
    if (!peraWallet) return;
    await peraWallet.disconnect();
    setAccounts([]);
    setAccountInfo(null); // Clear account info on disconnect
  }, [peraWallet]);

  const value = {
    peraWallet,
    accounts,
    accountInfo,
    connectWallet,
    disconnectWallet,
    isLoading,
  };

  return (
    <AlgorandContext.Provider value={value}>
      {children}
    </AlgorandContext.Provider>
  );
};

// Custom hook to easily use the Algorand context
export const useAlgorand = () => {
  const context = useContext(AlgorandContext);
  if (context === undefined) {
    throw new Error('useAlgorand must be used within an AlgorandProvider');
  }
  return context;
};