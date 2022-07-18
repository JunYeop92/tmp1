import { MouseEventHandler } from 'react'

export default function Home() {
  const popupOptions = 'width=500, height=600'
  const handlePopup = (uri: string) => () => window.open(uri, '', popupOptions)
  const handleCopyClip: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { textContent } = e.currentTarget
    if (!textContent) return

    navigator.clipboard
      .writeText(textContent)
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('success')
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('failure')
      })
  }

  return (
    <ul>
      <li>
        <button type='button' onClick={handlePopup('https://m.naver.com/')}>
          네이버
        </button>
      </li>
      <li>
        <button type='button' onClick={handlePopup('https://m.daum.net/')}>
          카카오
        </button>
      </li>
      <li>
        <button type='button' onClick={handleCopyClip}>
          마이디
        </button>
      </li>
      <li>
        <button type='button' onClick={handleCopyClip}>
          마이디 앱테크
        </button>
      </li>
      <li>
        <button type='button' onClick={handleCopyClip}>
          마이디 데이터거래
        </button>
      </li>
      <li>
        <button type='button' onClick={handleCopyClip}>
          마이디 마이데이터
        </button>
      </li>
      <li>
        <button type='button' onClick={handleCopyClip}>
          마이디 제테크
        </button>
      </li>
      <li>
        <button type='button' onClick={handleCopyClip}>
          마이디 포인트
        </button>
      </li>
    </ul>
  )
}
