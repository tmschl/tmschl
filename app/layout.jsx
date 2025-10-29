import './globals.css'

export const metadata = {
  title: 'Timmy Schiller',
  description: 'Director of Product Engineering',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

