import type { Meta, StoryObj } from '@storybook/react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

const meta = {
  title: 'Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    type: 'button',
    children: 'Default Text',
    href: '/'
  }
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultAsLink: Story = {
  args: {
    type: 'button',
    children: 'Default',
    href: '/'
  }
}

export const DefailtAsButton: Story = {
  args: {
    type: 'button',
    children: 'Default',
    href: '/',
    className: buttonVariants({ variant: 'outline' })
  }
}

export const DestructiveAsButton: Story = {
  args: {
    type: 'button',
    children: 'Destructive',
    href: '/',
    className: buttonVariants({ variant: 'destructive' })
  }
}
