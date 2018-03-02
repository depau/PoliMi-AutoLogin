// ==UserScript==
// @id              PoliMiAutoLogin
// @name            PoliMi AutoLogin
// @namespace       https://github.com/Depaulicious/PoliMi-AutoLogin
// @version         0.1
// @author          Davide Depau <davide@depau.eu>
// @description     Automatically login to Politecnico di Milano's online services when autocomplete is on
// @domain          aunicalogin.polimi.it
// @match           http://aunicalogin.polimi.it/aunicalogin/aunicalogin.jsp*
// @match           https://aunicalogin.polimi.it/aunicalogin/aunicalogin.jsp*
// @grant           GM.getValue
// @grant           GM.setValue
// @updateVersion   1
// @updateURL       https://raw.githubusercontent.com/Depaulicious/PoliMi-AutoLogin/master/polimi-autologin.user.js
// @downloadURL     https://raw.githubusercontent.com/Depaulicious/PoliMi-AutoLogin/master/polimi-autologin.user.js
// @priority        9001
// @require         https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js
// ==/UserScript==

window.poliFindSubmit = function() {
    var login = $("input#login");
    var passwd = $("input#password");
    var restaconn = $("input#RESTA_CONNESSO");
    var submit = $("button[name='evn_conferma'][type='submit']");

    restaconn.prop('checked', true);

    if (submit.length > 0 && login.val().length > 0 && passwd.val().length > 0)
        submit.click();
};


(function() {
    $(document).ready(function () {
        setTimeout(window.poliFindSubmit, 200);
    });
})();
