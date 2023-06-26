

const getLocation=()=>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(sucess, error)
    }
}

function sucess(position){
    console.log(position)
}

function error(){
    console.error("Sorry")
}

getLocation()
