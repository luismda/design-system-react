import { Meta, StoryObj } from '@storybook/react';
import { Loading, LoadingProps } from './Loading';

export default {
    title: 'Components/Loading',
    component: Loading,
    args: {
        size: 'sm'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<LoadingProps>

export const Default: StoryObj<LoadingProps> = {}