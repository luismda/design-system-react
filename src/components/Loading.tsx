import { clsx } from 'clsx';

export interface LoadingProps {
    size?: 'sm' | 'md' | 'lg';
}

export function Loading({ size = 'sm' }: LoadingProps) {
    return (
        <div 
            className={clsx('bg-white rounded-[50%] mx-auto animate-ping', 
            {
                'w-4 h-4': size === 'sm',
                'w-6 h-6': size === 'md',
                'w-8 h-8': size === 'lg'
            }
            )}
        />
    )
}