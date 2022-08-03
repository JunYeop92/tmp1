import { MouseEventHandler, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CheckIcon, CopyIcon } from 'assets/svgs'
import styles from './CopyClipButton.module.scss'
import Button from './Button'

interface IProps {
  text: string
}

export default function CopyClipButton({ text }: IProps) {
  const [isCopy, setIsCopy] = useState(false)

  const notify = () =>
    toast('클립보드에 저장되었습니다.', {
      position: 'top-center',
      autoClose: 1000,
    })

  const handleCopyClip: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { textContent } = e.currentTarget
    if (!textContent) return

    navigator.clipboard
      .writeText(textContent)
      .then(() => {
        setIsCopy(true)
        notify()
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('clipboard error')
      })
  }

  return (
    <>
      <Button type='button' onClick={handleCopyClip} onMouseLeave={() => setIsCopy(false)}>
        <div className={styles.wrapper}>
          <div>{text}</div>
          <div className={styles.overlay}>{isCopy ? <CheckIcon /> : <CopyIcon />}</div>
        </div>
      </Button>
      <ToastContainer />
    </>
  )
}
