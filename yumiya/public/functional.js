//Custom background on load
document.body.style.backgroundImage = window.localStorage.getItem("currBG");
// //Saving background when user uploads
// const image_input = document.querySelector("#file-upload");
// image_input.addEventListener("change", function() {
//   console.log("Change bg")
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     const uploaded_image = reader.result;
//     document.body.style.backgroundImage = `url(${uploaded_image})`;
//     const bg = document.querySelector("body").computedStyleMap();
//     window.localStorage.setItem('currBG',bg.get('background-image').toString());
//   });
//   reader.readAsDataURL(this.files[0]);
// });

//Selectively clearing localStorage
var localData = window.localStorage
for(var i in localData){
  if(i !== "currBG" && i !== "ToDoList" && i !== "state" && i !== "shortcuts"){
    window.localStorage.removeItem(i)
  }
}