export const runOnDOMContentReady = (cb: () => void) => {
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', cb);
  } else {
    cb();
  }
};
