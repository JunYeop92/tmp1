import styles from './mydSearch/index.module.scss'
import Button from './mydSearch/Button'
import { useRef } from 'react'

export default function Tmp() {
  const ref = useRef<HTMLAnchorElement>(null)
  const ref2 = useRef<HTMLAnchorElement>(null)

  const handlePopup = () => {
    // window.open('https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwjxyN24tsD5AhUJFIgKHWBECyIQPAgI')
    // window.open('https://www.naver.com/')

    ref.current?.click()
    ref2.current?.click()
  }

  return (
    <div className={styles.wrapper}>
      <a href='https://www.hyundaicard.com/index.jsp' target='_blank' rel='noreferrer' ref={ref}>
        tmp1
      </a>

      <a
        href='https://github.com/duskload/react-device-detect/blob/master/docs/selectors.md'
        target='_blank'
        rel='noreferrer'
        ref={ref2}
      >
        tmp2
      </a>

      <Button type='button' onClick={handlePopup}>
        열기
      </Button>
    </div>
  )
}
