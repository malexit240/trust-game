import styles from './App.module.scss';

import { GameView } from '../../components/GameView/GameView';
import { SideBar } from '../../components/SideBar/SideBar';

function App() {
  return (
    <div className={styles['App']}>

      <header className={styles['header']}>

        <h1>THE GAME OF TRUST</h1>

      </header>

      <main className={styles['main']}>

        <SideBar />
        <GameView />

      </main>

      <footer className={styles['footer']}>

        <p>Look code on <a href='https://github.com/malexit240/trust-game'>github</a> </p>

      </footer>

    </div>
  );
}

export default App;
