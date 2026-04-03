'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import {
  BookOpen,
  HelpCircle,
  PlayCircle,
  Users,
  Briefcase,
  Heart,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

const learnItems = [
  { title: 'Blog', description: 'Get a deep dive into our updates', href: '/learn/blog', icon: BookOpen },
  // { title: 'Help Center', description: 'Explore our support and resources', href: '/learn/help-center', icon: HelpCircle },
  // { title: 'Video Tutorials', description: 'Learn how Plaude works', href: '/learn/video-tutorials', icon: PlayCircle },
];

const companyItems = [
  { title: 'About Us', description: 'Learn more about the team', href: '/company/about', icon: Users },
  // { title: 'Careers', description: 'Become one of us', href: '/company/careers', icon: Briefcase },
  // { title: 'The Plaude Circle', description: 'Join our community', href: '/company/plaude-circle', icon: Heart },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [learnOpen, setLearnOpen] = React.useState(false);
  const [companyOpen, setCompanyOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full max-w-5xl md:rounded-2xl md:transition-all md:ease-out',
        {
          'glass atmospheric-shadow md:top-4 md:max-w-4xl':
            scrolled && !open,
          'bg-white/90': open,
          'bg-transparent': !scrolled && !open,
        },
      )}
    >
      <nav
        className={cn(
          'flex h-16 w-full items-center justify-between px-4 md:h-14 md:transition-all md:ease-out',
          {
            'md:px-4': scrolled,
          },
        )}
      >
        <Link href="/" className="shrink-0">
          <Image
            src="/brand/logo-light.svg"
            alt="Plaude"
            width={100}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className={buttonVariants({ variant: 'ghost', className: 'text-on-background/80 hover:text-on-background hover:bg-surface-lowest/60' })}
          >
            Product
          </Link>

          {/* Learn dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLearnOpen(true)}
            onMouseLeave={() => setLearnOpen(false)}
          >
            <button
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'text-on-background/80 hover:text-on-background hover:bg-surface-lowest/60 gap-1'
              )}
            >
              Learn <ChevronDown className={cn('size-3.5 transition-transform', learnOpen && 'rotate-180')} />
            </button>
            {learnOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="w-[340px] rounded-2xl glass atmospheric-shadow-lg p-2">
                  {learnItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-lowest"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-lowest group-hover:bg-surface-low transition-colors">
                        <item.icon className="size-4 text-primary-brand" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-on-background flex items-center gap-1">
                          {item.title}
                          <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-brand" />
                        </div>
                        <p className="text-xs text-on-background/50 mt-0.5">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Company dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'text-on-background/80 hover:text-on-background hover:bg-surface-lowest/60 gap-1'
              )}
            >
              Company <ChevronDown className={cn('size-3.5 transition-transform', companyOpen && 'rotate-180')} />
            </button>
            {companyOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="w-[340px] rounded-2xl glass atmospheric-shadow-lg p-2">
                  {companyItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-lowest"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-lowest group-hover:bg-surface-low transition-colors">
                        <item.icon className="size-4 text-primary-brand" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-on-background flex items-center gap-1">
                          {item.title}
                          <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-brand" />
                        </div>
                        <p className="text-xs text-on-background/50 mt-0.5">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/login"
            className={buttonVariants({ variant: 'ghost', className: 'text-on-background/80 hover:text-on-background hover:bg-surface-lowest/60' })}
          >
            Sign In
          </Link>

          <Link
            href="/get-started"
            className="rounded-full bg-primary-brand text-on-primary hover:bg-primary-container ml-1 h-9 px-5 text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary-brand/20 inline-flex items-center justify-center"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setOpen(!open)}
          className="md:hidden text-on-background"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden md:hidden bg-white/95 backdrop-blur-xl',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-6',
          )}
        >
          <div className="grid gap-y-2">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={buttonVariants({ variant: 'ghost', className: 'justify-start text-on-background' })}
            >
              Product
            </Link>

            <p className="mt-4 mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-on-background/40 px-4">
              Learn
            </p>
            {learnItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-on-background/70 hover:bg-surface-lowest hover:text-on-background transition-colors"
              >
                <item.icon className="size-4 text-primary-brand" />
                {item.title}
              </Link>
            ))}

            <p className="mt-4 mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-on-background/40 px-4">
              Company
            </p>
            {companyItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-on-background/70 hover:bg-surface-lowest hover:text-on-background transition-colors"
              >
                <item.icon className="size-4 text-primary-brand" />
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className={buttonVariants({ variant: 'outline', className: 'w-full rounded-full h-11 text-on-background' })}
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              onClick={() => setOpen(false)}
              className={buttonVariants({ className: 'w-full rounded-full h-11 bg-primary-brand text-on-primary hover:bg-primary-container' })}
            >
              Get Started — It&apos;s Free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
