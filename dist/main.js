(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{var t;null===(t=document.getElementById("submit"))||void 0===t||t.addEventListener("click",(()=>{document.getElementById("felhuzenet").textContent="",document.getElementById("emailuzenet").textContent="",document.getElementById("emailujrauzenet").textContent="",document.getElementById("jelszouzenet").textContent="",document.getElementById("jelszoujrauzenet").textContent="";let t=document.getElementById("username").value,n=!1,l=/[&=_'-+,<>]/;l.test(t)?document.getElementById("felhuzenet").textContent="Speciális karaktert tartalmaz!":t.length<=30&&t.length>=6?t.includes("..")?document.getElementById("felhuzenet").textContent="A jelszó nem tartalmazhat két (.) karaktert egymás mellett":n=!0:document.getElementById("felhuzenet").textContent="Felhasználó név csak 30 és 6 közötti karakter lehet!";let m=document.getElementById("email").value,d=document.getElementById("re-email").value,a=!1;e()?m==d?a=!0:document.getElementById("emailuzenet").textContent="E-mail címek nem egyeznek!":document.getElementById("emailuzenet").textContent="Nem megfelelő formátum!";let o=document.getElementById("password").value,u=document.getElementById("repassword").value,s=!1;l=/^[A-Za-z0-9_-]\w{5,9}$/,l.test(o)?o==u?s=!0:document.getElementById("jelszoujrauzenet").textContent="Nem egyeznek meg a jelszavak!":document.getElementById("jelszouzenet").textContent="Nem megfelelő formátum vagy túl hosszú/rövid!",n&&a&&s&&window.alert("Sikeres regisztrálás")}))}));const e=()=>String(document.getElementById("email").value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)})();