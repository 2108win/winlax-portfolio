import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-size animate-bg-position bg-gradient-to-r from-orange-400 from-30% via-yellow-700 via-50% to-foreground to-80% bg-[length:200%_auto] bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
}
