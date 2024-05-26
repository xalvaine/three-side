import PaperWorkIcon from '../../assets/paperwork.svg'

import styles from './paperwork.module.scss'

export const Paperwork = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>3side</p>
      <span />
      <p className={styles.name}>Исполнитель</p>
      <PaperWorkIcon className={styles.image} />
      <p className={styles.label}>$ комиссия площадки </p>
      <p className={styles.label}>Заказчик</p>
      <p className={styles.label}>
        $ фик&shy;си&shy;р&shy;ован&shy;но&shy;е
        воз&shy;на&shy;граж&shy;де&shy;ни&shy;е
      </p>
    </div>
  )
}
