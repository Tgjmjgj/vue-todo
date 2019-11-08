
// For debug purposes; To see the loader
// Works only in Development mode, config in the '/.env.development' file
export default function throttleIf(condition) {
  return new Promise((resolve) => {
    if (condition && process.env.VUE_APP_THROTTLING) {
      setTimeout(resolve, process.env.VUE_APP_THROTTLING);
    } else {
      resolve();
    }
  });
}
