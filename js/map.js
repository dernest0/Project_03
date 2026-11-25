async function initMap(){
  
  var Home = new google.maps.LatLng(41.8965, -87.7204);
  var Uni = new google.maps.LatLng(41.8359, -87.6265);
  var Taco = new google.maps.LatLng(41.9196, -87.7576);

  var map = new google.maps.Map(document.getElementById("map"), {
  zoom: 15,
  center: Home,
 });


 new google.maps.Marker({
  title: "My Home",
  position: Home,
  map: map,
  icon: {
   url: 'images/lavi.jpg',
   scaledSize: new google.maps.Size(50, 50),
  },
 })

  new google.maps.Marker({
  title: "My favorite taco place",
  position: Taco,
  map: map,
  icon: {
   url: 'images/taco.jpg',
   scaledSize: new google.maps.Size(50, 50),
  },
 })

  new google.maps.Marker({
  title: "My University I go to",
  position: Uni,
  map: map,
  icon: {
   url: 'images/uni.jpg',
   scaledSize: new google.maps.Size(50, 50),
  },
 })
}
