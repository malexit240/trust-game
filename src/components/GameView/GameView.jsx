import { useDispatch, useSelector } from 'react-redux'

import styles from './GameView.module.scss'

import { DECISION, getPointsByHistory } from '../../services/GameService/GameService'
import { actions } from '../../store/rootReducer';

export function GameView() {
    const state = useSelector(s => s.root)
    const dispatch = useDispatch();

    const moves = state.moves;
    const isGameActive = state.isGameActive;

    const [playerPoints, opponentPoints] = getPointsByHistory(moves);

    return <>
        <section className={styles['game']}>

            <h2>You incomed {playerPoints}</h2>

            <div className={styles['history']}>

                {moves.map((m, i) => {
                    const playerClassName =
                        m.player == DECISION.COOPERATE && styles['cooperate']
                        || m.player == DECISION.CHEATE && styles['cheate'];

                    return <div className={`${styles['point']} ${playerClassName}`}>
                        <p className={``}> {i + 1} </p>
                    </div>
                })}

                {isGameActive && <div className={styles['point']}>
                    <p className={styles['animated']}>?</p>
                </div>}

            </div>

            <h2>Opponent incomed {opponentPoints}</h2>

            <div className={styles['history']}>

                {moves.map((m, i) => {

                    const opponentClassName =
                        m.opponent == DECISION.COOPERATE && styles['cooperate']
                        || m.opponent == DECISION.CHEATE && styles['cheate'];

                    return <div className={`${styles['point']} ${opponentClassName}`}>
                        <p className={``}> {i + 1} </p>
                    </div>
                })}

                {isGameActive && <div className={styles['point']}>
                    <p className={styles['animated']}>?</p>
                </div>}

            </div>

            <div className={styles['options']}>
                <button disabled={!isGameActive} onClick={() => dispatch(actions.cooperate())}>Cooperate</button>
                <button disabled={!isGameActive} onClick={() => dispatch(actions.cheate())}>Cheate</button>
                <button disabled={isGameActive} onClick={() => dispatch(actions.newGame())}>New round</button>
            </div>

        </section >
    </>
}