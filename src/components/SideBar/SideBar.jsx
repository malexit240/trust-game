import { useSelector } from 'react-redux'

import styles from './SideBar.module.scss'

export function SideBar() {
    const history = useSelector(s => s.root.history)

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
                    <td className={styles['win']}>{r[0]}</td>
                    <td className={styles['loose']}>{r[1]}</td>
                </tr>)}

            </tbody>

        </table>

    </aside>
}