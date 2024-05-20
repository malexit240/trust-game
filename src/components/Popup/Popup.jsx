import styles from './Popup.module.scss';

export function Popup({ children, className }) {
  return <article className={`${styles['popup']} ${className}`}>

    {children}

  </article>
}
