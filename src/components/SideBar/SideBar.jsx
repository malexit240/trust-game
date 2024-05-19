import { useEffect, useState } from 'react'
import { getResultsHistory } from '../../services/GameService/GameService'

import styles from './SideBar.module.scss'

export function SideBar() {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        setHistory(getResultsHistory());
    }, []);

    return <aside className={styles['sidebar']}>

        <h2>Rounds history</h2>

        <table className={styles['history']}>

            <thead>
                <tr>
                    <th>
                        You
                    </th>
                    <th>
                        Opp
                    </th>
                </tr>
            </thead>

            <tbody>

                {history.map(r => <tr>
                    <td className={styles['win']}>{r[0]}</td>
                    <td className={styles['loose']}>{r[1]}</td>
                </tr>)}

            </tbody>

        </table>

    </aside>
}