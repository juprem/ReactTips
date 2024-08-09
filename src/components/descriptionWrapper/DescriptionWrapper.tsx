import { ReactNode } from 'react';

interface DescriptionWrapperProps {
    children: ReactNode;
}

export function DescriptionWrapper({ children }: DescriptionWrapperProps) {
    const rand = '#' + Math.random().toString(16).slice(2, 8);

    return (
        <div
            style={{
                border: `2px solid ${rand}`,
            }}
            className="flex flex-col border-neutral-600 rounded bg-neutral-700 border w-96"
        >
            {children}
        </div>
    );
}
