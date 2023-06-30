import { BellDot } from 'lucide-react'
import styles from './styles.module.scss'
import { NotificationProps } from '@/dtos'

export const Card = ({ text, date }: NotificationProps) => {
  return (
    <div className={styles.component}>
      <BellDot />
      <div>
        <p>{text}</p>
        <footer>
          <span>Há {date}</span>
        </footer>
      </div>
    </div>
  )
}
