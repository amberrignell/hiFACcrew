// scripts for the image carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// // scripts for the encrypt/decrypt section
// window.addEventListener('load', () => {
//   console.log('hello');
//   //get all elements of the page with the class 'text' (returns an HTML collection)
//   //get the tectContent of each element and reassign it with it's encrypted equivalent
//   function encryptPage() {
//     var text = document.getElementsByClassName("text");
//     for (let i=0; i<text.length; i++) {
//       text[i].textContent = encrypt(text[i].textContent);
//     }
//     console.log('page encrypted');
//   }
//
//   function decryptPage() {
//     console.log('i got here');
//     var text = document.getElementsByClassName("text");
//     for (let i=0; i<text.length; i++) {
//       text[i].textContent = decrypt(text[i].textContent);
//     }
//     console.log(text);
//     console.log('page decrypted');
//   }
//   //
//   // encryption function
//   //replaces each character in a string with the number wich is their UTF-16 code unit,
//   //then turns this number into a string of base 16
//   function encrypt (str){
//     let newStr = '';
//     let b = 'a';
//     for (let i=0; i < str.length; i++) {
//         b = str[i].charCodeAt().toString(16);
//         newStr = newStr + b;
//     }
//     return newStr;
//   }
//   //
//   // // decryption function
//   // // puts elements of string into an array, 2 characters at a time
//   // // switches strings of base 16 back into numbers
//   // // replaces UTF-16 units with their associated characters, then joins them all together as a string
//   function decrypt(str) {
//     console.log(str);
//     var a = [];
//     do{ a.push(str.substring(0, 2)) }
//     while( (str = str.substring(2, str.length)) != "" );
//     console.log(a);
//     a = a.map( x => parseInt(x,16));
//     a = a.map (x => String.fromCharCode(x))
//     return a.join('');
//     }
//
//
//   encryptPage();
//   document.getElementById("button").addEventListener("click", function () {
//     var answer = document.getElementById("fname");
//     if (answer.value === 'yes') { decryptPage()};
//   })
// })
