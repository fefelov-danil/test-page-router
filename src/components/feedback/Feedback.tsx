import style from './Feedback.module.scss'
import Image, { StaticImageData } from 'next/image'
import { MouseEventHandler } from 'react'
import {Button} from "@/components/button/Button";

interface IFeedback {
  title: string
  info: string
  image?: StaticImageData
  actionBtnTitle?: string
  action?: MouseEventHandler<HTMLButtonElement>
}

const Feedback = ({ title, info, image, actionBtnTitle, action }: IFeedback) => {
  return (
    <div className={style.content}>
      <div className={style.info_content}>
        <h1>{title}</h1>
        <p>{info}</p>
        {action && (
          <div>
            <Button onClick={action}>{actionBtnTitle}</Button>
          </div>
        )}
      </div>
      {image && <Image src={image} alt="" />}
    </div>
  )
}

export default Feedback
