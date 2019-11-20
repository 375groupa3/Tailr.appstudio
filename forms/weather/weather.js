/*let apiKey = "45723bacc251a42a9176c101c7706921"
let city = "Omaha"
let myurl = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weatherq=${city}&appid=${apiKey}`

  $.ajax({
      url: myurl,
          headers: {
            'Authorization':'Bearer 45723bacc251a42a9176c101c7706921'},
            method: 'GET',
            dataType: 'json',
            success: function(data){   // this function runs with the returned data if trip is successful
                // Grab the results from the API JSON results returned
                let totalresults = data.total   // number of results returned
                // If returned results are greater than 0, continue
                if (totalresults > 0){
                console.log(totalresults)
                */
  /*
               
                    $.each(data.businesses, function(i, item) { 
                        // now inside the function 
                    
                        // Push each piece of the business' information 
                        // onto the appropriate array (that you created earlier)
                        arrayName.push(item.name)
                        arrayPhone.push(item.display_phone)
                        arrayRating.push(item.rating)
                        arrayAddress.push(item.location.address1)
                        arrayCity.push(item.location.city)
                        arrayZipcode.push(item.location.zip_code)
                        arrayCountry.push(item.location.country)
                        arrayImage.push(item.image_url)
                        arrayPrice.push(item.price)
                        arrayLat.push(item.coordinates.latitude)
                        arrayLong.push(item.coordinates.longitude)
                  }); // close the loop and loop function. Repeat the loop
                  
                  // At this point, the loop is done. All business information is
                  // in the arrays. 
                 // Now load the name Select control with a loop (use arrayName contents) 
                 selResults.clear()
                 // for debugging to make sure arrayName has what you intended, take a look
                 console.log(arrayName)
                  
                 // OK - now loop through the array of business names and put them in a control
                 for (i = 0; i <= arrayName.length - 1; i++) 
                    selResults.addItem(arrayName[i])  
                    
                } //close if results not = 0
                else 
                    // If our results are 0; no businesses were returned by the call therefor we display on the page no results were found
                    console.log("No businesses found")
            } // close success funct
            */
         });   // close ajax call

} //close onclick