import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './App.module.scss';

import { GameView } from '../../components/GameView/GameView';
import { SideBar } from '../../components/SideBar/SideBar';

import { GameContext } from '../../services/GameService/GameService';


function App() {

  const [game, setGame] = useState(0);

  return (
    <div className={styles['App']}>

      <header className={styles['header']}>

        <h1>Trust game</h1>

      </header>

      <main className={styles['main']}>

        <GameContext.Provider value={() => setGame(v => v + 1)}>

          <SideBar />

          <GameView />

        </GameContext.Provider>

      </main>

      <footer className={styles['footer']}>

        <p>Trust game</p>

      </footer>

    </div>
  );
}

export default App;
