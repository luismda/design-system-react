import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { Loading } from './Loading';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account'
    },
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Disable: StoryObj<ButtonProps> = {
    args: {
        disable: true
    }
}

export const ButtonLoading: StoryObj<ButtonProps> = {
    args: {
        disable: true,
        children: <Loading size='md' />
    },
    argTypes: {
        disable: {
            table: {
                disable: true
            }
        },
        children: {
            table: {
                disable: true
            }
        }
    }
}