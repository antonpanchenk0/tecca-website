import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function BottomContentSection() {
    return (
        <section>
            <div className="bg-muted py-16 md:py-24 overflow-hidden">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
                        <div className="lg:w-2/5 flex-shrink-0 text-center lg:text-left">
                            <h2 className="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl mx-auto lg:mx-0">
                                All feedback.{' '}
                                <br />
                                <span className="text-muted-foreground">One platform.</span>
                            </h2>
                            <p className="mt-4 text-muted-foreground text-lg text-balance max-w-md mx-auto lg:mx-0">
                                Forget about endless spreadsheets with feedback from your users, tens of chats with product managers and developers regarding feature request prioritization, and lost notes with feedback that never reaches your team.
                            </p>
                            <div className="mt-8 flex gap-3 justify-center lg:justify-start">
                                <Button
                                    asChild
                                    className="pr-2">
                                    <Link href="/registration">
                                        Start for free
                                        <ChevronRight
                                            strokeWidth={2.5}
                                            className="size-3.5! opacity-50"
                                        />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="lg:w-3/5 relative w-full lg:-mr-24">
                            <div className="relative">
                                <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-3xl" />
                                <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-foreground/5 -rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src="/previews/Posts-full.png"
                                        alt="Tecca feedback dashboard consolidating all user feedback in one platform"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-primary/10 rounded-3xl -z-10 blur-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
