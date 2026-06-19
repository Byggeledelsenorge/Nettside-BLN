/** Liten klassenavn-hjelper (filtrerer bort falsy verdier og slar sammen). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
