import {Montserrat} from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import './globals.css'

const montserrat = Montserrat({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],
    display: 'swap',
})


export const metadata = {
    title: 'SGB Kopija',
    description: 'Renato Goles',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={montserrat.className}>{children}</body>
        </html>
    )
}
