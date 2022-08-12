import styles from './mydSearch/index.module.scss'
import Button from './mydSearch/Button'

export default function Tmp() {
  const sleep = (ms: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms)
    })

  const handlePopup = async () => {
    const win = window.open() as Window
    win.location.href = 'https://www.naver.com/'

    await sleep(5000).then(() => {
      win.location.href = 'https://www.daum.net/'
    })

    await sleep(5000).then(() => {
      win.location.href = 'https://dribbble.com/'
    })

    await sleep(5000).then(() => {
      win.close()
    })
  }

  return (
    <div className={styles.wrapper}>
      <Button type='button' onClick={handlePopup}>
        열기
      </Button>
    </div>
  )
}
