import { user } from "./module.js";
console.log(user);
console.log(process.argv); // gives the path of the binary of node and the path of the file that we are executing
console.log(process.execPath); // gives the path of the binary of node
console.log(process.cwd()); // gives the current working directory
console.log(process.pid); // gives the process id
console.log(process.version); // gives the version of node
console.log(process.env); // gives the environment variables
console.log(process.platform); // gives the platform
console.log(process.arch); // gives the architecture
console.log(process.memoryUsage()); // gives the memory usage
console.log(process.env.FPS_BROWSER_APP_PROFILE_STRING); // gives

// gives the time in hours
let hours = new Date().getHours();
console.log(hours);
console.log(Date.now()); // gives the time in milliseconds
console.log(new Date()); // give the time in date object
console.log(new Date().getDate()); // give the time in date object
console.log(new Date().getMinutes());

// mini greeting app
hours = 13;
if (hours >= 5 && hours < 12) {
  console.log("GOOD MORNING INDIA");
} else if (hours >= 12 && hours < 16) {
  console.log("GOOD AFTERNOON INDIA");
} else if (hours >= 16 && hours < 19) {
  console.log("GOOD EVENING INDIA");
} else {
  console.log("GOOD NIGHT INDIA");
}

// switch doesnt support conditionals it just works with straight value
// const sayGreet = () => {
//   switch (hours) {
//     case hours < 12 || hours > 0:
//       return console.log("Good Morning");
//     case hours > 12 || hours < 0:
//       return console.log("Good Night");
//     default:
//       return console.log("Invalid time");
//   }
// };

// sayGreet();
import module1 from "./module1.js";
console.log(module1);
