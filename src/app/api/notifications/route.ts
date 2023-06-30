import notifications from '@/data/notifications'
import { NextResponse } from 'next/server'

export const GET = async () => {
  return NextResponse.json(notifications)
}
