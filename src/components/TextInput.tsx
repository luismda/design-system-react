import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextInputRootProps {
    children?: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div className='relative flex items-center rounded h-12 w-full bg-gray-800 transition-all focus-within:ring-2 ring-pink-400'>
            {children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children?: ReactNode;
    className?: string;
}

function TextInputIcon({ children, className }: TextInputIconProps) {
    return (
        <Slot className={clsx('absolute left-4 w-6 h-6 text-gray-400', className)}>
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput({ className, ...props }: TextInputInputProps) {
    return (
        <input 
            className={clsx('px-4 py-3 rounded h-full bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400',
            className
            )}
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