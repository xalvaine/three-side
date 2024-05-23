import { Header } from '../header/header'
import { Button } from '../button/button'

import styles from './home.module.scss'
import { Tasks } from 'pages/home/ui/tasks/tasks'

export const Home = () => {
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Первая платформа услуг ИБ.
          <br />
          Аккумулируем лучших специалистов рынка, чтобы защитить ваш бизнес.
        </h1>
        <Button className={styles.titleButton}>
          Посмотрите, как строится работа над проектом
        </Button>
        <Tasks />
      </div>
    </div>
  )
}
