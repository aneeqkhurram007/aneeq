#!/usr/bin/env node
const meow = require("meow");
const welcome = require("./utils/init");
const { bio, socials } = require("./utils/data");

const helperText = `

Usage
    npx aneeqkhurram007 [options]
Options
    bio             Show bio
    --no-bio        Don't show bio
    socials         Show socials
    --no-socials    Don't show socials
Example
    npx aneeqkhurram007 --no-socials

`;
const options = {
  flags: {
    bio: {
      type: "boolean",
      default: true,
    },
    socials: {
      type: "boolean",
      default: true,
    },
  },
};
const cli = meow(helperText, options);
(async () => {
  welcome();
  if (cli.flags.bio) {
    console.log(bio);
  }
  if (cli.flags.socials) {
    console.log(socials);
  }
})();
