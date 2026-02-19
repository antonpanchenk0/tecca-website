'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, HelpCircle, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <div className="bg-background relative py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Get in touch</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg md:text-xl">
            We&apos;re here to help and answer any question you might have. We look forward to
            hearing from you!
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-12 md:mt-16 lg:flex-row lg:gap-16">
          {/* Left: Contact info cards */}
          <div className="flex flex-col gap-6 lg:w-2/5 lg:shrink-0">
            <div className="bg-card group flex items-start gap-4 rounded-xl border p-6 transition-colors hover:border-primary/40">
              <div className="text-muted-foreground group-hover:text-primary flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted transition-colors">
                <Mail className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-foreground text-base font-medium">General communication</span>
                <span className="text-muted-foreground mt-1 text-sm">
                  Get in touch with us regarding general inquiries, product information, request a
                  demo or just show us some love &lt;3
                </span>
                <a
                  href="mailto:bonjour@tecca.io"
                  className="text-primary mt-2 text-sm font-semibold hover:underline"
                >
                  bonjour@tecca.io
                </a>
              </div>
            </div>

            <div className="bg-card group flex items-start gap-4 rounded-xl border p-6 transition-colors hover:border-primary/40">
              <div className="text-muted-foreground group-hover:text-primary flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted transition-colors">
                <HelpCircle className="size-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-foreground text-base font-medium">Help & support</span>
                <span className="text-muted-foreground mt-1 text-sm">
                  Email us to report problems, leave feedback or get support from our team
                </span>
                <a
                  href="mailto:support@tecca.io"
                  className="text-primary mt-2 text-sm font-semibold hover:underline"
                >
                  support@tecca.io
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:w-3/5">
            <div className="bg-card rounded-xl border p-6 shadow-sm md:p-8">
              <h3 className="text-foreground text-lg font-semibold">Send us a message</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-foreground text-sm font-medium">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-background text-foreground placeholder:text-muted-foreground border-input focus:ring-ring/50 focus:border-ring h-10 w-full rounded-md border px-4 text-sm outline-none transition-colors focus:ring-2"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-foreground text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-background text-foreground placeholder:text-muted-foreground border-input focus:ring-ring/50 focus:border-ring h-10 w-full rounded-md border px-4 text-sm outline-none transition-colors focus:ring-2"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-foreground text-sm font-medium">
                    How can we help? <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your inquiry..."
                    className="bg-background text-foreground placeholder:text-muted-foreground border-input focus:ring-ring/50 focus:border-ring w-full resize-none rounded-md border px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-2 rounded-md bg-green-500/10 px-4 py-3 text-sm text-green-400">
                    <CheckCircle className="size-4 shrink-0" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    <AlertCircle className="size-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
