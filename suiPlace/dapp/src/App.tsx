import { useState } from 'react';
import './App.css'
import { CompactPicker } from 'react-color'
import PlaceBoard from './components/PlaceBoard';
import { ConnectButton } from '@mysten/dapp-kit';


function App() {
  const [color, setColor] = useState('#ffffff');
  const handleChangeColor = (colorChange: any) => {
    setColor(colorChange);
  }

  return (
    <div className="wrapper">
      {/* <ConnectButton /> */}
      <PlaceBoard />
      <div className="description">
        <h2 className='title'>Sui Place</h2>
        <p className='text'>Are you ready to join the Sui community in placing a tile on the board? Select a color then ctrl+click (win) or cmd+click (mac) to place</p>
        <div className='color-board'>
          <CompactPicker color={color} onChange={(colorChange) => handleChangeColor(colorChange)} />
        </div>
        <div className="footer">
          <p>
            Sui Place is currently only available on devnet, make sure your wallet network
            is properly set.
          </p>
          <a href="https://jurenka.software/"><b>Made with ❤️ by https://jurenka.software/</b></a>
        </div>
      </div>
    </div>
  );
}

export default App
