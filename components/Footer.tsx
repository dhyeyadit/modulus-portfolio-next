import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const logoSrc = "/images/modulusinfosystemslogo.svg";

  return (
    <footer className="mt-8 sm:mt-12 lg:mt-16 bg-gray-900 text-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src={logoSrc}
              alt="Modulus logo"
              width={80}
              height={32}
              priority
              className="rounded bg-white p-1 sm:w-[90px] sm:h-[36px] lg:w-[100px] lg:h-[40px]"
            />
            <div>
              <div className="font-semibold text-white text-sm sm:text-base">Modulus Infosystems</div>
              <div className="text-xs sm:text-sm text-gray-300">Precision Delivered.</div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 max-w-sm">
            We build precise, reliable software and cloud solutions for global clients.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-medium mb-3 text-white text-sm sm:text-base">Quick Links</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-purple-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-300 hover:text-purple-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-gray-300 hover:text-purple-400 transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/technologies" className="text-gray-300 hover:text-purple-400 transition">
                Technologies
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-gray-300 hover:text-purple-400 transition">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Legal */}
        <div>
          <h4 className="font-medium mb-3 text-white text-sm sm:text-base">Contact</h4>
          <div className="text-xs sm:text-sm text-gray-300 space-y-2">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+919930030062" className="hover:text-purple-400 transition">
                +91 9930030062
              </a>
            </div>
            <div className="flex items-start gap-2">
              <span>✉️</span>
              <a
                href="mailto:dhyey@modulusinfosystems.com"
                className="hover:text-purple-400 transition break-all"
              >
                dhyey@modulusinfosystems.com
              </a>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-700">
              <Link href="/privacy-policy" className="hover:text-purple-400 transition">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-3 sm:py-4 text-xs sm:text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Modulus Infosystems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}