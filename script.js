window.onload = codeAddress;

function codeAddress(){
  navigator.geolocation.watchPosition((position)=>{
    currentLat = position.coords.latitude;
    document.getElementById("coordslat").innerHTML = currentLat;
    currentLong = position.coords.longitude;
    document.getElementById("coordslong").innerHTML = currentLong;
});
  }
