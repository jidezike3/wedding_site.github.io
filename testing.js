function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  if (cityName=='Home'){
    // $("body").attr("background","200613_jide_oge_0021_edit.jpg")
    $("body").attr({"background":"200613_jide_oge_0021_edit.jpg","background-size":"cover","background-repeat":"no-repeat","background-attachment": "fixed"})

    // $("body").attr("background-size","cover")
    // $("body").attr("background-repeat","no-repeat")
    // $("body").attr("background-attachment","fixed")


  }
  else {
    // $("body").attr("background","wedding_background_image1.jpg")
  $("body").attr({"background":"wedding_background_image1.jpg","background-size":"cover","background-repeat":"no-repeat","background-attachment": "fixed"})

  // $("body").attr("background-size","cover")
  // $("body").attr("background-repeat","no-repeat")
  // $("body").attr("background-attachment","fixed")
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
