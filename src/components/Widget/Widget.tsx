import { BellDot } from 'lucide-react'
import styles from './styles.module.scss'
import { Card } from '../Card'
import { NotificationsDto } from '@/dtos'

export const Widget = ({ notifications }: NotificationsDto) => {
  return (
    <div className={styles.component}>
      <header>
        <BellDot />
        <span>Notificações</span>
      </header>

      <section>
        {notifications.map((notification) => (
          <Card key={notification.id} {...notification} />
        ))}
      </section>
    </div>
  )
}
