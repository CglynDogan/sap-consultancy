import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

export interface CTASectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  buttonVariant?: 'primary' | 'secondary' | 'success';
  centered?: boolean;
  containerQuery?: boolean;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
  buttonVariant = 'primary',
  centered = true,
  containerQuery = false,
  className,
  ...props
}: CTASectionProps) {
  const containerClass = containerQuery ? '@container' : 'w-full';

  return (
    <section
      className={cn(containerClass, 'mt-12', className)}
      {...props}
    >
      <div className={cn(
        'flex flex-col justify-end gap-6 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-10',
        containerQuery ? '@[480px]:gap-8 @[480px]:px-10 @[480px]:py-20' : 'sm:gap-8 sm:py-20'
      )}>
        <div className={cn(
          'flex flex-col gap-2',
          centered && 'text-center'
        )}>
          <h1 className={cn(
            'text-text-primary tracking-light font-bold leading-tight',
            containerQuery
              ? 'text-[32px] @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-4xl'
              : 'text-xl xs:text-2xl sm:text-3xl lg:text-4xl w-full',
            centered && 'mx-auto'
          )}>
            {title}
          </h1>
          <p className={cn(
            'text-text-primary text-base font-normal leading-normal max-w-4xl',
            centered && 'mx-auto'
          )}>
            {description}
          </p>
        </div>
        <div className={cn(
          'flex flex-col sm:flex-row gap-3 sm:gap-4',
          centered && 'justify-center'
        )}>
          <Link href={buttonHref}>
            <Button
              variant={buttonVariant}
              size={containerQuery ? 'md' : 'lg'}
              className={cn(
                containerQuery
                  ? 'h-10 px-4 @[480px]:h-12 @[480px]:px-5 @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]'
                  : 'sm:h-12 sm:px-5 sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em]',
                'grow'
              )}
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}