# FlashThemes for Linux
## DISCLAIMER
### We are NOT affiliated with the FlashThemes project. This is a fan-made project, and not official. I haven't infected my OWN repo, but still take caution.
## Security Warning
ONLY use this browser for FlashThemes. Going on any other websites can cause your device and browser to be exploited.
Also, do not share your setup with other people, unless all sensitive data has been cleared from the profile. It is best to share this repo with them instead.
## How to begin
- Open a terminal
- Install the following dependencies with your package manager: `git git-lfs`
- Run `git lfs install`
- Run `git pull https://github.com/fidgetsetc/flashthemes-linux`
- Run `cd flashthemes-linux`
- Run either `./start_v87.sh` or `./start_v75.sh`.
- Check your terminal for instructions!
## What's the difference between v75 and v87?
v75 supports Flash entirely, you have to enable Flash manually, but it needs much less effort. It uses a newer profile, so you do get an error message, but it should work.
v87 is newer, but Flash support is messy. But, the profile is built for it.
## Which version should I pick?
For the least effort, pick v75. It's the better one to choose. v87 was the version used for internal testing, but is not recommended. v87 is there if you absolutely need a newer browser for whatever reason, but v75 does the job better. v87 doesn't need that much effort but overall just isn't ideal.
## Known issues
- v75 appears to have major graphical issues on GNOME 48.7, and graphical issues may occur on other GNOME versions. We cannot fix this. This was in a VM, graphical issues may be different.
## Will there be more versions?
Possibly. Older versions may need me to run older Debian versions in a VM, but if you want to do some testing, absolutely, go for it, I might merge it.
## Do I need to do much?
Not really, the profile has been pre-configured, and FlashThemes has been set to start automatically.
## Why does this exist?
It's for people who use Linux, and want FlashThemes! It's much easier to setup!
## Do I need to include my own Chromium versions?
Nope. They're included. It uses tar.gz variants of ungoogled-chromium.
## I have a new DE/WM. Will it still work?
This has been tested on KDE Plasma 6.3.6 with Wayland, so it will likely work, however when resizing the window you may see minor graphical glitches that shouldn't affect much.
## What have you tested this on?
It has been tested on Debian 13.7 Trixie, running KDE Plasma.
## What has been used in the making of this?
- Adobe Flash Player (Pepper/PPAPI) so
- ungoogled-chromium 87 Linux tar.gz
- ungoogled-chromium 75 Linux tar.gz
## What's with the sandbox? Why is there no sandbox?
There is no sandbox, because with the sandbox, absolutely NO pages load. NONE. Just ignore the warning!
