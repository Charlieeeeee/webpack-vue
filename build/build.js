const shell = require('shelljs');
const checkVersion = require('./check-version');
const chalk = require('chalk');
const ora = require('ora');
checkVersion();

console.log(
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
)

const spinner = ora('building for production...');
spinner.start();

shell.exec(`npx webpack --env ${process.argv[2]} --config ./build/webpack.prod.js`,{async:false},function(){
    spinner.stop();
    console.log(chalk.green('compiled successfully!'));
})
