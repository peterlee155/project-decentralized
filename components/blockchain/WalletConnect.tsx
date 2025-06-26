'use client';

import { useAlgorand } from '@/contexts/AlgorandProvider'; // <-- FIXED THE PATH HERE
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Loader2, LogOut, Wallet } from 'lucide-react';

// This component handles all the UI and logic for the wallet connection.
export function WalletConnect() {
  const { accounts, connectWallet, disconnectWallet, isLoading } = useAlgorand();
  const isConnected = accounts.length > 0;

  // A helper function to shorten the long wallet address for display
  const truncateAddress = (addr: string) => {
    if (!addr) return '';
    return `${addr.substring(0, 5)}...${addr.substring(addr.length - 4)}`;
  };

  // 1. Show a loading state while connecting
  if (isLoading) {
    return (
      <Button disabled variant="outline" className="w-[160px]">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Connecting...
      </Button>
    );
  }

  // 2. If connected, show the address and a disconnect option in a dropdown
  if (isConnected) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[160px]">
            <Wallet className="mr-2 h-4 w-4" />
            {truncateAddress(accounts[0])}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>My Wallet</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={disconnectWallet} className="cursor-pointer text-red-500 focus:bg-red-50 focus:text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Disconnect</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // 3. If not connected, show the "Connect Wallet" button
  return (
    <Button onClick={connectWallet} className="w-[160px]">
      <Wallet className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  );
}
