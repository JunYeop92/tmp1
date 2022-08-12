import styles from './mydSearch/index.module.scss'
import Button from './mydSearch/Button'

export default function Tmp() {
  const handlePopup = () => {
    window.open('https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwjxyN24tsD5AhUJFIgKHWBECyIQPAgI', '', 'popup')
    window.open('https://www.naver.com/', '', 'popup')
  }

  return (
    <div className={styles.wrapper}>
      <Button type='button' onClick={handlePopup}>
        열기
      </Button>
    </div>
  )
}
