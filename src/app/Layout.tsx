import { Outlet } from 'react-router-dom'
import { Header } from '@/shared/layout/Header'
import { Footer } from '@/shared/layout/Footer'
import { ScrollToTop } from '@/shared/components/ScrollToTop'

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

