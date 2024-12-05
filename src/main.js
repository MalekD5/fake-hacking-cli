#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import { Command } from 'commander';
import ora from 'ora';

const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

const program = new Command();

program.name('sweter-hacking');
program.version('1.0.0');

program.command('generate')
    .description('generate a new url project')
    .action(async () => {
        console.clear();
        const x = figlet.textSync('Sweter', { horizontalLayout: 'full', font: 'ANSI Shadow',     horizontalLayout: 'default',
    verticalLayout: 'default', });
        console.log();
        console.log(x);
        console.log();
        const spinner = ora('Generating a new phishing url').start();

        await delay(1500);
        spinner.succeed(chalk.green(' URL generated!'));
        const secondSpinner = ora(' https://sweter.com/coming-soon/535745544552205765627369746520697320636f6d696e6720736f6f6e21').start();
        secondSpinner.info();
        console.log();
        delay(100000);
    });

program.parse(process.argv);