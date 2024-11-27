import { clsx } from "clsx"
import { twMerge } from "tailwindcss"

export function cn(...inputs) {
    return twMerge(clsx(...inputs))
}
