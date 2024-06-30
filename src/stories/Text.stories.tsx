import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components';
import { TypographyTokenValues } from '../theming/tokens';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: '07UI/Text',
  component: Text,
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
     children: {
          control: 'text'
     },
     typographyToken: {
          control: 'select',
          options: TypographyTokenValues
     }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "hello world",
    typographyToken: 'bodyBase'
  },
};