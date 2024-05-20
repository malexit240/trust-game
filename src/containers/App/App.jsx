import styles from './App.module.scss';

import { GameView } from '../../components/GameView/GameView';
import { SideBar } from '../../components/SideBar/SideBar';
import { Popup } from '../../components/Popup/Popup';

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

        <p>Inspired by a series of experiments in <a href='https://en.wikipedia.org/wiki/Game_theory#Trust_game'>game theory

        </a> </p>


        <p id={styles['how-to-play-label']}> How to play?  <Popup className={styles['how-to-play']}>

          <h2>
            How to play
          </h2>

          <ul>

            <li>You loose 2 points when cooperate and get 5 points when other cooperates</li>

            <li>Your goal is take much more points so you will probably have to cheate.</li>

            <li>Each game has random number of rounds</li>

          </ul>

        </Popup></p>

        <p>Look code on <a href='https://github.com/malexit240/trust-game'>github</a> </p>

      </footer>

    </div>
  );
}

export default App;
