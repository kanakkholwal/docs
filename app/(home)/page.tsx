import Link from 'next/link';
import { PiGithubLogoDuotone } from 'react-icons/pi';

export default function HomePage() {
  return (
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-border bg-background py-24 text-center md:py-32">
        
        {/* Abstract Background Gradient (Semantic) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-30">
          <div className="h-125 w-125 bg-linear-to-tr from-primary/40 to-transparent blur-[120px]" />
        </div>

        <div className="z-10 container flex flex-col items-center px-4">

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Build faster with <br />
            <span className="bg-linear-to-b from-neutral-700 to-neutral-800/60 dark:from-neutral-300/60 dark:to-neutral-50 bg-clip-text text-transparent">
              curated excellence.
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            A developer's compendium of high-performance packages, battle-tested GitHub workflows, and architectural patterns.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/docs"
              className="inline-flex h-11 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Browse Documentation
            </Link>
            <Link
              href="https://github.com/kanakkholwal"
              target="_blank"
              className="inline-flex h-11 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <PiGithubLogoDuotone className="mr-2 h-4 w-4" />
              GitHub Profile
            </Link>
          </div>
        </div>
      </div>

  );
}