import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'My Qur\'an',
  description: 'Project Al Qur\'an - Latihan membuat web dengan next-js dan fetch api',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <div className="header-container">
          <header>
            <div className="logo"> <Link href="/">My Qur'an</Link></div>
            <nav>
              <ul className='flex'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/">Contacts</Link></li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="container max-w-screen-lg">
        {children}
        </div>
      </body>
    </html>
  )
}
