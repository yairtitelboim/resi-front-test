import type { Meta, StoryObj } from '@storybook/react'

import Header from '@/components/layout/header'

const meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    isAuth: false
  }
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const NoAuth: Story = {
  parameters: {
    nextjs: {
      appDirectory: true
    }
  },
  args: {
    isAuth: false
  }
}

export const Auth: Story = {
  parameters: {
    nextjs: {
      appDirectory: true
    }
  },
  args: {
    isAuth: true
  }
}
