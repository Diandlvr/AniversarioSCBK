import { clsx, type ClassValue } from "clsx";

/**
 * Utilidad basica para merge de clases condicionales
 * No importamos tailwind-merge ya que nuestra arquitectura se basa en CSS modules.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Utilidad para devolver los dias de un mes
 */
export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
