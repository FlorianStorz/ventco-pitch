import { cn } from "../lib/utils";

export function Card({ children, className }: any) {
  return (
    <div
      className={cn(
        "flex border flex-col items-center justify-center border-border bg-[#121212] rounded-xl px-6 pt-8 pb-6 space-y-4 hover:border-[#62A6EA] transition duration-300 ease-in-out",
        className
      )}
    >
      {children}
    </div>
  );
}
