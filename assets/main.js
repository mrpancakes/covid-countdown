let today = moment();
let partyDay = moment("2021-04-16")

$("#todaysDate").text(`${today.format('MMMM D, YYYY')}`);

// function daysRemaining(){
//     $("#partyDay").text(`${partyDay.diff(today, "days", "")} Days Remaining`);
// }


// daysRemaining();



setInterval(function(){
    
    $("#partyDay").text(moment("2021-04-17").countdown().toString());

}, 1000)