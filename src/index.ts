

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('submit')?.addEventListener('click', () => {
        (document.getElementById("felhuzenet")as HTMLElement).textContent= "";
        (document.getElementById("emailuzenet")as HTMLElement).textContent= "";
        (document.getElementById("emailujrauzenet")as HTMLElement).textContent= "";
        (document.getElementById("jelszouzenet")as HTMLElement).textContent= "";
        (document.getElementById("jelszoujrauzenet")as HTMLElement).textContent= "";

        //FELHASZNÁLÓNÉV
        let felhnev = (document.getElementById('username') as HTMLInputElement).value;
        let jofelhnev = false;

        let format = /[&=_'-+,<>]/;
        if(format.test(felhnev)){
            (document.getElementById("felhuzenet")as HTMLElement).textContent= "Speciális karaktert tartalmaz!";
        }else if(!(felhnev.length <= 30 && felhnev.length >=6)){
            (document.getElementById("felhuzenet")as HTMLElement).textContent= "Felhasználó név csak 30 és 6 közötti karakter lehet!";
        } else if(felhnev.includes("..")){
            (document.getElementById("felhuzenet")as HTMLElement).textContent= "A jelszó nem tartalmazhat két (.) karaktert egymás mellett";
        } else{
            jofelhnev = true;
        }        

        //EMAILCÍM
        let emailcim = (document.getElementById('email') as HTMLInputElement).value;
        let emailcimujra = (document.getElementById('re-email') as HTMLInputElement).value;
        let joemail = false;

        if(validateEmail()){
            if(emailcim == emailcimujra){
                joemail = true;
            }else{
                (document.getElementById("emailuzenet")as HTMLElement).textContent= "E-mail címek nem egyeznek!";
            }
        }else{
            (document.getElementById("emailuzenet")as HTMLElement).textContent= "Nem megfelelő formátum!";
        }

        //JELSZó
        let jelszo = (document.getElementById('password') as HTMLInputElement).value;
        let jelszo2 = (document.getElementById('repassword') as HTMLInputElement).value;
        let jojelszo = false;

        format = /^[A-Za-z0-9_-]\w{5,9}$/;
        if(format.test(jelszo)){
            if(jelszo == jelszo2){
                jojelszo = true;
            }else{
                (document.getElementById("jelszoujrauzenet")as HTMLElement).textContent= "Nem egyeznek meg a jelszavak!";
            }
        }else{
            (document.getElementById("jelszouzenet")as HTMLElement).textContent= "Nem megfelelő formátum vagy túl hosszú/rövid!";
        }

        //Ellenőrzés
        if(jofelhnev && joemail && jojelszo){
            window.alert("Sikeres regisztrálás");
        }

    })
})

const validateEmail = () => {
    return String((document.getElementById('email') as HTMLInputElement).value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};