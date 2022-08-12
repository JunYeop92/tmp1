import styles from './index.module.scss'
import Button from './Button'

export default function MydSearch() {
  const handlePopup = () => {
    // naver
    const win1 = window.open(
      'https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=%EB%A7%88%EC%9D%B4%EB%94%94'
    )

    const win2 = window.open(
      'https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%A7%88%EC%9D%B4%EB%94%94&tqi=hXo3pdqVWdossQFZBh0ssssssFl-480932&query=%EB%A7%88%EC%9D%B4%EB%94%94+%EC%95%B1%ED%85%8C%ED%81%AC'
    )

    const win3 = window.open(
      'https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=%EB%A7%88%EC%9D%B4%EB%94%94+%EB%A7%88%EC%9D%B4%EB%8D%B0%EC%9D%B4%ED%84%B0'
    )

    const win4 = window.open(
      'https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%A7%88%EC%9D%B4%EB%94%94+%EB%A7%88%EC%9D%B4%EB%8D%B0%EC%9D%B4%ED%84%B0&tqi=hYTVcwp0iIdssEHpe6VssssssMK-071731&query=%EB%A7%88%EC%9D%B4%EB%94%94+%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B1%B0%EB%9E%98'
    )

    const win5 = window.open(
      'https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%A7%88%EC%9D%B4%EB%94%94+%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B1%B0%EB%9E%98&tqi=hYTVKdp0iANssEzHQ7dssssstHd-350103&query=%EB%A7%88%EC%9D%B4%EB%94%94+%EC%A0%9C%ED%85%8C%ED%81%AC'
    )

    const win6 = window.open(
      'https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=%EB%A7%88%EC%9D%B4%EB%94%94+%EC%A0%9C%ED%85%8C%ED%81%AC&tqi=hYTVesp0iqdssEMuIu4ssssst%2B8-339360&query=%EB%A7%88%EC%9D%B4%EB%94%94+%ED%8F%AC%EC%9D%B8%ED%8A%B8'
    )
    // daum
    const win7 = window.open(
      'https://m.search.daum.net/search?q=%EB%A7%88%EC%9D%B4%EB%94%94&w=tot&nil_mtopsearch=reckwd&DA=BJE'
    )

    const win8 = window.open(
      'https://m.search.daum.net/search?nil_profile=btn&w=tot&DA=SBC&q=%EB%A7%88%EC%9D%B4%EB%94%94+%EC%95%B1%ED%85%8C%ED%81%AC'
    )

    const win9 = window.open(
      'https://m.search.daum.net/search?nil_profile=btn&w=tot&DA=SBC&q=%EB%A7%88%EC%9D%B4%EB%94%94+%EB%A7%88%EC%9D%B4%EB%8D%B0%EC%9D%B4%ED%84%B0'
    )

    const win10 = window.open(
      'https://m.search.daum.net/search?nil_profile=btn&w=tot&DA=SBC&q=%EB%A7%88%EC%9D%B4%EB%94%94+%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B1%B0%EB%9E%98'
    )

    const win11 = window.open(
      'https://m.search.daum.net/search?nil_profile=btn&w=tot&DA=SBC&q=%EB%A7%88%EC%9D%B4%EB%94%94+%EC%A0%9C%ED%85%8C%ED%81%AC'
    )

    const win12 = window.open(
      'https://m.search.daum.net/search?nil_profile=btn&w=tot&DA=SBC&q=%EB%A7%88%EC%9D%B4%EB%94%94+%ED%8F%AC%EC%9D%B8%ED%8A%B8'
    )

    setTimeout(() => {
      win1?.close()
      win2?.close()
      win3?.close()
      win4?.close()
      win5?.close()
      win6?.close()
      win7?.close()
      win8?.close()
      win9?.close()
      win10?.close()
      win11?.close()
      win12?.close()
    }, 5000)
  }

  return (
    <div className={styles.wrapper}>
      <Button type='button' onClick={handlePopup}>
        한 번에 열기
      </Button>
    </div>
  )
}
