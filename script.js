// var istatus =document.querySelector("h5");
// var add = document.querySelector("#add");
// var removeFriend = document.querySelector("#remove")

// add.addEventListener("click", function(){
//     istatus.innerHTML = "Friends"
//     istatus.style.color = "blue"
// })

// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "stranger"
//     istatus.style.color = "red"
// })


var heading = document.querySelector("h5")
var addFriends = document.querySelector("#add")
var remove = document.querySelector("#remove")

addFriends.addEventListener("click",function(){
    heading.innerHTML = "friends"
    heading.style.color= "green"
})
remove.addEventListener("click",function(){
    heading.innerHTML = "Stranger"
    heading.style.color= "rgb(44, 83, 95)"
})