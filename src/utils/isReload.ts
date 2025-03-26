export function isReload() {
  const [navEntry] = performance.getEntriesByType('navigation');
  if (navEntry && (navEntry as PerformanceNavigationTiming).type === 'reload') {
    return true;
  }
  return performance.navigation.type === 1;
}
