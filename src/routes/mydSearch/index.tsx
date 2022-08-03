import styles from './index.module.scss'
import Button from './Button'
import CopyClipButton from './CopyClipButton'

const popupOptions = 'width=500, height=600'
const copyDatas = [
  '마이디',
  '마이디 앱테크',
  '마이디 마이데이터',
  '마이디 데이터거래',
  '마이디 제테크',
  '마이디 포인트',
]

export default function MydSearch() {
  const handlePopup = (uri: string) => () => {
    window.open(uri, '', popupOptions)
  }

  return (
    <div className={styles.wrapper}>
      <section>
        <h2>웹 사이트 팝업</h2>
        <ul>
          <li>
            <Button type='button' onClick={handlePopup('https://m.naver.com/')}>
              네이버
            </Button>
          </li>
          <li>
            <Button type='button' onClick={handlePopup('https://m.daum.net/')}>
              카카오
            </Button>
          </li>
        </ul>
      </section>

      <section>
        <h2>클립보드 복사</h2>
        <ul className={styles.list}>
          {copyDatas.map((text) => (
            <li key={text}>
              <CopyClipButton text={text} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
