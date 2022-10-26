const image_input = document.querySelector("#file-upload");

image_input.addEventListener("change", function() {
    console.log(image_input.value)
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    // document.querySelector("#body").style.backgroundImage = `url(${uploaded_image})`;
    document.body.style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});