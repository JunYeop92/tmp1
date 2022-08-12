import styles from './mydSearch/index.module.scss'
import Button from './mydSearch/Button'

export default function Tmp() {
  const handlePopup = () => {
    window.open('https://myd.world/')
    window.open('https://www.naver.com/')
    window.open('https://www.daum.net/')
  }

  return (
    <div className={styles.wrapper}>
      <Button type='button' onClick={handlePopup}>
        한 번에 열기
      </Button>
    </div>
  )
}
