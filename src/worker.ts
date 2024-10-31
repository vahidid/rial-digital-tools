importScripts('./lib/wasm_exec.js');
console.log('Worker is running');

// Load the WASM module with Go code.
const go = new Go();
WebAssembly.instantiateStreaming(fetch('./go/wasm.wasm'), go.importObject)
  .then((result) => {
    go.run(result.instance);
    console.log('Worker loaded WASM module');
  })
  .catch((err) => {
    console.error('Worker failed to load WASM module: ', err);
  });

// biome-ignore lint/suspicious/noGlobalAssign: <explanation>
onmessage = ({ data }) => {
  const { action, payload } = data;
  postMessage({
    action: 'log',
    payload: `Worker received message ${action}: ${payload}`,
  });
  switch (action) {
    case 'calculate':
      console.log('calculate exec');
      // const result = calcHarmonic(payload);
      postMessage({ action: 'result', payload: 'response' });
      break;
    default:
      throw `unknown action '${action}'`;
  }
};