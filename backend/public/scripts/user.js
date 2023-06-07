function getCookieValue(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(";");
  
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
  
    return null; // Si no se encuentra la cookie
  }
  
  // Uso
  var sessionId = getCookieValue("sessionId");
  console.log(sessionId);

  const btnReservas = document.querySelector('#reservas_btn');
  btnReservas.addEventListener("click", () => {
        
  });