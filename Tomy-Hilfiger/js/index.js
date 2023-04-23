const btnUser = document.querySelector(".bi-person");
const searchModal = document.querySelector(".modal-search")
const btnDelete = document.querySelector(".bi-x-circle-fill")



btnUser.addEventListener("click", function(){
searchModal.style.visibility = "visible";
searchModal.style.opacity = "1"
})



btnDelete.addEventListener("click", function(){
searchModal.style.visibility = "hidden";
searchModal.style.opacity = "0"
});




//! modal search end








//! sidebar start
const btnList = document.querySelector(".bi-list");
const btnSideBar = document.querySelector(".header-required")
const btnSideDelete = document.querySelector(".btn-delete")


btnList.addEventListener("click", function(){
btnSideBar.style.top = "0"
})


btnSideDelete.addEventListener("click", function(){
btnSideBar.style.top = "-140%"
})


document.addEventListener("click", function (event) {
    if(!event.composedPath().includes(btnSideBar)
    && !event.composedPath().includes(btnList)){
      btnSideBar.style.top = "-140%"  
    }
})

//! sidebar end