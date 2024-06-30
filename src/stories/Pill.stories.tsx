import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '07UI/Pill',
  component: Pill,
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
    isAccent: {},
    isLoading: {},
    isSelected: {},
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    isAccent: false,
    isSelected: false,
    isLoading: false,
    children: "hello world",
    size: 'medium',
    isDisabled: false,
  },
};