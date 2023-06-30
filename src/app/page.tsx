import styles from './page.module.scss'
import { NotificationsDto } from '@/dtos'
import { Widget } from '@/components/Widget'

const getNotifications = async (): Promise<NotificationsDto> => {
  const response = await fetch('http://localhost:3000/api/notifications')

  return response.json()
}

export default async function Home() {
  const data = await getNotifications()

  return (
    <main className={styles.page}>
      <Widget {...data} />
    </main>
  )
}
