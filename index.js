#!/usr/bin/env node
const welcome = require("./utils/init");
const { bio } = require("./utils/data");
const { socials } = require("./utils/data");
welcome();
console.log(bio);
console.log(socials);
