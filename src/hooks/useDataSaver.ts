// The Network Information API is not in TypeScript's DOM typings and is missing in some browsers.
interface NavigatorWithConnection extends Navigator {
  connection?: { saveData?: boolean };
}

/** True when the visitor asked the browser to reduce data usage. */
export function useDataSaver(): boolean {
  return (navigator as NavigatorWithConnection).connection?.saveData === true;
}
