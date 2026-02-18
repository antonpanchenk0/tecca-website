'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronDownIcon,
  Circle,
  CircleCheck,
  CircleX,
  GitMerge,
  Hand,
  Layout,
  Merge,
  Plus,
  Settings,
  Shield,
  Sparkles,
  AlignCenter,
  AlignRight,
  AlignJustify,
  AlignLeft,
} from 'lucide-react';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ButtonGroup } from './ui/button-group';

export default function FeaturesSection() {
  const [date, setDate] = useState<Date>();
  const [typedText, setTypedText] = useState('');
  const fullText = "This feature looks amazing! Can't wait to try it out...";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section>
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full overflow-hidden pl-6 pt-6">
              <div className="w-full flex justify-start items-center gap-2">
                <Layout className="text-primary size-5" />
                <h3 className="text-foreground text-lg font-semibold">Posts</h3>
              </div>
              <p className="text-muted-foreground max-w-xl text-balance">
                One place to collect and manage your product’s feedback
              </p>
              <div className="mask-b-from-95% -ml-2 -mt-2 mr-0.5 pl-2 pt-2">
                <div className="bg-background rounded-tl-(--radius) ring-foreground/5 relative mx-auto mt-4 overflow-hidden border border-transparent shadow ring-1">
                  <Image
                    src="/previews/Posts-full.png"
                    alt="Tecca posts dashboard for managing product feedback"
                    width={2880}
                    height={1842}
                    className="object-top-left h-full object-cover"
                  />
                </div>
              </div>
            </Card>
            <Card className="group col-span-full md:col-span-2 overflow-hidden px-6 pt-6 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-start items-center gap-2">
                  <Settings className="text-primary size-5" />
                  <h3 className="text-foreground text-lg font-semibold">Post management</h3>
                </div>
                <p className="text-muted-foreground">
                  Collaborate with users, edit post, check upvoters, change statuses, boards, tags,
                  ETA and product
                </p>
              </div>

              <div className="w-full p-4 md:p-6 lg:p-8 bg-background rounded-md">
                <div className="w-full grid grid-cols-1 md:grid-cols-5 items-start md:items-center gap-2 p-2 border-1 rounded-md">
                  <span className="col-span-1 md:col-span-2 text-sm font-semibold">
                    Feedback board
                  </span>
                  <Select>
                    <SelectTrigger className="w-full cursor-pointer col-span-1 md:col-span-3">
                      <SelectValue placeholder="Select a feedback board" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="light" className="cursor-pointer">
                          Feature request
                        </SelectItem>
                        <SelectItem value="dark" className="cursor-pointer">
                          Bug report
                        </SelectItem>
                        <SelectItem value="system" className="cursor-pointer">
                          Other
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <span className="col-span-1 md:col-span-2 text-sm font-semibold">Status</span>
                  <Select>
                    <SelectTrigger className="w-full cursor-pointer col-span-1 md:col-span-3">
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="new" className="cursor-pointer">
                          <Sparkles className="size-4 text-green-500" />
                          <span className="text-green-500">New</span>
                        </SelectItem>
                        <SelectItem value="in-progress" className="cursor-pointer">
                          <Circle className="size-4 text-blue-500" />
                          <span className="text-blue-500">In progress</span>
                        </SelectItem>
                        <SelectItem value="done" className="cursor-pointer">
                          <CircleCheck className="size-4 text-green-500" />
                          <span className="text-green-500">Done</span>
                        </SelectItem>
                        <SelectItem value="cancelled" className="cursor-pointer">
                          <CircleX className="size-4 text-red-500" />
                          <span className="text-red-500">Cancelled</span>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <span className="col-span-1 md:col-span-2 text-sm font-semibold">Product</span>
                  <Select>
                    <SelectTrigger className="w-full cursor-pointer col-span-1 md:col-span-3">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="nextjs" className="cursor-pointer">
                          NextJS
                        </SelectItem>
                        <SelectItem value="react" className="cursor-pointer">
                          React
                        </SelectItem>
                        <SelectItem value="system" className="cursor-pointer">
                          Vue
                        </SelectItem>
                        <SelectItem value="svelte" className="cursor-pointer">
                          Svelte
                        </SelectItem>
                        <SelectItem value="solid" className="cursor-pointer">
                          Solid
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <span className="col-span-1 md:col-span-2 text-sm font-semibold">ETA</span>
                  <Popover>
                    <PopoverTrigger asChild className="w-full">
                      <Button
                        variant="outline"
                        data-empty={!date}
                        className="data-[empty=true]:text-muted-foreground w-full col-span-1 md:col-span-3 justify-between text-left font-normal"
                      >
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        defaultMonth={date}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </Card>
            <Card className="group overflow-hidden px-6 pt-6 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-start items-center gap-2">
                  <Shield className="text-primary size-5" />
                  <h3 className="text-foreground text-lg font-semibold">Post moderation</h3>
                </div>
                <p className="text-muted-foreground">
                  Moderate you posts before they go public and get rid of spam
                </p>
              </div>

              <div className="w-full h-full items-center justify-center flex flex-col gap-2 p-4 md:p-6 lg:p-8 bg-background rounded-md">
                <Button className="cursor-pointer w-full">
                  <CircleCheck className="size-4" />
                  Approve
                </Button>
                <Button variant="destructive" className="cursor-pointer w-full">
                  <CircleX className="size-4" />
                  Reject
                </Button>
              </div>
            </Card>
            <Card className="group overflow-hidden px-6 pt-6 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-start items-center gap-2">
                  <Merge className="text-primary size-5" />
                  <h3 className="text-foreground text-lg font-semibold">Posts merge</h3>
                </div>
                <p className="text-muted-foreground">
                  Use merging to get rid of posts duplicates and keep your boards clean
                </p>
              </div>

              <div className="w-full flex flex-col gap-2 p-4 md:p-6 lg:p-8 bg-background rounded-md">
                <Card className="hover:scale-105 transition-all duration-300 p-1 gap-2">
                  <Button variant="ghost" className="cursor-pointer">
                    <Merge className="size-4" />
                    Merge other to this
                  </Button>
                  <Button variant="ghost" className="cursor-pointer">
                    <GitMerge className="size-4" />
                    Merge this to other
                  </Button>
                </Card>
              </div>
            </Card>
            <Card className="group col-span-full md:col-span-2 overflow-hidden px-6 pt-6 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-start items-center gap-2">
                  <Hand className="text-primary size-5" />
                  <h3 className="text-foreground text-lg font-semibold">Collaboration</h3>
                </div>
                <p className="text-muted-foreground">
                  Use comment section so stay in touch with your users and your team
                </p>
              </div>

              <div className="w-full p-4 md:p-6 lg:p-8 bg-background rounded-md">
                <div className="border-1 rounded-md w-full">
                  <div className="p-1 w-full border-b-1 overflow-x-auto">
                    <div className="flex gap-2 px-4 mx-auto w-fit">
                      <Select value="paragraph">
                        <SelectTrigger className="w-full max-w-40">
                          <SelectValue placeholder="Select a format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="paragraph">
                              <AlignLeft />
                              <span>Paragraph</span>
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <ButtonGroup>
                        <Button variant="outline" size="icon">
                          <AlignCenter />
                        </Button>
                        <Button variant="outline" size="icon">
                          <AlignJustify />
                        </Button>
                        <Button variant="outline" size="icon">
                          <AlignRight />
                        </Button>
                        <Button variant="outline" size="icon">
                          <AlignLeft />
                        </Button>
                      </ButtonGroup>
                      <Select value="insert">
                        <SelectTrigger className="w-full max-w-40">
                          <SelectValue placeholder="Select an action" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="insert">
                              <Plus />
                              <span>Insert</span>
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="p-2 min-h-24">
                    <p className="text-sm text-foreground">
                      {typedText}
                      <span className="inline-block w-0.5 h-4 bg-foreground ml-0.5 animate-pulse"></span>
                    </p>
                  </div>

                  <div className="w-full p-2 flex justify-end">
                    <Button>Comment</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
