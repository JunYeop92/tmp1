import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const options = 'width=500, height=600'
    window.open(
      'https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=%EB%A7%88%EC%9D%B4%EB%94%94+%EC%95%B1%ED%85%8C%ED%81%AC',
      '',
      options
    )
    window.open('https://m.naver.com/', '', options)

    // setTimeout(() => {
    //   myWindow?.close()
    // }, 1000)
  }, [])

  return <div>Home</div>
}
