import { HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  block?: boolean
  children: ReactNode
  className?: string
}

export const Button = ({
  children,
  className,
  block,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, block && styles.block, className)}
      {...rest}
    >
      {children}
    </button>
  )
}
