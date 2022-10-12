"use strict";
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    (_a = document.getElementById('submit')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        //FELHASZNÁLÓNÉV
        let felhnev = document.getElementById('username').value;
        let jofelhnev = false;
        let format = /[&=_'-+,<>]/;
        if (format.test(felhnev)) {
            console.log("Speciális karaktert tartalmaz!");
        }
        else if (!(felhnev.length <= 30 && felhnev.length >= 6)) {
            console.log("Rövid/hosszú!");
        }
        else if (felhnev.includes("..")) {
            console.log("..-ot tartalmaz");
        }
        else {
            console.log("Jó felhasználó név!");
            jofelhnev = true;
        }
        //EMAILCÍM
        let emailcim = document.getElementById('email').value;
        //JELSZó
        let jelszo = document.getElementById('password').value;
    });
});
