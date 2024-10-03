import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToSection = (e: any, name: any) => {
  e.preventDefault();
  const contactSection = document.getElementById(name);
  contactSection?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};