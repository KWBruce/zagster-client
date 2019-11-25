const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html("Total Rides:" + numberOfRides)
}

function updateView() {
  $.getJSON(BASE_URL + "/rides/count/per_month, updateRideCount")
}

function updateRideCount(data) {
  numberOfRides = date.count
  $("h3#rideCount")
  
  }