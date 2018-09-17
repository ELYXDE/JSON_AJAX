/* ----------------------------------------------------------------------------------------
	THIS IS MY JAVASCRIPT FILE FOR THE LUXURY CAR JSON AND AJAX PRACTICE

---------------------------------------------------------------------------------------- */

// storing our value for the manufacturer
var manufacturerValue = document.getElementById("manufacturer");

// test what's being stored
console.log(manufacturerValue);

manufacturerValue.addEventListener("change", carChange);

function carChange(){
    
    // test the function runs
    console.log("function Active");
    
    //store value in number format in var
    
    var manufacturerNumber = manufacturerValue.options[manufacturerValue.selectedIndex].value;
    
    // test the above variable
    
    console.log(manufacturerNumber);
    
    
    //Creates a new instance of the XMLHttpRequest object and stores the object in a variable.
    var httpRequestObject = new XMLHttpRequest();
    
    /* The XMLHttpRequest object's open() method prepares the request. */
    httpRequestObject.open("GET", "https://raw.githubusercontent.com/ELYXDE/JSON_AJAX/master/expensiveLuxuryCars.json", true);
    
    // when the browser has gotten a response from the server, that will trigger the anonymous function.
    httpRequestObject.onload = function() {
        
        // the if condition checks the readyState and then the status to make sure that the servers response was OK and the data has been loaded and available.
        if (httpRequestObject.readyState == 4 && httpRequestObject.status == 200) 
        {
            
            // stores our JSON file as javascript objects
            var myData = JSON.parse(httpRequestObject.responseText);
            
            if(manufacturerNumber === ""){
                
                var hideValues = document.getElementsByClassName("data");
                
                for(var i = 0; i<12; i++){
                    
                    hideValues[i].innerHTML = "";
                }
                
            } 
            else {
            
                document.getElementById("manufacturerC").innerHTML = 
                myData.data[manufacturerNumber].manufacturer;
            
                document.getElementById("modelC").innerHTML = 
                myData.data[manufacturerNumber].model;
            
                document.getElementById("priceC").innerHTML = "£" +
                myData.data[manufacturerNumber].price;
            
                document.getElementById("descriptionC").innerHTML = 
                myData.data[manufacturerNumber].description;
            
                document.getElementById("videoC").innerHTML = 
                '<iframe src = "' + myData.data[manufacturerNumber].video + '" width="auto" height="auto" allowfullscreen alt = "car video"> </iframe>';
            
                document.getElementById("overallC").innerHTML = 
                myData.data[manufacturerNumber].quality[0].rating;
            
                document.getElementById("mechanicalC").innerHTML = 
                myData.data[manufacturerNumber].quality[1].rating;
            
                document.getElementById("powertrainC").innerHTML = 
                myData.data[manufacturerNumber].quality[2].rating;
            
                document.getElementById("bodyC").innerHTML = 
                myData.data[manufacturerNumber].quality[3].rating;
            
                document.getElementById("interiorC").innerHTML = 
                myData.data[manufacturerNumber].quality[4].rating;
            
                document.getElementById("accessoriesC").innerHTML = 
                myData.data[manufacturerNumber].quality[5].rating;
            
                document.getElementById("imgC").innerHTML = 
                '<img src = "' + myData.data[manufacturerNumber].img + '" width="auto" height="auto" alt="car image" />';
            
            }
        }
        else {
            
            document.getElementById("messageAlert").innerHTML =  "The server could not be reached";
        }
        
    };
    
    //uses the send method this sends the prepared request to the server.
    httpRequestObject.send();
}







