import { FlickeringGrid } from '@/components/animation/flickering-grid';
import { baseOptions } from '@/lib/layout.shared';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import Link from 'next/link';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions()}>
    <div className="absolute top-0 left-0 z-0 w-full min-h-80 mask-[linear-gradient(to_top,transparent_25%,black_95%)]">
      <FlickeringGrid
        className="absolute top-0 left-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.2}
        flickerChance={0.05}
      />
    </div>
    {children}
    <div className="w-full max-w-7xl mx-auto mt-4 flex flex-col items-center justify-between gap-4 text-sm text-neutral-600 md:flex-row dark:text-neutral-400 pb-5">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
        <p className="whitespace-nowrap">
          © {new Date().getFullYear()}{" "}
          <Link
            className="whitespace-nowrap transition-colors hover:text-black dark:hover:text-white"
            href="/"
          >
            Nexo Docs
          </Link>
          . All rights reserved
        </p>

      </div>

    </div>
  </HomeLayout>;
}
