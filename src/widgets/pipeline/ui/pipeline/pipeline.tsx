import { Title } from 'shared/ui'

import styles from './pipeline.module.scss'
import classNames from 'classnames'
import { useState } from 'react'

const steps: { title: string; text: string }[] = [
  {
    title: `Консультация`,
    text: `Поможем определить именно ту услугу, которая в первую очередь необходима бизнесу. Возьмем на себя составление ТЗ. NDA.`,
  },
  {
    title: `Выбор исполнителя`,
    text: `Предложим 3-5 исполнителей с релевантным опытом. Каждый исполнитель указывает свою цену и срок. Выбор остается за вами.`,
  },
  {
    title: `Оформление документов`,
    text: `Вы подписываете два контракта: с исполнителем и площадкой. Условия в договорах прозрачны и учитывают интересы всех сторон.`,
  },
  {
    title: `Выполнение работ`,
    text: `Исполнитель сообщает о статусе работ в проектном чате, где вы можете задать вопросы и получить объяснения технических аспектов на языке бизнеса.`,
  },
  {
    title: `Итоговый отчет`,
    text: `Вы получаете отчет исполнителя и сертификат 3side, подтверждающий достаточный уровень проверки и общее качество работы. `,
  },
]

export const Pipeline = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Title>
        Выстроим прозрачный процесс, чтобы вы быстрее получали результаты
      </Title>
      <ul className={styles.steps}>
        {steps.map(({ title, text }, index) => (
          <li
            key={title}
            className={classNames(
              styles.step,
              index === activeIndex && styles.stepActive,
            )}
            onClick={() => setActiveIndex(index)}
          >
            <p className={styles.stepOrder}>{index + 1}</p>
            <h3 className={styles.stepTitle}>{title}</h3>
            <p className={styles.stepText}>{text}</p>
          </li>
        ))}
      </ul>
    </>
  )
}