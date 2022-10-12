

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('submit')?.addEventListener('click', () => {

        //FELHASZNÁLÓNÉV
        let felhnev = (document.getElementById('username') as HTMLInputElement).value;
        let jofelhnev = false;

        let format = /[&=_'-+,<>]/;
        if(format.test(felhnev)){
            console.log("Speciális karaktert tartalmaz!");
        }else if(!(felhnev.length <= 30 && felhnev.length >=6)){
            console.log("Rövid/hosszú!");
        } else if(felhnev.includes("..")){
            console.log("..-ot tartalmaz");
        } else{
            console.log("Jó felhasználó név!");
            jofelhnev = true;
        }        

        //EMAILCÍM
        let emailcim = (document.getElementById('email') as HTMLInputElement).value;
        let emailcimujra = (document.getElementById('re-email') as HTMLInputElement).value;
        let joemail = false;

        if(validateEmail()){
            if(emailcim == emailcimujra){
                console.log("Jó e-mail cím");
            }else{
                console.log("E-mail címek nem egyeznek!");
            }
        }else{
            console.log("Rossz email");
        }

        //JELSZó
        let jelszo = (document.getElementById('password') as HTMLInputElement).value;


    })
})

const validateEmail = () => {
    return String((document.getElementById('email') as HTMLInputElement).value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};