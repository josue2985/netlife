if (module.hot) {
  module.hot.accept();
}

const btnHero = document.getElementById('heroButton');
const btnCta = document.getElementById('ctaButton');
let msg = document.getElementById("validate-message");

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

document.getElementById('form-simulator')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   let form = document.getElementById('form-simulator');
   let name = document.formSimulator.name.value;
   let phone = document.formSimulator.phone.value;
   if(name == null || name == '') {
    showLabel('simFormNameLabel');
    form.name.focus();
    return false;  
   } if(phone == null || phone == '') {
    hideLabel('simFormNameLabel');  
    showLabel('simFormPhoneLabel');  
    form.phone.focus();
    return false;  
   } else {
    hideLabel('simFormNameLabel');  
    hideLabel('simFormPhoneLabel');  


    simButton.value = 'Enviando...';
    const serviceID = 'default_service';
    const templateID = 'template_wqynrqx';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      simButton.value = 'Datos Enviados!';
      form.reset();
      setTimeout(function(){
        simButton.value = 'Enviar';
      }, 2000);
    }, (err) => {
      simButton.value = 'Hubo un error!';
      setTimeout(function(){
        simButton.value = 'Contratar!';
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


// Simulator
var currentTab = 0;
document.addEventListener("DOMContentLoaded", function(event) {
  showTab(currentTab);
  // calculateMegas();
});

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").innerHTML = "Siguiente";
  }
  fixStepIndicatorDesktop(n);
  fixStepIndicatorMobile(n);
}

window.showTab = showTab;

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  msg.classList.remove('show');
  if (currentTab >= x.length) {
    document.getElementById("nextprevious").style.display = "none";
    document.getElementById("all-steps").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("text-message").style.display = "block";
  }
  if(currentTab == 1) {
    calculateQuestion1();
  }
  if(currentTab == 2) {
    calculateQuestion2()
  }
  if(currentTab == 3) {
    calculateQuestion3();
    calculateTotalMegas();
  }
  showTab(currentTab);
  // calculateMegas();
}

window.nextPrev = nextPrev;

function validateForm() {
  var x, y, i, 
  valid = false;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].querySelectorAll("input");
  for (i = 0; i < y.length; i++) { 
    // console.log(y[i].checked);
    if (y[i].checked) { 
      console.log('valido')
      document.getElementsByClassName("step")[currentTab].className +=" finish"; 
      valid = true; 
    } else {
      console.log('invalido');
      msg.classList.add('show');
      y[i].className +=" invalid"; 
    }
  } 
  return valid; 
} 

function fixStepIndicatorDesktop(n) { 
  var i, 
  x = document.getElementsByClassName("circle");
  for (i=0; i < x.length; i++) { 
    x[i].className=x[i].className.replace(" active", "" ); 
  } 
  x[n].className +=" active"; 
}

function fixStepIndicatorMobile(n) { 
  var i, 
  x = document.getElementsByClassName("step");
  for (i=0; i < x.length; i++) { 
    x[i].className=x[i].className.replace(" active", "" ); 
  } 
  x[n].className +=" active"; 
}

window.validateForm = validateForm;

let megasValue = document.getElementById('megasValue');

let totalStep1 = 0;
let totalStep2 = 0;
let totalStep3 = 0;

function calculateQuestion1() {
  let cb1 = document.getElementById('cb1');
  let cb2 = document.getElementById('cb2');
  let cb3 = document.getElementById('cb3');
  let cb4 = document.getElementById('cb4');
  if(cb1.checked) {
    totalStep1 = 10;
    document.getElementById('feedback-devices').innerHTML='1-4';
  } else 
  if(cb2.checked) {
    totalStep1 = 20;
    document.getElementById('feedback-devices').innerHTML='5-10';
  } else 
  if(cb3.checked) {
    totalStep1 = 30;
    document.getElementById('feedback-devices').innerHTML='10-15';
  } else
  if(cb4.checked) {
    totalStep1 = 40;
    document.getElementById('feedback-devices').innerHTML='15+';
  }
  else {
    totalStep1 = 0;
  }
}

function calculateQuestion2() {
  let cb5 = document.getElementById('cb5');
  let cb6 = document.getElementById('cb6');
  let cb7 = document.getElementById('cb7');
  if(cb5.checked) {
    totalStep2 = 30;
    document.getElementById('feedback-videochat').innerHTML='Diario';
  } else 
  if(cb6.checked) {
    totalStep2 = 20;
    document.getElementById('feedback-videochat').innerHTML='Semanal';
  } else 
  if(cb7.checked) {
    totalStep2 = 10;
    document.getElementById('feedback-videochat').innerHTML='Rara Vez';
  }
  else {
    totalStep2 = 0;
  }
}

function calculateQuestion3() {
  let cb8 = document.getElementById('cb8');
  let cb9 = document.getElementById('cb9');
  let cb10 = document.getElementById('cb10');
  if(cb8.checked) {
    totalStep3 = 30;
    document.getElementById('feedback-semanal').innerHTML='Diario';
  } else 
  if(cb9.checked) {
    totalStep3 = 20;
    document.getElementById('feedback-semanal').innerHTML='Semanal';
  } else 
  if(cb10.checked) {
    totalStep3 = 10;
    document.getElementById('feedback-semanal').innerHTML='Rara Vez';
  }
  else {
    totalStep3 = 0;
  }
}

function calculateTotalMegas() {
  let totalMegas = totalStep1 + totalStep2 + totalStep3;
  // megasValue.setAttribute('value', totalMegas);
  megasValue.innerHTML = totalMegas;
}

function resetCheckobxes() {
  let i;
  let x = document.querySelectorAll('[id^="cb"]');
  for (i=0; i < x.length; i++) {
    x[i].checked = false;
  }
  document.querySelector(".last-tab").style.display = "none";
  currentTab = 0;
  showTab(currentTab);
  document.getElementById("nextBtn").style.display = "initial";
  msg.classList.remove('show');
}

window.resetCheckobxes = resetCheckobxes;