// This function was taken from the following link:
// https://stackoverflow.com/a/62963963

export function supportsWorkerType() {
  let supports = false;

  const tester = {
    get type() { supports = true; } // it's been called, it's supported
  };

  try {
    // We use "blob://" as url to avoid an useless network request.
    // This will either throw in Chrome
    // either fire an error event in Firefox
    // which is perfect since
    // we don't need the worker to actually start,
    // checking for the type of the script is done before trying to load it.
    const worker = new Worker('blob://', tester).terminate();
  } finally {
    return supports;
  }
}