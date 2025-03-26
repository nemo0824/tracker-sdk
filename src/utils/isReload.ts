export function isReload() {
  const [navEntry] = performance.getEntriesByType('navigation');
  if (
    navEntry &&
    'type' in navEntry &&
    (navEntry as PerformanceNavigationTiming).type === 'reload'
  ) {
    return true;
  }
  if ('navigation' in performance && 'type' in performance.navigation) {
    return performance.navigation.type === 1;
  }
  return false;
}
