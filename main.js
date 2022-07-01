
const link = document.getElementById("view_more");
function toggler(divId, divId1, divId2) {
    $("#" + divId).toggle();
    $("#" + divId1).toggle();
    $("#" + divId2).toggle();

if(link.innerText === "View More") 
   {
    link.innerText = "View Less";
   }else {
    link.innerText = "View More";
}
}


