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
        let emailcimujra = document.getElementById('re-email').value;
        let joemail = false;
        if (validateEmail()) {
            if (emailcim == emailcimujra) {
                console.log("Jó e-mail cím");
            }
            else {
                console.log("E-mail címek nem egyeznek!");
            }
        }
        else {
            console.log("Rossz email");
        }
        //JELSZó
        let jelszo = document.getElementById('password').value;
    });
});
const validateEmail = () => {
    return String(document.getElementById('email').value)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
