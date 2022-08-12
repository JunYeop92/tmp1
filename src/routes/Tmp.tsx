import styles from './mydSearch/index.module.scss'
import Button from './mydSearch/Button'

export default function Tmp() {
  const handlePopup = () => {
    window.open('https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwjxyN24tsD5AhUJFIgKHWBECyIQPAgI')
    setTimeout(() => {
      window.open('https://www.naver.com/')
    }, 500)
  }

  return (
    <div className={styles.wrapper}>
      <Button type='button' onClick={handlePopup}>
        열기
      </Button>
    </div>
  )
}
