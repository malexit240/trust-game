import { useSelector } from 'react-redux'

import styles from './SideBar.module.scss'

export function SideBar() {
    const history = useSelector(s => s.root.history)

    function getWinLooseClassName(a, b) {
        return a > b && styles['win']
            || a < b && styles['loose']
            || ' '
    }

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

                {history.map((r, i) => <tr key={i}>
                    <td className={getWinLooseClassName(r[0], r[1])}>{r[0]}</td>
                    <td className={getWinLooseClassName(r[1], r[0])}>{r[1]}</td>
                </tr>)}

            </tbody>

        </table>

    </aside>
}