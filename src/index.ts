export function example(): string {
  const worker = new Worker('worker.ts');
  worker.onmessage = ({ data }) => {
    const { action, payload } = data;
    switch (action) {
      case 'log':
        console.log(`worker.log: ${payload}`);
        break;
      case 'result':
        console.log('RESULT', payload);
        break;
      default:
        console.error(`Unknown action: ${action}`);
    }
  };

  return 'hello world';
}
