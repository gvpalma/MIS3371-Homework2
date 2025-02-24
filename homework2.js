/* 
Name:Gabriela Palma
File name: homework2.js
Date Created: February 24
*/

  <script>
    function goToThankYouPage() {
      window.location.href = "homework1-thankyou.html";}
  </script>
  
   //dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;
