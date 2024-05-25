import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import classNames from 'classnames'

import styles from './textarea.module.scss'

interface InputProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string
}

export const Textarea = ({ className, label, ...rest }: InputProps) => {
  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <textarea {...rest} className={classNames(styles.textarea, className)} />
    </label>
  )
}
