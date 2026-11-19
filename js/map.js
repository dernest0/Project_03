function inint(){
    alert ('it works');
    var ele = document.getElementById('canvas');
   var myLocation = new google.maps.LatLng(41.8965, -87.7204);
   var mapOptions = {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
          position: google.maps.ControlPosition.BOTTOM_CENTER
        }
  };

    var mymap = new google.maps.Map(ele, mapOptions);

    //var marker = new google.maps.Marker({
    //    position: myLocation,
    //    map: mymap,
    //    animation: google.maps.Animation.BOUNCE,
    //    icon: '...images/zenacat.jpg'
    //});
google.maps.event.addDomListener(window, 'load', inint);

}