import { cn } from '../../lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div
      className={cn(
        'border-2 border-muted-foreground/20 border-t-muted-foreground/60 rounded-full animate-spin',
        sizeClasses[size],
        className
      )}
    />
  );
}

interface LoadingStateProps {
  children: React.ReactNode;
  className?: string;
}

export function LoadingState({ children, className }: LoadingStateProps) {
  return (
    <div className={cn('flex items-center justify-center p-8', className)}>
      <div className="flex flex-col items-center gap-3">
        <LoadingSpinner size="lg" />
        <div className="text-muted-foreground text-sm">{children}</div>
      </div>
    </div>
  );
}