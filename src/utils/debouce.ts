export function debounce(callback = () => {}, delay = 300) {
  setTimeout(() => {
    callback();
  }, delay);
}
