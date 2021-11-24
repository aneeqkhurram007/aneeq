#!/usr/bin/env node
const welcome = require(`cli-welcome`);
const { name, version, description } = require(`./package.json`);
const chalk = require(`chalk`);
welcome({
  title: `${chalk.hex(`#FADC00`)(` Aneeq Khurram `)}`,
  tagLine: `Mr. React`,
  description: description,
  version: version,
  clear: true,
  bgColor: `FADC00`,
  color: `FFF`,
  bold: true,
});
console.log(`${chalk.green
  .italic(`Self-learned and creative React developer having experience of more than a year in Node JS, 
MERN, and NodeCLI automation.`)}

${chalk.white.inverse(` Connect with me `)}

Github: ${chalk.dim(`https://github.com/aneeqkhurram007`)}
Twitter: ${chalk.dim(`aneeqkhurram007`)}
Instagram: ${chalk.dim(`aneeqkhurram007`)}

`);
