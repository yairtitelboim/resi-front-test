import { Building, User } from 'lucide-react'

interface LayoutLink {
  path: string
  name: string
  icon: React.ReactNode
}

export const layoutLinks: LayoutLink[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <User />
  },
  {
    path: '/dashboard/buildings',
    name: 'Your Buildings',
    icon: <Building />
  }
]
