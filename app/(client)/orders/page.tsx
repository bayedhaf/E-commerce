import RequiredUser from '@/hooks/RequiredUser'
import React from 'react'

export default async function OrdersPage() {
await RequiredUser()
  return (
    <div>page</div>
  )
}