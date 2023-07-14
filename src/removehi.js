setTimeout(function() {
    var hello = document.getElementById('hello');
    if(index===2)hello.style.opacity = 0;
    setTimeout(function() { 
    }, 150); // remove the element after the fade out animation is complete
  }, 150); // hide the element after 1 second
  
var messages = ['Hello!', 'Hola', 'Bonjour', 'Ciao', 'नमस्ते', 'こんにちは', '你好','안녕하세요', 'Olá', 'مرحبا ', 'Γεια σας', 'Cześć'];
var index = 0;

function showNextMessage() {
  var hello = document.getElementById('hello');
  hello.textContent = messages[index];
  index = (index + 1);
  hello.style.opacity = 1;
  setTimeout(function() { 
    setTimeout(function() {
      if (index < messages.length) {
        showNextMessage();
      } else {
        hello.style.opacity = 0;
        setTimeout(() => {
          hello.style.zIndex=-1; 
        }, 1000);
      }
    }, 80-(index*10)); // remove the element after the fade out animation is complete
  }, 250-(index*13)); // hide the element after 1 second
}

setTimeout(showNextMessage, 500); // start showing messages after 1 second
