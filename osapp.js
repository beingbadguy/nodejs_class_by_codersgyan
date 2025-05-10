import os from "node:os";

console.log("CPUS", os.cpus().length);
console.log("TOTAL MEMORY RAM: ", os.totalmem() / (1024 * 1024 * 1024));
console.log("AVAILABLE MEMORY RAM : ", os.freemem() / (1024 * 1024 * 1024));
console.log("System Uptime: ", os.uptime() / (60 * 60));
console.log("Hostname: ", os.hostname());
console.log("Platform: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("User info: ", os.userInfo());
