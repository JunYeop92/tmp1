import styles from './mydSearch/index.module.scss'
import Button from './mydSearch/Button'
import { useRef } from 'react'

export default function Tmp() {
  const ref = useRef<HTMLAnchorElement>(null)
  const ref2 = useRef<HTMLAnchorElement>(null)

  const handlePopup = () => {
    // window.open('https://www.daum.net/')
    // window.open('https://www.naver.com/')
    ref.current?.click()
    ref2.current?.click()
  }

  return (
    <div className={styles.wrapper}>
      <a href='https://myd.world/' target='_blank' rel='noreferrer' ref={ref}>
        tmp1
      </a>

      <a href='https://www.daum.net/' target='_blank' rel='noreferrer' ref={ref2}>
        tmp2
      </a>

      <Button type='button' onClick={handlePopup}>
        열기
      </Button>
    </div>
  )
}
