import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
    children?: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 px-4 py-3 rounded h-12 w-full bg-gray-800 focus-within:ring-2 ring-pink-400'>
            {children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children?: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input 
            className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Icon: TextInputIcon,
    Input: TextInputInput
}