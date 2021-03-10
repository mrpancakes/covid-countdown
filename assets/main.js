let today = moment();
let partyDay = moment("2021-04-16")

$("#todaysDate").text(`${today.format('MMMM D, YYYY')}`);



function daysRemaining(){
    console.log(partyDay.diff(today, 'days'));
    $("#partyDay").text(`${partyDay.diff(today, "days")} Days Remaining`);
}

daysRemaining()