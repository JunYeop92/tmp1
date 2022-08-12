import styles from './mydSearch/index.module.scss'
import Button from './mydSearch/Button'
import { useEffect, useState } from 'react'

export default function Tmp() {
  const [isTmp, setIsTmp] = useState(false)

  const handlePopup = () => {
    setIsTmp(true)
  }

  useEffect(() => {
    if (!isTmp) return

    window.open('https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwjxyN24tsD5AhUJFIgKHWBECyIQPAgI', '', 'noopener')
    window.open('https://www.naver.com/', '', 'noopener')
  }, [isTmp])

  return (
    <div className={styles.wrapper}>
      <Button type='button' onClick={handlePopup}>
        열기
      </Button>
    </div>
  )
}
