import Link from 'next/link'

const teamMembers = [
  {
    name: 'Vlad',
    role: 'Founder',
    description:
      "Hey, I'm Vlad, founder of Tecca. Let's take your product's feedback to a new level!",
    socials: [
      {
        platform: 'X',
        actionLabel: 'Follow',
        label: '@dobrodiy1337',
        href: 'https://x.com/dobrodiy1337',
        icon: (
          <svg
            className="size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
            />
          </svg>
        ),
      },
      {
        platform: 'LinkedIn',
        actionLabel: 'Follow',
        label: 'linkedin.com/in/mypr0f1le/',
        href: 'https://www.linkedin.com/in/mypr0f1le/',
        icon: (
          <svg
            className="size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            />
          </svg>
        ),
      },
    ],
  },
]

export default function Team() {
  return (
    <div className="bg-background relative py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Team</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg md:text-xl">
            We&apos;re here to help and answer any question you might have. We look forward to
            hearing from you!
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
              {/* Left: Member info (no card) */}
              <div className="flex flex-col md:w-1/2 lg:w-2/5 md:shrink-0">
                <div className="bg-primary/15 text-primary flex size-20 shrink-0 items-center justify-center rounded-full text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>

                <div className="mt-5">
                  <h3 className="text-3xl font-semibold">
                    {member.name}
                    <span className="bg-primary/15 text-primary ml-3 inline-block rounded-full px-3 py-1 align-middle text-sm font-medium">
                      {member.role}
                    </span>
                  </h3>
                </div>

                <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Right: Social network cards */}
              <div className="flex flex-col gap-6 md:w-[35%] md:max-w-[35%]">
                {member.socials.map((social) => (
                  <Link
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card group flex items-center justify-between rounded-xl border p-6 transition-colors hover:border-primary/40">
                    <div className="flex items-center gap-4">
                      <div className="text-muted-foreground group-hover:text-primary flex size-10 items-center justify-center rounded-lg bg-muted transition-colors">
                        {social.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground text-sm font-medium">
                          {social.platform}
                        </span>
                        <span className="text-foreground group-hover:text-primary text-base font-medium transition-colors">
                          {social.label}
                        </span>
                      </div>
                    </div>
                    <span className="text-primary text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100">
                      {social.actionLabel} &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
