import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
    children: ReactNode;
    disable?: boolean;
    asChild?: boolean;
}

export function Button({ children, disable, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp 
            disabled={disable}
            className={clsx('px-4 py-3 h-11 bg-pink-600 text-white rounded font-semibold text-sm w-full transition-colors hover:bg-pink-400 focus:ring-2 outline-none ring-white', 
            {
                'cursor-not-allowed opacity-70 hover:bg-pink-600': disable
            }
            )}
        >
            {children}
        </Comp>
    )
}