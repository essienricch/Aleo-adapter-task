import React from "react";
import WalletModal from "./WalletModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedWallet, setSelectedWallet] = React.useState(null);
  const handleWalletSelect = (walletId) => {
    setSelectedWallet(walletId);
    setIsModalOpen(false);
    console.log(`connecting to ${walletId}...`);
  };
  return (
    <div className="app-header">
      <div className="logo">Arcane Finance</div>
      <nav></nav>
      <div className="header-actions">
        <button
          className="connect-wallet-button"
          onClick={() => setIsModalOpen(true)}
        >
          Connect Wallet
        </button>
      </div>
      <WalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onWalletSelect={handleWalletSelect}
      />
    </div>
  );
};

export default Header;
