export function some<T>(array: T[], fn: (item: T) => boolean): boolean {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < array.length; i += 1) {
      if (fn(array[i])) {
        return true;
      }
    }
    return false;
}