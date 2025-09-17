import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-bold tracking-[0.015em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-hover focus-visible:ring-primary',
      secondary: 'bg-secondary text-white hover:bg-secondary-hover focus-visible:ring-secondary',
      success: 'bg-success text-white hover:bg-success-hover focus-visible:ring-success',
      outline: 'border border-surface-border bg-transparent text-text-primary hover:bg-surface-muted',
      ghost: 'bg-surface-muted text-text-primary hover:bg-surface-border',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs min-w-[70px] max-w-[200px]',
      md: 'h-10 px-4 text-sm min-w-[84px] max-w-[480px]',
      lg: 'h-12 px-5 text-base min-w-[100px] max-w-[480px]',
    };

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          isLoading && 'cursor-not-allowed',
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Loading...
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;