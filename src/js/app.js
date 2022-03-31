if (module.hot) {
  module.hot.accept();
}

const btnHero = document.getElementById('heroButton');
const btnCta = document.getElementById('ctaButton');

document.getElementById('form-hero')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   let form = document.getElementById('form-hero');
   let name = document.formHero.name.value;
   let phone = document.formHero.phone.value;
   if(name == null || name == '') {
    showLabel('heroFormNameLabel');
    form.name.focus();
    return false;  
   } if(phone == null || phone == '') {
    hideLabel('heroFormNameLabel');  
    showLabel('heroFormPhoneLabel');  
    form.phone.focus();
    return false;  
   } else {
    hideLabel('heroFormNameLabel');  
    hideLabel('heroFormPhoneLabel');  


    btnHero.value = 'Enviando...';
    const serviceID = 'default_service';
    const templateID = 'template_wqynrqx';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btnHero.value = 'Datos Enviados!';
      form.reset();
      setTimeout(function(){
        btnHero.value = 'Contrata Aquí!';
      }, 2000);
    }, (err) => {
      btnHero.value = 'Hubo un error!';
      setTimeout(function(){
        btnHero.value = 'Contrata Aquí!';
      }, 2000);
    });
   }
});

document.getElementById('cta-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   let form = document.getElementById('cta-form');
   let name = document.ctaForm.name.value;
   let phone = document.ctaForm.phone.value;
   if(name == null || name == '') {
    showLabel('ctaNameLabel');
    form.name.focus();
    return false;  
   } if(phone == null || phone == '') {
    hideLabel('ctaNameLabel');  
    showLabel('ctaphoneLabel');  
    form.phone.focus();
    return false;  
   } else {
    hideLabel('ctaNameLabel');  
    hideLabel('ctaphoneLabel');  


    btnCta.value = 'Enviando...';
    const serviceID = 'default_service';
    const templateID = 'template_wqynrqx';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btnCta.value = 'Datos Enviados!';
      form.reset();
      setTimeout(function(){
        btnCta.value = 'Enviar';
      }, 2000);
    }, (err) => {
      btnCta.value = 'Hubo un error!';
      setTimeout(function(){
        btnCta.value = 'Contratar!';
      }, 2000);
    });
   }
});

function showLabel (labelName) {
  const label = document.getElementById(labelName);
  if(label) {
    label.classList.remove('hide');
    label.classList.add('show');
  }
}

function hideLabel (labelName) {
  const label = document.getElementById(labelName);
  if(label) {
    label.classList.remove('show');
    label.classList.add('hide');
  }
}

