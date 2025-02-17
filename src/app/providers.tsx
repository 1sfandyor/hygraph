// app/providers.tsx
'use client'

import { ThemeProvider } from "next-theme";


export function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider attribute="class" defaultTheme='system'>{children}</ThemeProvider>
}