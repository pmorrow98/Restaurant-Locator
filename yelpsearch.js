'use strict';

const yelp = require('yelp-fusion');

const apiKey = "1BBlwytIuQpbs_FnDcJNl-quD9QxakqIp8B2excAUKgAqoPEMsvLS_qwZaM973qum2Qth-ynj8uwU5JuuoYfDKI5UqwaHTe2Oq8CDn9Cn4ufeMNSTWfPF0PWhxW5W3Yx";

const client = yelp.client(apiKey);

export function yelpSearch(lat, long, rad) {
  var latitude = lat
  var longitude = long
  var radius = rad

  var searchRequest = {
    latitude = latitude,
    longitude = longitude,
    radius = radius
  };

  client.search(searchRequest).then(response => {
    //const firstResult = response.jsonBody.businesses[0];
    //const prettyJson = JSON.stringify(firstResult, null, 4);
    var result = businesses[Math.floor(Math.random() * 30)];
    var restaurantInfo = new Array
    var name = result.name
    var address = result.location.address1
    var rating = result.rating
    restaurantInfo[0] = name
    restaurantInfo[1] = address
    restaurantInfo[2] = rating.toString();

  }).catch(e => {
    console.log(e);
  });

  return restaurantInfo;
}



