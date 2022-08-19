

//API accessToken for mapboxgl
mapboxgl.accessToken = // your access token
'pk.eyJ1IjoiYXNhbnRhZW1zIiwiYSI6ImNsNnp4M3MxNDA4bnczb24xaTNlMHZzMW0ifQ.25rFhuYlna0XFkacsbqtyw';

//this will allow you to get your location (will prompt browser)
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

//on successfully attaining longitude and latitude this function will show your current position
function successLocation(postition){
    console.log(location)
    setupMap([postition.coords.longitude, postition.coords.latitude])
}

//if your position cannot be found then this will create a position and show it on the map
function errorLocation() {
    setupMap([-34, 58])
}

function setupMap(center){
    //this is what created the map
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        //this centers the map on the latitude and longitude that were passed into the setUpMap function
        center: center,
        //without adjusting the zoom level the map will be zoomed out even if centered.
        zoom: 8
    });
    //this adds the ability to zoom in and out of the map using buttons in the top right of the map view. can also change orientation using these buttons
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)
    //this adds the ability to enter in two locations and visibily see a route from location A to B
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, 'top-left')
}