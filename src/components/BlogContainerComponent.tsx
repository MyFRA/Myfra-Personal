import type React from 'react'

export default function BlogContainerComponent({ children }: { children: React.ReactNode }) {
    return <ul className="mt-3 flex flex-col gap-4">{children}</ul>
}
