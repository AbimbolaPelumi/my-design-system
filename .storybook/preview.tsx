import React from 'react'
import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.css'
import { kudaModena, suisseIntl } from '../app/fonts'
import { cn } from '../lib/utils'

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
    layout: 'centered',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme',
      defaultValue: 'retail-light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'retail-light', title: 'Retail Light' },
          { value: 'retail-dark', title: 'Retail Dark' },
          { value: 'business-light', title: 'Business Light' },
          { value: 'business-dark', title: 'Business Dark' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'retail-light'
      document.documentElement.setAttribute('data-theme', theme)
      document.documentElement.classList.add(
        'font-sans',
        suisseIntl.variable,
        kudaModena.variable
      )
      return (
        <div className={cn('font-sans', suisseIntl.variable, kudaModena.variable)}>
          <Story />
        </div>
      )
    },
  ],
}

export default preview
