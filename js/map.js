async function initMap(){
  
  var Home = new google.maps.LatLng(41.8965, -87.7204);
  var Uni = new google.maps.LatLng(41.8359, -87.6265);
  var Taco = new google.maps.LatLng(41.9196, -87.7576);

  var map = new google.maps.Map(document.getElementById("map"), {
  zoom: 15,
  center: Home,
 });


 home = new google.maps.Marker({
  title: "My Home",
  position: Home,
  map: map,
  icon: {
   url: 'images/lavi.jpg',
   scaledSize: new google.maps.Size(50, 50),
  },
 })

 home.addListener("click", function () {
    alert("My Home - hello this is imanol here is my info it takes normally 22-30 minutes to get University ");
  });

  taco = new google.maps.Marker({
  title: "My favorite taco place",
  position: Taco,
  map: map,
  icon: {
   url: 'images/taco.jpg',
   scaledSize: new google.maps.Size(50, 50),
  },
 })

 taco.addListener("click", function () {
    alert("Best tacos in the city - by far gurantee to bet 50$ on my name its the best Location: El Burrito Amigo 5238 W Grand Ave, Chicago, IL 60639 ");
  });

  uni = new google.maps.Marker({
  title: "My University I go to",
  position: Uni,
  map: map,
  icon: {
   url: 'images/uni.jpg',
   scaledSize: new google.maps.Size(50, 50),
  },
 })

 uni.addListener("click", function () {
    alert("this is the university I enjoy going day by day due to how close I can see the city at night");
  });
}
