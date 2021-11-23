#!/usr/bin/env node
const welcome = require("cli-welcome");
const { name, version, description } = require("./package.json");
welcome({
  title: name,
  tagLine: "Mr. React",
  description: description,
  version: version,
  clear: true,
  bgColor: "FADC00",
  color: "FFF",
  bold: true,
});
console.log(`

Aneeq Khurram

Self-learned and creative React developer having experience of more than a year in Node JS, 
MERN, and NodeCLI automation.

Connect with me

Github: https://github.com/aneeqkhurram007
Twitter: aneeqkhurram007
Instagram: aneeqkhurram007

`);
