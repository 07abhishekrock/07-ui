import React from 'react';
import type { Preview } from "@storybook/react";

import ThemeProvider from '../src/theming/ThemeProvider'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context)=>{

      return <div>
        <ThemeProvider>
          <Story/>
        </ThemeProvider>
      </div>
    }
  ]
};

export default preview;
