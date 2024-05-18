import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  args: {
    variant: 'default',
    children: 'Default Text'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default'
  }
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost'
  }
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link'
  }
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    children: 'Disabled',
    disabled: true
  }
}
