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
            <div className="mt-3 flex gap-4">
              <a href="https://x.com/agricrave?s=21" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground">
                𝕏 @agricrave
              </a>
              <a href="https://www.facebook.com/share/1Jqz5JZto4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground">
                Facebook
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
