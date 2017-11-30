'use strict';

$(document).ready(function(){

    // Instantiate local variables
    
    
    // Set initial states


    // -------------------------------------------------------
    // CORE FUNCITONS
    var onINIT = function () {
        var org_handle =  getParameterByName('o');

        if(org_handle != '' && org_handle != null) {
            console.log(org_handle);

            // get the org's associated url
            $.get(
                "https://us-central1-notifly-2.cloudfunctions.net/getRedirectUrl?org_handle=" + org_handle, 
                function(data, status) 
                {
                    console.log(data);

                    // redirect to org's page
                    window.location.href = data;
                });


        } else {
            console.log('No query param, i.e. no redirect req\'d.');
        }
    }


    // HELPER FNCS
    function getParameterByName( name ){
        var regexS = "[\\?&]"+name+"=([^&#]*)", 
      regex = new RegExp( regexS ),
      results = regex.exec( window.location.search );
      if( results == null ){
        return "";
      } else{
        return decodeURIComponent(results[1].replace(/\+/g, " "));
      }
    }


    // RUN INIT FUNCTIONS
    onINIT();
});