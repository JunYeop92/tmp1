import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[] | string
}

export default function Button({ children, ...props }: IProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={styles.btn} {...props}>
      {children}
    </button>
  )
}
