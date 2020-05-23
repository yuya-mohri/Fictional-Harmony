const initMap = () => {
  let myLating = {lat: 35.170445, lng: 136.880409};
  
  let map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: myLating
  });
  
  let marker = new google.maps.Marker({
    position: myLating,
    map: map,
    title: 'Fictional Harmonyの主な活動場所'
  });
};

window.onload = function() {
  initMap();
};