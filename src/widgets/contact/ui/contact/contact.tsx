import { Input, Title, Textarea, Button } from 'shared/ui'

import styles from './contact.module.scss'

export const Contact = () => {
  return (
    <>
      <Title className={styles.title}>
        Напишите нам, чтобы обсудить вашу задачу
      </Title>
      <form className={styles.form}>
        <Input label='Имя и фамилия' />
        <Input label='Телефон' />
        <Input label='e-mail' />
        <Input label='Имя и фамилия' />
        <Textarea rows={10} label='Вопрос или описание задачи' />
        <Button className={styles.button}>
          Оставить заявку на консультацию
        </Button>
      </form>
      <p className={styles.text}>
        Отправляя форму, вы подтверждаете согласие с 
        <a
          className={styles.link}
          href='https://3side.org/docs/polite.pdf'
          target='_blank'
        >
          политикой конфиденциальности
        </a>
      </p>
    </>
  )
}
