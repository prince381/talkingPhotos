import cluster from 'cluster';
import os from 'os';

const cpuCount = os.cpus().length;

console.log('The total number of CPUs is', cpuCount);
console.log(`Master process with id=${process.pid} is running...`);

cluster.setupPrimary({
    exec: 'dist/server.js',
});

for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
}

cluster.on('online', (worker) => {
    console.log(`Worker process with id=${worker.process.pid} is running...`);
});

cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process with id=${worker.process.pid} exited with code=${code} and signal=${signal}`);
    console.log('Starting a new worker...');
    cluster.fork();
});
