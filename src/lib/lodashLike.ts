export function some<T>(array: T[], fn: (item: T) => boolean): boolean {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < array.length; i += 1) {
      if (fn(array[i])) {
        return true;
      }
    }
    return false;
}

export function shuffle<T>(array: T[]): T[] {
    const seed = array.map(() => Math.random());
    const rank = [...seed].sort();
    return seed.map(r => array[rank.indexOf(r)]);
}
