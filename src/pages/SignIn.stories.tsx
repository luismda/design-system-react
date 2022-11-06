import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';
import { SignIn } from './Signin';

export default {
    title: 'Pages/Sign in',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login realizado!'
                    }))
                })
            ]
        }
    }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'luismigueldutraalves@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('**********'), '12345678')
        userEvent.click(canvas.getByLabelText('Lembrar de mim por 30 dias'))

        setTimeout(() => {
            userEvent.click(canvas.getByRole('button'))
        }, 200)

        await waitFor(() => {
            return expect(canvas.getByText('Login realizado!')).toBeInTheDocument() 
        })
    }
}