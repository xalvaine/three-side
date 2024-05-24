import { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './title.module.scss'

interface TitleProps {
  children: ReactNode
  className?: string
}

export const Title = ({ children, className }: TitleProps) => {
  return <h2 className={classNames(styles.title, className)}>{children}</h2>
}
