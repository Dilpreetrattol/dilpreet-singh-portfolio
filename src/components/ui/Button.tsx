import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Text is `bg` (the page-background token) rather than a fixed white/black
  // — accent is light in dark mode and darkened in light mode, so the page
  // bg color is the one value that stays legible on it in both themes.
  primary: "bg-accent text-bg hover:opacity-90",
  secondary: "border border-border text-ink hover:border-border-lit hover:bg-surface-2",
  ghost: "text-ink-dim hover:text-ink",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type PlainButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = LinkButtonProps | PlainButtonProps;

/** Shared button styling. Renders an <a> when `href` is passed, a <button> otherwise. */
export function Button({ variant = "secondary", className = "", children, ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
