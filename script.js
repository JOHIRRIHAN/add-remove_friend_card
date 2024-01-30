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


// var heading = document.querySelector("h5")
// var addFriends = document.querySelector("#add")
// var check = 0
// addFriends.addEventListener("click",function(){
//     if(check == 0){
//     heading.innerHTML = "friends"
//     heading.style.color= "green"
//     check = 1
//     }else{
//      heading.innerHTML = "Stranger"
//     heading.style.color= "rgb(44, 83, 95)"
//     check = 0
//     }
// })


var heading = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0
btn.addEventListener("click",function(){
    if(check ==0){
        heading.innerHTML= "Friends"
        heading.style.color = "red"
        btn.innerHTML = "Remove Friend"
        check =1
    }else{
        heading.innerHTML= "Stranger"
        heading.style.color = "rgb(44, 83, 95)"
        btn.innerHTML = "Add Friend"
        check= 0
    }
})