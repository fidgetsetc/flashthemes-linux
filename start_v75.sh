echo "You may see a profile error. You can safely ignore it."
echo "How to allow Flash:"
echo "Flash shall already be allowed."
echo "To start it, just scroll down and click the Click to enable Flash Player box."
echo "Now it should work!"
echo "-----------------------------"
echo "Tested on Debian 13 Trixie. If it doesn't work, you may not be able to use this."
./data/web75/chrome-wrapper --no-sandbox --user-data-dir="./data/webprofile" --ppapi-flash-path="./data/webflash/libpepflashplayer.so" --ppapi-flash-version=32.0.0.371