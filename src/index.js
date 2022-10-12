"use strict";
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    (_a = document.getElementById('submit')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        document.getElementById("felhuzenet").textContent = "";
        document.getElementById("emailuzenet").textContent = "";
        document.getElementById("emailujrauzenet").textContent = "";
        document.getElementById("jelszouzenet").textContent = "";
        document.getElementById("jelszoujrauzenet").textContent = "";
        //FELHASZNÁLÓNÉV
        let felhnev = document.getElementById('username').value;
        let jofelhnev = false;
        let format = /[&=_'-+,<>]/;
        if (format.test(felhnev)) {
            document.getElementById("felhuzenet").textContent = "Speciális karaktert tartalmaz!";
            document.getElementById("felhuzenet").style.color = "darkgreen";
        }
        else if (!(felhnev.length <= 30 && felhnev.length >= 6)) {
            document.getElementById("felhuzenet").textContent = "Felhasználó név csak 30 és 6 közötti karakter lehet!";
            document.getElementById("felhuzenet").style.color = "darkgreen";
        }
        else if (felhnev.includes("..")) {
            document.getElementById("felhuzenet").textContent = "A jelszó nem tartalmazhat két (.) karaktert egymás mellett";
            document.getElementById("felhuzenet").style.color = "darkgreen";
        }
        else {
            jofelhnev = true;
        }
        //EMAILCÍM
        let emailcim = document.getElementById('email').value;
        let emailcimujra = document.getElementById('re-email').value;
        let joemail = false;
        if (validateEmail()) {
            if (emailcim == emailcimujra) {
                joemail = true;
            }
            else {
                document.getElementById("emailuzenet").textContent = "E-mail címek nem egyeznek!";
                document.getElementById("emailuzenet").style.color = "darkgreen";
            }
        }
        else {
            document.getElementById("emailuzenet").textContent = "Nem megfelelő formátum!";
            document.getElementById("emailuzenet").style.color = "darkgreen";
        }
        //JELSZó
        let jelszo = document.getElementById('password').value;
        let jelszo2 = document.getElementById('repassword').value;
        let jojelszo = false;
        format = /^[A-Za-z0-9_-]\w{5,9}$/;
        if (format.test(jelszo)) {
            if (jelszo == jelszo2) {
                jojelszo = true;
            }
            else {
                document.getElementById("jelszoujrauzenet").textContent = "Nem egyeznek meg a jelszavak!";
                document.getElementById("jelszoujrauzenet").style.color = "darkgreen";
            }
        }
        else {
            document.getElementById("jelszouzenet").textContent = "Nem megfelelő formátum vagy túl hosszú/rövid!";
            document.getElementById("jelszouzenet").style.color = "darkgreen";
        }
        //Ellenőrzés
        if (jofelhnev && joemail && jojelszo) {
            window.alert("Sikeres regisztrálás");
        }
    });
});
const validateEmail = () => {
    return String(document.getElementById('email').value)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
