import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '07UI/Image',
  component: Image,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  decorators: [
    (Story)=>{
      return <div style={{width: "400px", display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Story/></div>
    }
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
     src: {
          control: 'text'
     },
     corner: {
          control: 'select',
          options: ['rounded', 'default', 'circle'],
     },
     fit: {
          control: 'select',
          options: ['cover', 'contain', 'fill']
     }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
     src: "https://plus.unsplash.com/premium_photo-1683910665313-877b5dd42d4a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     corner: 'rounded',
     fit: 'contain',
     height: 400,
     width: 400
  },
};