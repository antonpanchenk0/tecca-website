import { Card } from '@/components/ui/card';
import { CalendarCheck, Layout, GitMerge, Target } from 'lucide-react';
import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section>
      <div className="py-15">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full overflow-hidden pl-6 pt-6">
              <Layout className="text-primary size-5" />
              <h3 className="text-foreground mt-5 text-lg font-semibold">Posts</h3>
              <p className="text-muted-foreground mt-3 max-w-xl text-balance">
                One place to collect and manage your product’s feedback
              </p>
              <div className="mask-b-from-95% -ml-2 -mt-2 mr-0.5 pl-2 pt-2">
                <div className="bg-background rounded-tl-(--radius) ring-foreground/5 relative mx-auto mt-8 h-96 overflow-hidden border border-transparent shadow ring-1">
                  <Image
                    src="/previews/Posts-full.png"
                    alt="Tecca posts management interface"
                    width="2880"
                    height="1842"
                    className="object-top-left h-full object-cover"
                  />
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <Target className="text-primary size-5" />
              <h3 className="text-foreground mt-5 text-lg font-semibold">Post management</h3>
              <p className="text-muted-foreground mt-3 text-balance">
                Use post overlay to collaborate with users, merge and edit post, check upvoters,
                change statuses, boards, tags, ETA and product
              </p>
            </Card>

            <Card className="p-6">
              <CalendarCheck className="text-primary size-5" />
              <h3 className="text-foreground mt-5 text-lg font-semibold">Post moderation</h3>
              <p className="text-muted-foreground mt-3 text-balance">
                Moderate you posts before they go public and get rid of spam
              </p>
            </Card>
            <Card className="p-6">
              <GitMerge className="text-primary size-5" />
              <h3 className="text-foreground mt-5 text-lg font-semibold">Posts merge</h3>
              <p className="text-muted-foreground mt-3 text-balance">
                Use merging to get rid of posts’ duplicates and keep your boards clean
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
