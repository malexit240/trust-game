import { useState, useContext } from 'react';
import styles from './GameView.module.scss'

import { DECISION, TurnChoices, shouldFinishRound, GetOpponentChoise, getPointsByHistory, saveResultToHistory, GameContext } from '../../services/GameService/GameService'

export function GameView() {

    const [isGameActive, setIsGameActive] = useState(true);
    const [history, setHistory] = useState([]);

    const [playerPoints, opponentPoints] = getPointsByHistory(history);

    const updateApp = useContext(GameContext)

    function restart() {
        saveResultToHistory([playerPoints, opponentPoints]);

        setIsGameActive(true);
        setHistory([]);

        updateApp();
    }

    function doTurn(choise) {
        history.push(new TurnChoices(choise, GetOpponentChoise(history)));

        if (shouldFinishRound(0.1 * history.length)) {
            setIsGameActive(false);
        }

        setHistory(history.filter(() => true));
    }

    return <>
        <section className={styles['game']}>

            <h2>You incomed {playerPoints}</h2>

            <div className={styles['history']}>

                {history.map((t, i) => {
                    const playerClassName =
                        t.result.player == DECISION.COOPERATE && styles['cooperate']
                        || t.result.player == DECISION.CHEATE && styles['cheate'];

                    return <>
                        <p className={`${playerClassName}`}> {i + 1} </p>
                    </>
                })}

                {isGameActive && <>
                    <p>?</p>
                </>}

            </div>

            <h2>Opponent incomed {opponentPoints}</h2>

            <div className={styles['history']}>

                {history.map((t, i) => {

                    const opponentClassName =
                        t.result.opponent == DECISION.COOPERATE && styles['cooperate']
                        || t.result.opponent == DECISION.CHEATE && styles['cheate'];

                    return <>
                        <p className={`${opponentClassName}`}> {i + 1} </p>
                    </>
                })}

                {isGameActive && <>
                    <p>?</p>
                </>}

            </div>

            <div className={styles['options']}>
                <button disabled={!isGameActive} onClick={() => doTurn(DECISION.COOPERATE)}>Cooperate</button>
                <button disabled={!isGameActive} onClick={() => doTurn(DECISION.CHEATE)}>Cheate</button>
                <button disabled={isGameActive} onClick={restart}>New round</button>
            </div>

        </section>
    </>
}