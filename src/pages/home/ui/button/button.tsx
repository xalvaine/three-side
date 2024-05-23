import { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'

interface ButtonProps {
  children: ReactNode
  className?: string
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={classNames(styles.button, className)}>{children}</button>
  )
}
