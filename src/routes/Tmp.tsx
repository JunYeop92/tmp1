import styles from './mydSearch/index.module.scss'
import Button from './mydSearch/Button'

// "마이디",
//   "마이디 앱테크",
//   "마이디 마이데이터",
//   "마이디 데이터거래",
//   "마이디 제테크",
//   "마이디 포인트",

const keywordList: Record<string, string> = {
  myd: '%EB%A7%88%EC%9D%B4%EB%94%94',
  appTech: '%EB%A7%88%EC%9D%B4%EB%94%94+%EC%95%B1%ED%85%8C%ED%81%AC',
  myData: '%EB%A7%88%EC%9D%B4%EB%94%94+%EB%A7%88%EC%9D%B4%EB%8D%B0%EC%9D%B4%ED%84%B0',
  deal: '%EB%A7%88%EC%9D%B4%EB%94%94+%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B1%B0%EB%9E%98',
  finance: '%EB%A7%88%EC%9D%B4%EB%94%94+%EC%A0%9C%ED%85%8C%ED%81%AC',
  point: '%EB%A7%88%EC%9D%B4%EB%94%94+%ED%8F%AC%EC%9D%B8%ED%8A%B8',
}

const delay = 3000

export default function Tmp() {
  const sleep = (ms: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms)
    })

  const handlePopup = async () => {
    const win = window.open() as Window

    win.location.href = `https://m.naver.com/`
    for (const key in keywordList) {
      if (Object.prototype.hasOwnProperty.call(keywordList, key)) {
        // eslint-disable-next-line no-await-in-loop
        await sleep(delay).then(() => {
          win.location.href = `https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=${keywordList[key]}`
        })
      }
    }

    win.location.href = `https://m.daum.net/`
    for (const key in keywordList) {
      if (Object.prototype.hasOwnProperty.call(keywordList, key)) {
        // eslint-disable-next-line no-await-in-loop
        await sleep(delay).then(() => {
          win.location.href = `https://m.search.daum.net/search?w=tot&nil_mtopsearch=btn&DA=YZR&q=${keywordList[key]}`
        })
      }
    }

    await sleep(delay).then(() => {
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
