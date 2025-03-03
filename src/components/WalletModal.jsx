import React from 'react'
import "../WalletModal.css"
import LeoWalletIcon from "../assets/leo-wallet.png"
import PuzzleWalletIcon from "../assets/puzzle-wallet.png"
import SotarWalletIcon from "../assets/sotar-wallet.png"
import FoxWalletIcon from "../assets/fox-wallet.png"

const WalletModal = ({isOpen, onClose, onWalletSelect}) => {
    if(!isOpen) return null

    const wallets = [
       { id: 'leo-wallet',
        name: 'Leo Wallet',
        icon: LeoWalletIcon
    },
    { id: 'puzzle-wallet',
        name: 'Puzzle Wallet',
        icon: PuzzleWalletIcon
    },
    { id: 'sotar-wallet',
        name: 'Soter Wallet',
        icon: SotarWalletIcon
    },
    { id: 'fox-wallet',
        name: 'Fox Wallet',
        icon: FoxWalletIcon
    }
    ]
  return (
    <div className='modal-overlay'>
        <div className="wallet-modal">
            <div className="modal-header">
                <h2>
                    Connect Wallet
                </h2>
                <button className='close-button' onClick={onClose}>
                    <span>&times;</span>
                </button>
            </div>
            <div className="wallet-options">
                {
                    wallets.map(wallet => (
                        <div key={wallet.id} className="wallet-option" onClick={() => onWalletSelect(wallet.id)}>
                            <img src={wallet.icon} alt={`${wallet.name} icon`} />
                            <span>{wallet.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default WalletModal