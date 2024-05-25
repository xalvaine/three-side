import { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './chat.module.scss'

interface ChatProps<MemberName extends string> {
  viewerName: MemberName
  data: { authorName: MemberName; text: ReactNode }[]
}

export const Chat = <T extends string>({ viewerName, data }: ChatProps<T>) => {
  return (
    <div className={styles.wrapper}>
      {data.map(({ authorName, text }, index) => (
        <div
          key={index}
          className={classNames(
            styles.message,
            authorName === viewerName && styles.viewerMessage,
          )}
        >
          <p className={styles.name}>{authorName}</p>
          <div className={styles.bubble}>{text}</div>
        </div>
      ))}
    </div>
  )
}
