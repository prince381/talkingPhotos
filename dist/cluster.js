"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
const cpuCount = os_1.default.cpus().length;
console.log('The total number of CPUs is', cpuCount);
console.log(`Master process with id=${process.pid} is running...`);
cluster_1.default.setupPrimary({
    exec: 'dist/server.js',
});
for (let i = 0; i < cpuCount; i++) {
    cluster_1.default.fork();
}
cluster_1.default.on('online', (worker) => {
    console.log(`Worker process with id=${worker.process.pid} is running...`);
});
cluster_1.default.on('exit', (worker, code, signal) => {
    console.log(`Worker process with id=${worker.process.pid} exited with code=${code} and signal=${signal}`);
    console.log('Starting a new worker...');
    cluster_1.default.fork();
});
