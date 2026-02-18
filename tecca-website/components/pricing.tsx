'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Free',
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'Ideal for solo founders to get started with Tecca.',
    cta: 'Start for free',
    highlighted: false,
    popular: false,
    features: [
      '1 Team Member',
      '1 Feedback Board',
      'Roadmap',
      'Changelog',
      'Commenting & Reactions',
    ],
  },
  {
    name: 'Starter',
    monthlyPrice: 19,
    yearlyPrice: 15,
    description: 'For small startups looking to grow their product with some extra features.',
    cta: 'Start for free',
    highlighted: false,
    popular: false,
    features: [
      'Everything in Free',
      '3 Team Members',
      '2 Feedback Boards',
      'Email Notifications',
      'Changelog Scheduling',
      'Custom Fields',
      'Custom Domain Sending Address',
      'Private Statuses',
    ],
  },
  {
    name: 'Pro',
    monthlyPrice: 39,
    yearlyPrice: 31,
    description: 'For growing startups and teams looking to scale their product with adoption.',
    cta: 'Start for free',
    highlighted: true,
    popular: true,
    features: [
      'Everything in Starter',
      '5 Team Members',
      '3 Feedback Boards',
      'Statuses Customization',
      'Post Moderation',
      'Post Merge',
      'Private Statuses',
      'Custom Domain Sending Address',
      'Custom Fields',
    ],
  },
  {
    name: 'Premium',
    monthlyPrice: 69,
    yearlyPrice: 55,
    description: 'For big teams who need additional customization and access to advanced features.',
    cta: 'Start for free',
    highlighted: false,
    popular: false,
    features: [
      'Everything in Pro',
      '10 Team Members',
      '6 Feedback Boards',
      'Products',
      'Private Boards',
      'Private Tags',
      'Feedback Analytics',
      'Anonymous Posting & Voting',
    ],
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="bg-background relative py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            A centralized hub for all your feedback
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">
            Whether you&apos;re a solo founder, a small startup, a growing mid-sized business, or a
            big company, we have plans tailored to your specific demands.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span
            className={cn(
              'cursor-pointer text-sm font-semibold transition-colors',
              !isYearly ? 'text-foreground' : 'text-muted-foreground',
            )}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isYearly}
            onClick={() => setIsYearly(!isYearly)}
            className={cn(
              'bg-input relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors',
              isYearly && 'bg-primary',
            )}
          >
            <span
              className={cn(
                'bg-background pointer-events-none block size-5 rounded-full shadow-lg ring-0 transition-transform',
                isYearly ? 'translate-x-5' : 'translate-x-0',
              )}
            />
          </button>
          <span
            className={cn(
              'cursor-pointer text-sm font-semibold transition-colors',
              isYearly ? 'text-foreground' : 'text-muted-foreground',
            )}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </span>
          <span className="bg-primary/15 text-primary rounded-full px-2.5 py-0.5 text-xs font-semibold">
            20% OFF
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 md:mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'row-span-3 grid grid-rows-subgrid rounded-xl border p-6',
                plan.highlighted
                  ? 'ring-primary bg-card shadow-lg ring-2'
                  : 'bg-card',
              )}
            >
              {/* Subgrid row 1: Badge + Name + Price + Description */}
              <div>
                <div className="mb-3 h-6">
                  {plan.popular && (
                    <span className="bg-primary text-primary-foreground inline-block rounded-full px-3 py-1 text-xs font-medium leading-none">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-medium">{plan.name}</h3>
                <div className="mt-2 text-3xl font-semibold">
                  {plan.monthlyPrice === null ? (
                    'Free Forever'
                  ) : (
                    <>
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      <span className="text-muted-foreground text-base font-normal"> /month</span>
                    </>
                  )}
                </div>
                {plan.monthlyPrice !== null ? (
                  <p className="text-muted-foreground mt-1 text-xs">
                    {isYearly ? 'billed yearly' : 'billed monthly'}
                  </p>
                ) : (
                  <p className="mt-1 text-xs">&nbsp;</p>
                )}
                <p className="text-muted-foreground mt-3 text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Subgrid row 2: Button — perfectly aligned across all cards */}
              <div className="self-end">
                <Button asChild className="w-full" variant={plan.highlighted ? 'default' : 'outline'}>
                  <Link href="#">{plan.cta}</Link>
                </Button>
              </div>

              {/* Subgrid row 3: Features */}
              <ul role="list" className="space-y-3 border-t pt-6 text-sm">
                {plan.features.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="text-primary size-3.5 shrink-0" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
