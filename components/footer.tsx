import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8" />
              <span className="font-display text-lg tracking-tight">CropSentry</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              AI computer vision that catches crop disease before it spreads.
              Built for African smallholder farmers and agribusinesses.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              Built by CropSentry Ltd · Enugu, Nigeria
            </p>
            <div className="mt-3 flex gap-3">
              <a href="https://x.com/agricrave?s=21" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="text-muted-foreground hover:text-foreground">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1Jqz5JZto4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-foreground">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-medium">Product</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/solution" className="hover:text-foreground">Solution</Link></li>
              <li><Link href="/technology" className="hover:text-foreground">Technology</Link></li>
              <li><Link href="/impact" className="hover:text-foreground">Impact</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Request a demo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-medium">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} CropSentry Ltd. All rights reserved.</p>
          <p>
            <a href="mailto:petra@cropsentry.site" className="hover:text-foreground">
              petra@cropsentry.site
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
