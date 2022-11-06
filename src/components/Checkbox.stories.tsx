import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    decorators: [
        Story => (
            <label htmlFor='remember' className='flex items-center gap-2'>
                {Story({ args: {id: 'remember'} })}
                <Text size='sm'>Lembrar de mim por 30 dias</Text>
            </label>
        )
    ],
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}