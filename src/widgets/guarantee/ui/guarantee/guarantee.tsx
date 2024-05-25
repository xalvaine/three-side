import { ReactNode } from 'react'
import classNames from 'classnames'

import { Title } from 'shared/ui'

import styles from './guarantee.module.scss'

const answers: { title: string; text: ReactNode }[] = [
  {
    title: `Уверены в исполнителях`,
    text: (
      <>
        В нашей закрытой базе только специалисты с практическим опытом в крупных
        ИБ-компаниях. Рекомендации и благонадежность каждого проверили лично.
      </>
    ),
  },
  {
    title: `Исключаем бюрократию`,
    text: (
      <>
        Участники проекта общаются без посредников. Это позволяет оперативно
        решать вопросы и избежать ошибок из-за «испорченного телефона».
      </>
    ),
  },
  {
    title: `Дорожим репутацией`,
    text: (
      <>
        На российском рынке кибербеза любая ошибка исполнителя или компании
        быстро становится известной. А мы не хотим попасть в черный список ;)
        <br />
        Подробнее о нас →
      </>
    ),
  },
]

export const Guarantee = () => {
  return (
    <>
      <Title>Почему мы гарантируем качество и безопасность</Title>
      <ul className={styles.steps}>
        {answers.map(({ text, title }) => (
          <li key={title} className={classNames(styles.step)}>
            <h3 className={styles.stepTitle}>{title}</h3>
            <p className={styles.stepText}>{text}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
