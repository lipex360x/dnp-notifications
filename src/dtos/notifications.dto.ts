export interface NotificationProps {
  id: number
  text: string
  date: string
}

export interface NotificationsDto {
  notifications: NotificationProps[]
}
