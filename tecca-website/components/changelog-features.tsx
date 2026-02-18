'use client'

import { useState, useRef, useEffect } from 'react'
import { Layout, Tags, PenLine, Bell, Check, Mail } from 'lucide-react'
import { motion, useAnimationControls } from 'motion/react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

const categories = [
  { id: 'feature', label: 'New Feature', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
  { id: 'bugfix', label: 'Bug Fix', color: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20' },
  { id: 'improvement', label: 'Improvement', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
  { id: 'security', label: 'Security', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' },
  { id: 'performance', label: 'Performance', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
]

export default function ChangelogFeaturesSection() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['feature', 'improvement'])
  const [notifyHovered, setNotifyHovered] = useState(false)
  const mailControls = useAnimationControls()
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    )
  }

  const handleNotifyEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setNotifyHovered(true)
    mailControls.start({
      y: 0,
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0.1 },
    })
  }

  const handleNotifyLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setNotifyHovered(false)
    }, 300)
    mailControls.start({
      y: 30,
      x: 15,
      opacity: 0,
      rotate: 12,
      transition: { duration: 0.25, ease: 'easeIn' },
    })
  }

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    }
  }, [])

  return (
    <section>
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full overflow-hidden pl-6 pt-6">
              <div className="w-full flex justify-start items-center gap-2">
                <Layout className="text-primary size-5" />
                <h3 className="text-foreground text-lg font-semibold">Changelog</h3>
              </div>
              <p className="text-muted-foreground max-w-xl">
                Keep your users informed about every update, fix, and improvement with a beautiful changelog
              </p>
              <div className="mask-b-from-95% -ml-2 -mt-2 mr-0.5 pl-2 pt-2">
                <div className="bg-background rounded-tl-(--radius) ring-foreground/5 relative mx-auto mt-4 overflow-hidden border border-transparent shadow ring-1">
                  <Image
                    src="/previews/changelog-2.png"
                    alt="Tecca changelog page showing product updates and release notes"
                    width={2880}
                    height={1842}
                    className="object-top-left h-full object-cover"
                  />
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden px-6 pt-6 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-start items-center gap-2">
                  <Tags className="text-primary size-5" />
                  <h3 className="text-foreground text-lg font-semibold">Categories</h3>
                </div>
                <p className="text-muted-foreground">
                  Categorize your Changelog updates for easier navigation between each post
                </p>
              </div>

              <div className="w-full h-40 flex flex-wrap content-center justify-center gap-1.5 p-3 bg-background rounded-md">
                {categories.map((cat) => {
                  const isSelected = selectedCategories.includes(cat.id)
                  return (
                    <button
                      key={cat.id}
                      onClick={() => toggleCategory(cat.id)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? cat.color
                          : 'bg-muted/50 text-muted-foreground border-border opacity-60 hover:opacity-100'
                      }`}
                    >
                      {isSelected && <Check className="size-2.5" />}
                      {cat.label}
                    </button>
                  )
                })}
              </div>
            </Card>

            <Card className="group overflow-hidden px-6 pt-6 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-start items-center gap-2">
                  <PenLine className="text-primary size-5" />
                  <h3 className="text-foreground text-lg font-semibold">Changelog post creation</h3>
                </div>
                <p className="text-muted-foreground">
                  Set status, notify changelog subscribers, delete drafts before publishing, publish later or straight away
                </p>
              </div>

              <div className="w-full relative h-40 flex items-start justify-center pt-3 bg-background rounded-md overflow-hidden">
                <Image
                  src="/previews/changelog-create.svg"
                  alt="Changelog post creation"
                  width={280}
                  height={200}
                  className="relative z-10 w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
              </div>
            </Card>

            <Card
              className="group overflow-hidden px-6 pt-6 flex flex-col justify-between"
              onMouseEnter={handleNotifyEnter}
              onMouseLeave={handleNotifyLeave}
            >
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-start items-center gap-2">
                  <Bell className="text-primary size-5" />
                  <h3 className="text-foreground text-lg font-semibold">Notifications</h3>
                </div>
                <p className="text-muted-foreground text-balance">
                  Notify your changelog subscribers about your product&apos;s updates
                </p>
              </div>

              <div className="w-full h-40 relative flex flex-col items-center justify-center gap-3 p-3 bg-background rounded-md overflow-hidden mx-auto">
                <div className="flex items-center justify-center gap-2.5 w-full">
                  <div
                    className={`relative inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full transition-colors duration-300 ${
                      notifyHovered ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <span
                      className={`inline-block size-3.5 transform rounded-full bg-white transition-transform duration-300 shadow-sm ${
                        notifyHovered ? 'translate-x-4.5' : 'translate-x-0.5'
                      }`}
                    />
                  </div>
                  <span className="text-xs font-medium text-foreground">Send email to subscribers</span>
                </div>

                <motion.div
                  initial={{ y: 30, x: 15, opacity: 0, rotate: 12 }}
                  animate={mailControls}
                  className="absolute bottom-2 right-2"
                >
                  <div className="relative">
                    <Mail className="size-14 text-primary/20" strokeWidth={1} />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={notifyHovered ? { scale: 1 } : { scale: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.25 }}
                      className="absolute -top-1 -right-1 size-4 bg-primary rounded-full flex items-center justify-center"
                    >
                      <Check className="size-2.5 text-primary-foreground" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
