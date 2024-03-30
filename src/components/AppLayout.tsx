import type React from 'react'
import FooterComponent from './FooterComponent'
import NavbarComponent from './NavbarComponent'

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen" style={{ backgroundImage: 'url(/batik.jpg)' }}>
            <div className="min-h-screen py-12 lg:py-16 bg-black bg-opacity-5">
                <NavbarComponent />
                <div className="py-4">{children}</div>
            </div>
            <FooterComponent />
        </div>
    )
}
