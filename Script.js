var operation = new XMLHttpRequest
operation.open('GET','https://restcountries.eu/rest/v2/all',true)
operation.send();
operation.onload = function (){
    var countrydata = JSON.parse(this.response)
    console.log(countrydata)
    
    var total=0;
    for(i in countrydata){
        total=total+countrydata[i].population
    }
    console.log(total)
}

