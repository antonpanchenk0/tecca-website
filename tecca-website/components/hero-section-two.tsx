import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { HeroHeader } from './header';

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main>
        <section className="before:bg-muted border-e-foreground relative overflow-hidden before:absolute before:inset-1 before:h-[calc(100%-8rem)] before:rounded-2xl sm:before:inset-2 md:before:rounded-[2rem] lg:before:h-[calc(100%-14rem)]">
          <div className="py-15 md:py-36">
            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
              <div>
                <h1 className="mx-auto mt-8 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                  A centralized hub for all your feedback
                </h1>
                <p className="text-muted-foreground mx-auto my-6 max-w-2xl text-balance text-xl">
                  Forget about losing important feedback, store every request in one place and
                  prioritize the features your users really need
                </p>

                <div className="flex items-center justify-center gap-3">
                  <Button asChild size="lg">
                    <Link href="/registration">
                      <span className="text-nowrap">Collect Feedback</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 mx-auto max-w-5xl px-6">
                <div className="mt-12 md:mt-16">
                  <div className="bg-background rounded-(--radius) relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-1 ring-black/10">
                    <Image
                      src="/previews/Board-Feedback-2.png"
                      alt="Tecca feedback board showing collected user feature requests and feedback"
                      width={2880}
                      height={1842}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
