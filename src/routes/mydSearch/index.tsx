import styles from './index.module.scss'
import Button from './Button'
import CopyClipButton from './CopyClipButton'

const copyDatas = [
  '마이디',
  '마이디 앱테크',
  '마이디 마이데이터',
  '마이디 데이터거래',
  '마이디 제테크',
  '마이디 포인트',
]
export default function MydSearch() {
  const tmp1 = () => {
    window.open('https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=%EB%A7%88%EC%9D%B4%EB%94%94')

    // const win2 = window.open(
    //   'https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%A7%88%EC%9D%B4%EB%94%94&tqi=hXo3pdqVWdossQFZBh0ssssssFl-480932&query=%EB%A7%88%EC%9D%B4%EB%94%94+%EC%95%B1%ED%85%8C%ED%81%AC'
    // )

    // const win3 = window.open(
    //   'https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%A7%88%EC%9D%B4%EB%94%94&tqi=hXo3pdqVWdossQFZBh0ssssssFl-480932&query=%EB%A7%88%EC%9D%B4%EB%94%94+%EC%95%B1%ED%85%8C%ED%81%AC'
    // )

    // setTimeout(() => {
    //   win1?.close()
    //   win2?.close()
    //   win3?.close()
    // }, 1000)
  }

  const tmp2 = () => {
    window.open(
      'https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=%EB%A7%88%EC%9D%B4%EB%94%94',
      '_self'
    )
  }

  const handlePopup = (uri: string) => () => {
    window.open(uri, '', 'noopener noreferrer')
  }

  return (
    <div className={styles.wrapper}>
      <Button type='button' onClick={tmp1}>
        한 번에 열기(popup)
      </Button>

      <Button type='button' onClick={tmp2}>
        한 번에 열기(self)
      </Button>

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
