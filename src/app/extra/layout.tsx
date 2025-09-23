import Link from "next/link";

export default function ExtraLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full flex bg-gray-100 dark:bg-neutral-900 p-6 sm:p-9 overflow-hidden">
      <div className="w-full h-[calc(100vh-48px)] sm:h-[calc(100vh-72px)] rounded-md border border-white bg-neutral-300 dark:bg-neutral-700 px-6 sm:px-10 py-8 flex flex-col overflow-hidden fine-noise fine-noise-tint">
        <header className="mb-6">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h1
                className="font-light tracking-[0.08em] text-neutral-900 dark:text-neutral-100 text-[42px] sm:text-[58px] leading-[0.95] select-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Extra Project
              </h1>
              <p
                className="mt-3 text-[11px] sm:text-xs text-neutral-700 dark:text-neutral-300 font-normal tracking-[0.15em] uppercase"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Detail View
              </p>
            </div>
            <Link href="/?section=projects" className="hidden sm:inline-flex items-center font-mono text-xs tracking-wide px-3 py-1.5 rounded border border-white/70 dark:border-white/30 bg-white/40 dark:bg-neutral-600/40 backdrop-blur-sm text-neutral-800 dark:text-neutral-100 hover:border-white transition">
              ← Back
            </Link>
          </div>
          <div className="mt-4 sm:hidden">
            <Link href="/?section=projects" className="inline-flex items-center font-mono text-xs tracking-wide px-3 py-1.5 rounded border border-white/70 dark:border-white/30 bg-white/40 dark:bg-neutral-600/40 backdrop-blur-sm text-neutral-800 dark:text-neutral-100 active:scale-[.97] transition">
              ← Back
            </Link>
          </div>
        </header>
        <section className="flex-1 min-h-0 overflow-y-auto no-scrollbar pr-2 pb-4">
          <div className="fade-in-soft h-full">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
