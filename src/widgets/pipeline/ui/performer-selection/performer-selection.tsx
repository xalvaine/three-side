import PerformerSelectionMobile from '../../assets/performer-selection-mobile.svg'
import PerformerSelectionDesktop from '../../assets/performer-selection-desktop.svg'

import styles from './performer-selection.module.scss'
import { useIsDesktop } from 'shared/lib'

export const PerformerSelection = () => {
  const { isDesktop, isWindow } = useIsDesktop()
  return !isWindow || isDesktop ? (
    <PerformerSelectionDesktop className={styles.image} />
  ) : (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Опыт работы по конкретной специализации с описанием проектов
      </p>
      <p className={styles.text}>
        Образование, международные сертификаты участие в профильных
        соревнованиях
      </p>
      <p className={styles.text}>Заказчики из известных  компаний</p>
      <PerformerSelectionMobile className={styles.image} />
    </div>
  )
}
