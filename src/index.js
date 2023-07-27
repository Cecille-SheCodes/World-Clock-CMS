//Berlin
function updateTime(){
let berlinElement = document.querySelector("#berlin");
let berlinDateElement= berlinElement.querySelector(".date");
let berlinTimeElement = berlinElement.querySelector(".time");
berlinDateElement.innerHTML = moment().tz("Europe/Berlin").format("dddd, MMMM D, YYYY");
berlinTimeElement.innerHTML = moment()
  .tz("Europe/Berlin")
  .format("h:mm:ss [<small>]A[</small>]");



//Manila

let manilaElement = document.querySelector("#manila");
let manilaDateElement = manilaElement.querySelector(".date");
let manilaTimeElement = manilaElement.querySelector(".time");
manilaDateElement.innerHTML = moment()
  .tz("Asia/Manila")
  .format("dddd, MMMM D, YYYY");
manilaTimeElement.innerHTML = moment()
  .tz("Asia/Manila")
  .format("h:mm:ss [<small>]A[</small>]");



  // New York

  let nyElement = document.querySelector("#new-york");
  let nyDateElement = nyElement.querySelector(".date");
  let nyTimeElement = nyElement.querySelector(".time");
  nyDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("dddd, MMMM D, YYYY");
  nyTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);