# PoliMi-AutoLogin
Userscript to automatically login to Politecnico di Milano online services (autocomplete must be turned on).

[Download/Install `polimi-autologin.user.js`](https://raw.githubusercontent.com/Depaulicious/PoliMi-AutoLogin/master/polimi-autologin.user.js)
(requires [Tampermonkey](https://tampermonkey.net/), [Greasemonkey](https://www.greasespot.net/) or analogous browser extension)

### Install on Chrome without Tampermonkey

1. Right click the link above and click Save Location
2. Go to Menu, More tools, Extensions
3. Find the userscript in your file manager, drag it and drop it on top of the extensions page.
4. Chrome should let you install it as an extension.

If you have issues, install it with Tampermonkey.

## What it does
The script is executed on the "aunicalogin" page: https://aunicalogin.polimi.it/aunicalogin/aunicalogin.jsp
It checks whether the person code and password boxes have been autofilled and, in case they are, it clicks the submit button.

The "stay logged in" checkbox is also checked before logging in.
