"use client";

import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Brand column */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brand/logo-light.svg"
                alt="Plaude"
                width={100}
                height={28}
                className="h-7 w-auto"
              />
            </Link>

            <p className="text-on-background/60 mt-4 text-sm leading-relaxed max-w-xs">
              The smarter way for businesses to send, receive, and manage money
              globally.
            </p>

            <p className="text-sm text-on-background/40 mt-5">
              &copy; {new Date().getFullYear()} Plaude Technologies Inc. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-on-background mb-4 text-sm">Product</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/" className="text-on-background/50 hover:text-on-background text-sm transition-colors">
                    Platform
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-on-background mb-4 text-sm">Learn</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/learn/blog" className="text-on-background/50 hover:text-on-background text-sm transition-colors">
                    Blog
                  </Link>
                </li>
                {/* <li>
                  <Link href="/learn/help-center" className="text-on-background/50 hover:text-on-background text-sm transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/learn/video-tutorials" className="text-on-background/50 hover:text-on-background text-sm transition-colors">
                    Video Tutorials
                  </Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-on-background mb-4 text-sm">Company</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/company/about" className="text-on-background/50 hover:text-on-background text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                {/* <li>
                  <Link href="/company/careers" className="text-on-background/50 hover:text-on-background text-sm transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/company/plaude-circle" className="text-on-background/50 hover:text-on-background text-sm transition-colors">
                    The Plaude Circle
                  </Link>
                </li> */}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-on-background mb-4 text-sm">Legal</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/legal/privacy-policy" className="text-on-background/50 hover:text-on-background text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms-of-use" className="text-on-background/50 hover:text-on-background text-sm transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/legal/cookie-policy" className="text-on-background/50 hover:text-on-background text-sm transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/modern-slavery-statement" className="text-on-background/50 hover:text-on-background text-sm transition-colors">
                    Modern Slavery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large logo watermark */}
        <div className="w-full flex mt-8 items-center justify-center">
          <svg
            width="772"
            height="220"
            viewBox="0 0 772 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-4xl h-auto select-none"
          >
            <defs>
              <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#310060" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#310060" stopOpacity="0.03" />
              </linearGradient>
              <clipPath id="footer-clip">
                <rect width="772" height="220" fill="white"/>
              </clipPath>
            </defs>
            <g clipPath="url(#footer-clip)" fill="url(#footer-logo-gradient)">
              <path d="M156.346 63.1372C160.814 55.2019 165.005 47.0983 168.883 38.8264L153.387 31.5896C149.896 39.0452 146.144 46.3578 142.148 53.5189C133.363 49.1179 123.448 46.6271 112.951 46.6271C94.0908 46.6271 77.0937 54.6297 65.2396 67.3783V47.9566H48.1245V161.861C42.012 166.515 35.7477 170.975 29.3232 175.233L38.7913 189.462C41.9446 187.375 45.0556 185.229 48.133 183.058V220.017H65.2481V170.192C68.4519 167.634 71.6135 165.025 74.7246 162.366C85.4489 170.133 98.6688 174.736 112.96 174.736C148.707 174.736 177.786 145.999 177.786 110.682C177.786 91.8405 169.507 74.876 156.363 63.1456L156.346 63.1372ZM112.943 63.6926C120.278 63.6926 127.225 65.3335 133.439 68.2535C117.167 94.3398 97.5222 118.162 75.0281 139.141C68.8819 131.231 65.2228 121.36 65.2228 110.665C65.2228 84.7636 86.6293 63.6926 112.934 63.6926H112.943ZM112.943 157.645C103.736 157.645 95.1278 155.053 87.8265 150.585C110.683 129.093 130.699 104.774 147.384 78.2083C155.595 86.6485 160.663 98.0844 160.663 110.673C160.663 136.574 139.256 157.645 112.951 157.645H112.943Z" />
              <path d="M471.82 115.882C471.82 138.989 452.538 157.788 428.838 157.788C405.139 157.788 385.857 138.989 385.857 115.882V47.9819H368.742V115.89C368.742 148.414 395.696 174.879 428.83 174.879C461.964 174.879 488.918 148.414 488.918 115.89V47.9819H471.803V115.89L471.82 115.882Z" />
              <path d="M613.302 66.6042C601.777 54.3437 585.42 46.6692 567.285 46.6692C532.482 46.6692 504.162 74.935 504.162 109.672C504.162 144.409 532.482 172.674 567.285 172.674C585.412 172.674 601.777 164.992 613.302 152.739V173.516H630.417V1.45581H613.302V66.6042ZM567.294 155.592C541.924 155.592 521.277 134.992 521.277 109.663C521.277 84.3345 541.916 63.7347 567.294 63.7347C592.671 63.7347 613.31 84.3345 613.31 109.663C613.31 134.992 592.671 155.592 567.294 155.592Z" />
              <path d="M211.755 1.45581H194.64V173.516H211.755V1.45581Z" />
              <path d="M662.86 132.249C664.546 133.074 666.376 133.856 668.399 134.605C679.216 138.586 693.591 140.773 708.868 140.773C737.989 140.773 771.992 132.628 771.992 109.672C771.992 74.935 743.672 46.6692 708.868 46.6692C674.065 46.6692 645.745 74.935 645.745 109.672C645.745 109.798 645.745 109.933 645.745 110.067V174.837H770.609V157.755H662.851V132.249H662.86ZM708.877 63.7431C734.246 63.7431 754.893 84.3428 754.893 109.672C754.893 115.529 737.39 123.691 708.877 123.691C680.363 123.691 662.86 115.52 662.86 109.672C662.86 84.3513 683.499 63.7431 708.877 63.7431Z" />
              <path d="M336.417 66.663C324.892 54.4024 308.535 46.728 290.4 46.728C255.597 46.728 227.277 74.9938 227.277 109.731C227.277 144.467 255.597 172.733 290.4 172.733C308.527 172.733 324.892 165.05 336.417 152.798V173.516H353.532V47.9819H336.417V66.6714V66.663ZM290.409 155.659C265.039 155.659 244.392 135.06 244.392 109.731C244.392 84.4017 265.031 63.8019 290.409 63.8019C315.786 63.8019 336.425 84.4017 336.425 109.731C336.425 135.06 315.786 155.659 290.409 155.659Z" />
              <path d="M11.6433 183.631C5.21884 183.631 0 188.848 0 195.252C0 201.655 5.22727 206.873 11.6433 206.873C18.0594 206.873 23.2866 201.655 23.2866 195.252C23.2866 188.848 18.0594 183.631 11.6433 183.631ZM11.6433 200.713C8.63342 200.713 6.17998 198.264 6.17998 195.26C6.17998 192.256 8.63342 189.807 11.6433 189.807C14.6532 189.807 17.1067 192.256 17.1067 195.26C17.1067 198.264 14.6532 200.713 11.6433 200.713Z" />
              <path d="M181.546 11.8901C182.454 6.30266 178.653 1.0379 173.055 0.130932C167.456 -0.776039 162.182 3.01823 161.273 8.60568C160.364 14.1931 164.166 19.4579 169.764 20.3649C175.362 21.2718 180.637 17.4776 181.546 11.8901Z" />
            </g>
          </svg>
        </div>

        {/* Compliance */}
        <details className="mt-4 group">
          <summary className="cursor-pointer text-xs text-on-background/20 hover:text-on-background/40 transition-colors select-none">
            Regulatory &amp; compliance information
          </summary>
          <p className="mt-3 text-xs leading-relaxed text-on-background/20 max-w-4xl">
            Plaude Inc. is registered in the United States as a Money Services
            Business (MSB) with the United States Financial Crimes Enforcement
            Network (FinCEN) under the Bank Secrecy Act (BSA). MSB Registration
            Number: 31000289167537. Plaude Canada Inc. is registered and
            regulated in Canada by the Financial Transactions and Reports
            Analysis Centre of Canada (FINTRAC) as a Money Services Business
            (MSB). MSB Registration Number: C100000338.
          </p>
        </details>
      </div>
    </footer>
  );
}

export { Footer };
