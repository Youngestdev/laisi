#!/usr/bin/env node

const argv = require('yargs')
    .usage('Usage: $0 option message \n e.g $0 -s message')
    .alias('-s', 'Say message')
    .nargs('s', 1)
    .describe('s', 'Argument that takes message to be echoed.')
    .demandOption(['s'])
    .help('h')
    .epilog('Copyright Abdul 2017')
    .argv;

console.log(argv.s);