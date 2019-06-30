# lolswap

LolSwap is a program to change your summoner icon via the command line.

Usage: 
```bash
$ lolswap <icon_id>
```

You can get summoner icon ids from https://lolnames.gg/en/statistics/icons/

Note that lolswap only works with icons that you own.

# Get the binary

LolSwap ships as a .exe file (which is why you can run it in the terminal)

## Download from releases

There is an executable binary in the releases tab, but building it yourself is way cooler!

I'm sure everybody is suspicious about random .exe's from random people, which is why I suggest you build the binary from source yourself. The instructions are listed below

## Build it yourself

1. Download NodeJS
1. Clone repository `git clone https://github.com/supergrecko/lolswap`
1. Move into directory `cd lolswap`
1. Run `npm install`
1. Install Nexe `npm i -g nexe`
1. Install TypeScript `npm i -g typescript`
1. Compile TypeScript `tsc`
1. Compile into binary `nexe dist/index.js`

You should now have a binary named `lolswap.exe`

## Legal Stuff

lolswap was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.
