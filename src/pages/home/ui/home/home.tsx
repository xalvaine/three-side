import { Button } from '../button/button'
import { Tasks } from '../tasks/tasks'

import styles from './home.module.scss'

export const Home = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Первая платформа услуг ИБ.
          <br />
          Аккумулируем лучших специалистов рынка, чтобы защитить ваш бизнес.
        </h1>
        <p className={styles.text}>Посмотрите, как мы работаем над проектом</p>
        <Button className={styles.titleButton}>Смотреть пример</Button>
        <Tasks />
      </div>
    </div>
  )
}
