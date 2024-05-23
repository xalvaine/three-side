import Flag from '../../assets/flag.svg'
import Chevron from '../../assets/chevron.svg'
import Logo from '../../assets/logo.svg'
import Person from '../../assets/person.svg'

import styles from './header.module.scss'

const itemsList: { label: string }[] = [
  { label: `О компании` },
  { label: `Услуги` },
  { label: `Наша компания` },
  { label: `Пакеты` },
  { label: `Юридическая информация` },
  { label: `Документы` },
  { label: `Мы в СМИ` },
  { label: `Личный кабинет` },
]

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.visuals}>
        <div className={styles.picker}>
          <Flag />
          RU
          <Chevron />
        </div>
        <Logo />
        <Person className={styles.user} />
      </div>
      <ul className={styles.links}>
        {itemsList.map(({ label }) => (
          <li key={label} className={styles.linkListItem}>
            <a className={styles.link}>{label}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}
