(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{var e;null===(e=document.getElementById("submit"))||void 0===e||e.addEventListener("click",(()=>{let e=document.getElementById("username").value,t=!1;/[&=_'-+,<>]/.test(e)?console.log("Speciális karaktert tartalmaz!"):e.length<=30&&e.length>=6?e.includes("..")?console.log("..-ot tartalmaz"):console.log("Jó felhasználó név!"):console.log("Rövid/hosszú!"),document.getElementById("email").value,document.getElementById("password").value}))}))})();