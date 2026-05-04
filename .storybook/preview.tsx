import React from 'react'
import type { Preview } from '@storybook/react'
import '../app/globals.css'

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
      return <Story />
    },
  ],
}

export default preview