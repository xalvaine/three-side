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
      <div className={styles.texts}>
        <p className={styles.text}>
          О&shy;пыт ра&shy;бо&shy;ты по кон&shy;крет&shy;ной
          спе&shy;ци&shy;а&shy;ли&shy;за&shy;ци&shy;и с
          о&shy;пи&shy;са&shy;ни&shy;ем про&shy;ек&shy;тов
        </p>
        <p className={styles.text}>
          Об&shy;ра&shy;зо&shy;ва&shy;ни&shy;е,
          меж&shy;ду&shy;на&shy;род&shy;ны&shy;е сер&shy;ти&shy;фи&shy;ка&shy;ты
          у&shy;ча&shy;сти&shy;е в про&shy;филь&shy;ных
          со&shy;рев&shy;но&shy;ва&shy;ни&shy;ях
        </p>
        <p className={styles.text}>
          За&shy;каз&shy;чи&shy;ки из из&shy;вест&shy;ных ком&shy;па&shy;ний
        </p>
      </div>
      <PerformerSelectionMobile className={styles.image} />
    </div>
  )
}
