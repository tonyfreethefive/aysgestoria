
// function disable() {
     // document.getElementById("sendButton").disabled = true;
     // var button = document.getElementById("sendButton");
     // document.getElementById('sendButton').addEventListener('click', event => setTimeout(() => event.target.disabled = true, 0));
 // }
 let check = true;
 const sendbutton = document.getElementById("sendButton"); 
//   Name valid
function InvalidName(textbox) {

    if (textbox.value === '') {
        // button.disabled = true;
        textbox.setCustomValidity
              ('Por favor escriba un nombre');
    } 
    // else if (textbox.validity.typeMismatch) {
    //     textbox.setCustomValidity
    //           ('Solo se admiten nombres con mínimo 2 letras!');
    //}
     else {
        textbox.setCustomValidity('');
    }

    return true;
}

//   Email valid
  function InvalidEmail(textbox) {
       
      if (textbox.value === '') {
        
          textbox.setCustomValidity
                ('Por favor escriba un correo');
      } else if (textbox.validity.typeMismatch) {
          textbox.setCustomValidity
                ('Por favor escriba un correo válido!');
      } else {
          textbox.setCustomValidity('');
      }

      return true;
  }
  //   Subject valid
  function InvalidSubject(textbox) {

    if (textbox.value === '') {
        textbox.setCustomValidity
              ('Por favor escriba un asunto');    
    } else {
        textbox.setCustomValidity('');
    }
    return true;
}

function chechToSend(){
    //var textarea = document.getElementById("message");
   if(InvalidName(textbox) 
   && InvalidEmail(textbox) 
   && InvalidSubject(textbox) 
   && textarea.value != '') 
   {
    sendbutton.disabled = false;
   }
}
// Spinner and Send Email
var myVar;
  
function sentMail() { 
    console.log('sentMail(access)');
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const textarea = document.getElementById("message");  
    if( name.value != '' 
    && email.value != ''
    && subject.value != ''
    && textarea.value != '' ) {
    console.log('name:'+ name.value + 'email:'+ email.value + 'subject:'+ subject.value + 'message:'+ textarea.value);
    
     //sendbutton.disabled = false;
     myVar = setTimeout(showPage, 1000);
    }
    else{
        alert('Por Favor llene TODOS los campos !!!');
    } 
}

function showPage() {
    document.getElementById("loading").style.display = "none";              
    document.getElementById("sentDiv").style.display = "block";     
  
}

function removeTextAreaWhiteSpace() {
    var myTxtArea = document.getElementById('message');
    myTxtArea.value = myTxtArea.value.replace(/^\s*|\s*$/g,'');
    }
  
    
