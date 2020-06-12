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
// });
var present = document.querySelectorAll("#present")
var absent = document.querySelectorAll("#absent")

var li = document.querySelectorAll("li")

for(var i=0;i<present.length;i++){
    
    present[i].addEventListener("click",function(){
        console.log("present Button Clicked!")
     })
    absent[i].addEventListener("click",function(){
        console.log("absent button clicked")
    })         
    }
// $(function(){
//     $("li").on("click","button",function(){
        
//         $(this).css("background","green")
//     })
// });