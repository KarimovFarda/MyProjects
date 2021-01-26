
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  

  function darkmode(){
      document.body.style.backgroundColor = "black";
      document.getElementById("head").style.backgroundColor="black";
      document.getElementById("link").style.color = "white";
      document.getElementById("brand").style.color="white";
      document.getElementById("contact").style.color = "white";
      document.getElementById("announcements").style.color = "white";
      document.getElementById("link").style.border = "none";
      document.getElementById("foot").style.backgroundColor = "black";
      document.getElementById("foot").style.borderTop = "2px solid #0069D9";
      document.getElementById("footerbrand").style.color = "white";
      document.getElementById("rights").style.color = "white";
      document.getElementById("num").style.color ="white";
      document.getElementById("mail").style.color = "white";


      for(let i=0;i<=24;i++){
    document.getElementsByClassName("btn")[i].classList.remove("btn-danger");
    document.getElementsByClassName("btn")[i].classList.add("btn-primary");
    document.getElementsByClassName("boxes")[i].style.backgroundColor = "white";
      }
      
      
  
      var btn = document.getElementById("link");
      btn.innerHTML = "Light Mode";
      btn.removeAttribute("onclick");
      btn.setAttribute("onclick","lightmode()");
  
  
  
  }
  
  
  function lightmode(){
  
      document.body.style.backgroundColor = "white";
      document.getElementById("head").style.backgroundColor="white";
      document.getElementById("link").style.color = "black";
      document.getElementById("brand").style.color="black";
      document.getElementById("contact").style.color = "black";
      document.getElementById("announcements").style.color = "black";
      document.getElementById("link").style.border = "none";
      document.getElementById("foot").style.backgroundColor = "white";
      document.getElementById("foot").style.borderTop = "2px solid #C82333";
      document.getElementById("footerbrand").style.color = "black";
      document.getElementById("rights").style.color = "black";
      document.getElementById("num").style.color ="black";
      document.getElementById("mail").style.color = "black";
      
      
     for(let j=0;j<=24;j++){
     document.getElementsByClassName("btn")[j].classList.remove("btn-primary");
     document.getElementsByClassName("btn")[j].classList.add("btn-danger");
     document.getElementsByClassName("boxes")[j].style.backgroundColor = "#FFFFFF"

     }

      
      
    
  
      var btn = document.getElementById("link");
      btn.innerHTML = "Dark Mode";
      btn.removeAttribute("onclick");
      btn.setAttribute("onclick","darkmode()");
  
  }
  
  for(var i=0;i<24;i++){
  document.getElementById(`amount${i}`).setAttribute("title",`${Number(document.getElementById(`amount${i}`).innerHTML) * 1.7} AZN`)
  document.getElementById(`amount${i}`).innerHTML =  document.getElementById(`amount${i}`).innerHTML + "$";
  }
  
  
  function english(){
  for(var j=0;j<24;j++){
  document.getElementsByClassName("card-text")[j].innerHTML = document.getElementsByClassName("card-text")[j].innerHTML.replace("il","year")
  
  document.getElementById("announcements").innerHTML = "Announcements";
  document.getElementById("contact").innerHTML = "Contact";
  
  }
  
  
  
  }
  function azerbaijan(){
      for(var k=0;k<24;k++){
  document.getElementsByClassName("card-text")[k].innerHTML = document.getElementsByClassName("card-text")[k].innerHTML.replace("year","il")
  
  document.getElementById("announcements").innerHTML = "Elanlar";
  document.getElementById("contact").innerHTML = "Əlaqə";
  
  
  }
  
  
  }
  
  
  