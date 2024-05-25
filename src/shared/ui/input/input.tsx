import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import styles from './input.module.scss'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = ({ className, label, ...rest }: InputProps) => {
  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <input {...rest} className={classNames(styles.input, className)} />
    </label>
  )
}
