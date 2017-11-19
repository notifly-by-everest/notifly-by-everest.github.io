'use strict';

$(document).ready(function(){

    // Instantiate local variables
    
    
    // Set initial states


    // -------------------------------------------------------
    // CORE FUNCITONS
    var onINIT = function () {

        $.post(
            "https://us-central1-notifly-2.cloudfunctions.net/getOrgs", 
            function(data, status)
        {
            var orgsHTML = ``;
    
            for(var key in data) {
                // console.log(data[key]);
                var currentOrg = data[key];

                var trainersHTML = trainersHTMLHelper(currentOrg['trainers']);

                orgsHTML += `<div class="org">
                    <h3 class="orgName">` + currentOrg['name'] + `</h3>
                    <h5 class="h5Label">Trainers:</h5>
                    ` + trainersHTML + `
                    <hr>
                </div>`;
            }
    
            // UPDATE the html, add all the orgs' code
            $(".orgs").html(orgsHTML);
        });
    }


    // HELPER FNCS
    var trainersHTMLHelper = function(trainersObj) {
        var trainersHTML = ``;
        console.log(trainersObj);

        for(var key in trainersObj) {
            var trainerObj = trainersObj[key];
            console.log(trainerObj);

            trainersHTML += `<span class="trainerName">` + trainerObj['name'] + `</span>`;

        }

        return trainersHTML;
    }




    // RUN INIT FUNCTIONS
    onINIT();



});