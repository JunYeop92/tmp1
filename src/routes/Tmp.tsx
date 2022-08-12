import styles from './mydSearch/index.module.scss'
import Button from './mydSearch/Button'

export default function Tmp() {
  const tmp1 = () => {
    window.open('https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwjxyN24tsD5AhUJFIgKHWBECyIQPAgI')
  }

  const tmp2 = () => {
    window.open('https://www.naver.com/')
  }

  const handlePopup = () => {
    tmp1()
    tmp2()
  }

  const sleep = (ms: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms)
    })

  const handlePopup2 = async () => {
    const win = window.open() as Window
    win.location.href = 'https://www.naver.com/'

    await sleep(1000).then(() => {
      win.location.href = 'https://www.daum.net/'
    })

    await sleep(1000).then(() => {
      win.location.href = 'https://dribbble.com/'
    })

    await sleep(1000).then(() => {
      win.close()
    })
  }

  return (
    <div className={styles.wrapper}>
      <Button type='button' onClick={handlePopup}>
        열기
      </Button>

      <Button type='button' onClick={handlePopup2}>
        열기2
      </Button>
    </div>
  )
}
