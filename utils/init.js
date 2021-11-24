const welcome = require(`cli-welcome`);
const { version, description } = require(`../package.json`);
const chalk = require(`chalk`);
const init = () =>
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

module.exports = init;
