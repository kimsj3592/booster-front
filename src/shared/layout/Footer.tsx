import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-red-500 flex items-center justify-center">
                <span className="text-black font-bold">C</span>
              </div>
              <span className="text-xl font-bold tracking-wider">
                CORE <span className="text-accent">BOOSTER</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm font-body">
              Unleash Your Beast. Premium pre-workout supplements for serious athletes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-accent transition-colors text-sm font-body"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#products"
                  className="text-gray-400 hover:text-accent transition-colors text-sm font-body"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">
              CONTACT
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm font-body">
              <li>support@corebooster.com</li>
              <li>1-800-BOOSTER</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-gray-500 text-sm font-body">
            © {currentYear} Core Booster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

