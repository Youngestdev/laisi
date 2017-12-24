#!/usr/bin/env node

const argv = require('yargs')
.usage('Usage: $0 option message \n e.g $0 -s message')
.alias('s', 'message')
.nargs('f', 1)
.describe('s', 'Say message')
.demandOption(['s'])
.help('h')
.alias('h', 'help')
.epilog('Copyright Abdul 2017')
.argv
console.log(argv.s);