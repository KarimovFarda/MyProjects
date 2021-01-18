
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
      
      document.getElementById("amount0").classList.remove("btn-danger");
      document.getElementById("amount0").classList.add("btn-primary");
      document.getElementById("cardbody0").style.backgroundColor = "white";
  
      document.getElementById("amount1").classList.remove("btn-danger");
      document.getElementById("amount1").classList.add("btn-primary");
      document.getElementById("cardbody1").style.backgroundColor = "white"
  
      document.getElementById("amount2").classList.remove("btn-danger");
      document.getElementById("amount2").classList.add("btn-primary");
      document.getElementById("cardbody2").style.backgroundColor = "white"
  
      document.getElementById("amount3").classList.remove("btn-danger");
      document.getElementById("amount3").classList.add("btn-primary");
      document.getElementById("cardbody3").style.backgroundColor = "white";
  
      document.getElementById("amount4").classList.remove("btn-danger");
      document.getElementById("amount4").classList.add("btn-primary");
      document.getElementById("cardbody4").style.backgroundColor = "white"
  
      document.getElementById("amount5").classList.remove("btn-danger");
      document.getElementById("amount5").classList.add("btn-primary");
      document.getElementById("cardbody5").style.backgroundColor = "white"
  
      document.getElementById("amount6").classList.remove("btn-danger");
      document.getElementById("amount6").classList.add("btn-primary");
      document.getElementById("cardbody6").style.backgroundColor = "white"
  
      document.getElementById("amount7").classList.remove("btn-danger");
      document.getElementById("amount7").classList.add("btn-primary");
      document.getElementById("cardbody7").style.backgroundColor = "white";
  
      document.getElementById("amount8").classList.remove("btn-danger");
      document.getElementById("amount8").classList.add("btn-primary");
      document.getElementById("cardbody8").style.backgroundColor = "white"
  
      document.getElementById("amount9").classList.remove("btn-danger");
      document.getElementById("amount9").classList.add("btn-primary");
      document.getElementById("cardbody9").style.backgroundColor = "white"
  
      document.getElementById("amount10").classList.remove("btn-danger");
      document.getElementById("amount10").classList.add("btn-primary");
      document.getElementById("cardbody10").style.backgroundColor = "white"
  
      document.getElementById("amount11").classList.remove("btn-danger");
      document.getElementById("amount11").classList.add("btn-primary");
      document.getElementById("cardbody11").style.backgroundColor = "white";
  
      document.getElementById("amount12").classList.remove("btn-danger");
      document.getElementById("amount12").classList.add("btn-primary");
      document.getElementById("cardbody12").style.backgroundColor = "white"
  
      document.getElementById("amount13").classList.remove("btn-danger");
      document.getElementById("amount13").classList.add("btn-primary");
      document.getElementById("cardbody13").style.backgroundColor = "white"
  
      document.getElementById("amount14").classList.remove("btn-danger");
      document.getElementById("amount14").classList.add("btn-primary");
      document.getElementById("cardbody14").style.backgroundColor = "white"
  
      document.getElementById("amount15").classList.remove("btn-danger");
      document.getElementById("amount15").classList.add("btn-primary");
      document.getElementById("cardbody15").style.backgroundColor = "white"
  
      document.getElementById("amount16").classList.remove("btn-danger");
      document.getElementById("amount16").classList.add("btn-primary");
      document.getElementById("cardbody16").style.backgroundColor = "white"
  
      document.getElementById("amount17").classList.remove("btn-danger");
      document.getElementById("amount17").classList.add("btn-primary");
      document.getElementById("cardbody17").style.backgroundColor = "white"
  
      document.getElementById("amount18").classList.remove("btn-danger");
      document.getElementById("amount18").classList.add("btn-primary");
      document.getElementById("cardbody18").style.backgroundColor = "white"
  
      document.getElementById("amount19").classList.remove("btn-danger");
      document.getElementById("amount19").classList.add("btn-primary");
      document.getElementById("cardbody19").style.backgroundColor = "white";
  
      document.getElementById("amount20").classList.remove("btn-danger");
      document.getElementById("amount20").classList.add("btn-primary");
      document.getElementById("cardbody20").style.backgroundColor = "white"
  
      document.getElementById("amount21").classList.remove("btn-danger");
      document.getElementById("amount21").classList.add("btn-primary");
      document.getElementById("cardbody21").style.backgroundColor = "white"
  
      document.getElementById("amount22").classList.remove("btn-danger");
      document.getElementById("amount22").classList.add("btn-primary");
      document.getElementById("cardbody22").style.backgroundColor = "white"
  
      document.getElementById("amount23").classList.remove("btn-danger");
      document.getElementById("amount23").classList.add("btn-primary");
      document.getElementById("cardbody23").style.backgroundColor = "white";
  
  
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
      
      document.getElementById("amount0").classList.remove("btn-primary");
      document.getElementById("amount0").classList.add("btn-danger");
      document.getElementById("cardbody0").style.backgroundColor = "#FFFFFF";
  
      document.getElementById("amount1").classList.remove("btn-primary");
      document.getElementById("amount1").classList.add("btn-danger");
      document.getElementById("cardbody1").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount2").classList.remove("btn-primary");
      document.getElementById("amount2").classList.add("btn-danger");
      document.getElementById("cardbody2").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount3").classList.remove("btn-primary");
      document.getElementById("amount3").classList.add("btn-danger");
      document.getElementById("cardbody3").style.backgroundColor = "#ffffff";
  
      document.getElementById("amount4").classList.remove("btn-primary");
      document.getElementById("amount4").classList.add("btn-danger");
      document.getElementById("cardbody4").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount5").classList.remove("btn-primary");
      document.getElementById("amount5").classList.add("btn-danger");
      document.getElementById("cardbody5").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount6").classList.remove("btn-primary");
      document.getElementById("amount6").classList.add("btn-danger");
      document.getElementById("cardbody6").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount7").classList.remove("btn-primary");
      document.getElementById("amount7").classList.add("btn-danger");
      document.getElementById("cardbody7").style.backgroundColor = "#ffffff";
  
      document.getElementById("amount8").classList.remove("btn-primary");
      document.getElementById("amount8").classList.add("btn-danger");
      document.getElementById("cardbody8").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount9").classList.remove("btn-primary");
      document.getElementById("amount9").classList.add("btn-danger");
      document.getElementById("cardbody9").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount10").classList.remove("btn-primary");
      document.getElementById("amount10").classList.add("btn-danger");
      document.getElementById("cardbody10").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount11").classList.remove("btn-primary");
      document.getElementById("amount11").classList.add("btn-danger");
      document.getElementById("cardbody11").style.backgroundColor = "#ffffff";
  
      document.getElementById("amount12").classList.remove("btn-primary");
      document.getElementById("amount12").classList.add("btn-danger");
      document.getElementById("cardbody12").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount13").classList.remove("btn-primary");
      document.getElementById("amount13").classList.add("btn-danger");
      document.getElementById("cardbody13").style.backgroundColor = "#Ffffff"
  
      document.getElementById("amount14").classList.remove("btn-primary");
      document.getElementById("amount14").classList.add("btn-danger");
      document.getElementById("cardbody14").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount15").classList.remove("btn-primary");
      document.getElementById("amount15").classList.add("btn-danger");
      document.getElementById("cardbody15").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount16").classList.remove("btn-primary");
      document.getElementById("amount16").classList.add("btn-danger");
      document.getElementById("cardbody16").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount17").classList.remove("btn-primary");
      document.getElementById("amount17").classList.add("btn-danger");
      document.getElementById("cardbody17").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount18").classList.remove("btn-primary");
      document.getElementById("amount18").classList.add("btn-danger");
      document.getElementById("cardbody18").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount19").classList.remove("btn-primary");
      document.getElementById("amount19").classList.add("btn-danger");
      document.getElementById("cardbody19").style.backgroundColor = "#ffffff";
  
      document.getElementById("amount20").classList.remove("btn-primary");
      document.getElementById("amount20").classList.add("btn-danger");
      document.getElementById("cardbody20").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount21").classList.remove("btn-primary");
      document.getElementById("amount21").classList.add("btn-danger");
      document.getElementById("cardbody21").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount22").classList.remove("btn-primary");
      document.getElementById("amount22").classList.add("btn-danger");
      document.getElementById("cardbody22").style.backgroundColor = "#ffffff"
  
      document.getElementById("amount23").classList.remove("btn-primary");
      document.getElementById("amount23").classList.add("btn-danger");
      document.getElementById("cardbody23").style.backgroundColor = "#ffffff";
  
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
  
  
  