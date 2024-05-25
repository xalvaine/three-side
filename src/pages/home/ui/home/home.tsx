import { Button } from 'shared/ui'
import { Tasks } from 'widgets/tasks/ui'
import { Pipeline } from 'widgets/pipeline/ui'
import { Guarantee } from 'widgets/guarantee/ui'
import { Partners } from 'widgets/partners/ui'
import { Contact } from 'widgets/contact/ui'

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
        <p style={{ marginTop: 24 }}>
          Если нужна другая услуга или вы сомневаетесь в выборе, пишите — мы
          поможем разобраться
        </p>
        <Button block className={styles.titleButton} style={{ marginTop: 24 }}>
          Оставить заявку на консультацию
        </Button>
        <Pipeline />
        <Guarantee />
        <Partners />
        <Contact />
      </div>
    </div>
  )
}
