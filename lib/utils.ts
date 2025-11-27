import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// GitHub Pages için basePath ekleyen helper
const basePath = process.env.NODE_ENV === 'production' ? '/myportfolionextjs' : '';

export function getAssetPath(path: string): string {
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return path;
}
