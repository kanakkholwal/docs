import { Plasma } from '@/components/animation/plasma';
import Link from 'next/link';
import { PiGithubLogoDuotone } from 'react-icons/pi';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full">
      <div className='relative w-full min-h-dvh'>
        <Plasma
          color="#ff6b35"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
      <div className="z-10 container flex flex-col items-center justify-center px-4 absolute inset-0 min-h-dvh">

        <div className='space-y-3 mb-10 text-center'>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Build faster with <br />
          <span className="bg-linear-to-b from-fd-muted-foreground to-fd-foreground bg-clip-text text-transparent">
            curated excellence.
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
          A developer's compendium of high-performance packages, battle-tested GitHub workflows, and architectural patterns.
        </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/docs"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Browse Documentation
          </Link>
          <Link
            href="https://github.com/kanakkholwal"
            target="_blank"
            className="inline-flex h-11 items-center justify-center rounded-full border backdrop-blur-2xl border-input bg-white/10 px-8 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <PiGithubLogoDuotone className="mr-2 h-4 w-4" />
            GitHub Profile
          </Link>
        </div>
      </div>

    </div>

  );
}