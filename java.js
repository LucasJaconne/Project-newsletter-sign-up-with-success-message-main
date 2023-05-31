

function validarinput() {
    let emailInput = document.querySelector('#email_text');
    let email = emailInput.value;
    
    let usuario = email.substring(0, email.indexOf("@"));
    let dominio = email.substring(email.indexOf("@") + 1);
  
    if (
      usuario.length >= 1 &&
      dominio.length >= 3 &&
      usuario.search("@") === -1 &&
      dominio.search("@") === -1 &&
      dominio.search(".") !== -1 &&
      dominio.indexOf(".") >= 1 &&
      dominio.lastIndexOf(".") < dominio.length - 1
    ) {
        let con1 = document.querySelector('#sec1')
        let con2 = document.querySelector('#sec2')
        con1.style.display = 'none'
        con2.style.display = 'block'
        let p_con2 = document.querySelector('#text2_sec2')
        p_con2.innerHTML = `A confirmation email has been sent to <strong>${ email}</strong>. Please open it and click the button inside to confirm your subscription.`
    } else {
      let invalido = document.querySelector('#email1')
      

      invalido.innerHTML = `Valid email required`
      emailInput.style.backgroundColor = '#FDE9E7'
      emailInput.style.color = '#ff6759'
      emailInput.style.borderColor = 'red'
    }
  }
   


