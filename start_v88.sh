echo "How to allow Flash:"
echo "Scroll down and click Click to enable Adobe Flash Player"
echo "Click Allow"
echo "Click Run this time"
echo "Now it should work!"
echo "If you don't want to deal with the constant trouble, try start_v75.sh, using an older version without the limitation."
echo "-----------------------------"
echo "Tested on Debian 13 Trixie. If it doesn't work, you may not be able to use this."
./data/web/chrome-wrapper --no-sandbox --user-data-dir="./data/webprofile" --ppapi-flash-path="./data/webflash/libpepflashplayer.so" --ppapi-flash-version=32.0.0.371