import chalk from "chalk";
import os from "node:os";

function cpuUsage(oldcpu, newcpu) {
  const oldTimes = oldcpu.times;
  const newTimes = newcpu.times;
  const idleDiff = newTimes.idle - oldTimes.idle;

  const totalOld = Object.values(oldTimes).reduce((a, b) => a + b, 0);
  const totalNew = Object.values(newTimes).reduce((a, b) => a + b, 0);
  const total = totalNew - totalOld;

  const usage = ((total - idleDiff) / total) * 100;
  return usage.toFixed(2) + "%";
}

function ramUsage() {
  const total = os.totalmem() / (1024 * 1024 * 1024);
  const free = os.freemem() / (1024 * 1024 * 1024);
  const usage = ((total - free) / total) * 100;
  console.log((total - free).toFixed(2), "GB /", total.toFixed(2), "GB");
  console.log(usage.toFixed(2) + "%");
  // return usage.toFixed(2) + "%";
}

console.clear();
function Monitor() {
  const oldCpus = os.cpus();

  setTimeout(() => {
    const newCpus = os.cpus();

    const cpu = oldCpus.map((cpu, index) => {
      return {
        core: index + 1,
        usage: cpuUsage(oldCpus[index], newCpus[index]),
      };
    });
    console.clear();
    console.log(chalk.bgRed("========CPU MONITOR========"));
    console.table(cpu);

    console.log(chalk.bgRed("========RAM MONITOR========"));
    ramUsage();
  }, 1000);
}

const interval = setInterval(() => {
  Monitor();
}, 1000);
export default interval;
