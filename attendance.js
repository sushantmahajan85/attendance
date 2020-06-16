// var button = document.querySelectorAll("button")
// console.log(button)
// // button.forEach(function(i){
// //     this[i].addEventListener("clicked",function(){
// //         console.log("button is clicked!")
// //     })
// // })
// for (var i=0; i<button.length;i++){
//     button[i].addEventListener("click",function(){

//     })
// }

// $("li button").on("click","li",function(){
//     $(this).css("background","green")
// })

// // $(function(){
//     $('li').click("button",function(){
//         console.log(button)
//         $(this).css("background","green")
//     // })
// // });
// var present = document.querySelectorAll("#present");
// var absent = document.querySelectorAll("#absent");
// var payas = document.getElementById("payas");
// var sushant = document.getElementById("sushant");
// var li = document.querySelectorAll("li");

// for (var i = 0; i < li.length; i++) {
//   present[i].addEventListener("click", function() {
//     // console.log("present Button Clicked!");
//     payas.style.backgroundColor = "green";
//     sushant.style.backgroundColor = "green";
//   });
//   absent[i].addEventListener("click", function() {
//     console.log("absent button clicked");
//   });
// }
// var present = document.querySelectorAll(`#present-${i}`);

// for (var i = 0; i < li.length; i++) {
//   console.log(i);

//   document.getElementById(`present-${i}`).addEventListener("click", function() {
//     //     // console.log("present Button Clicked!");
//     //     payas.style.backgroundColor = "green";
//     present.style.backgroundColor = "green";
//   });
// }
// $(function(){
//     $("li").on("click","button",function(){

//         $(this).css("background","green")
//     })
// });

function green(el) {
  el.classList.toggle("classGreen");
}
function red(el) {
  el.classList.toggle("classRed");
}

// var members = document.getElementsByClassName("member")

// for(var j=0;j<members.length;j++){
//   member = members[j].children;
//   console.log(member);
// }
  

