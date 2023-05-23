function handleColorChange(color, button) {
  const body = document.body;
  const image = document.getElementById("umbrella-image");
  removeBorders();

  if (color === "yellow") {
    body.style.backgroundColor = "rgb(245, 245, 188 , 0.3)";
    image.src = "./assets/Yello umbrella.png";

    const button = document.getElementsByClassName(color);
    button[0].style.border = "4px solid lightblue";
  } else if (color === "pink") {
    body.style.backgroundColor = "rgb(247, 209, 215, 0.3)";
    image.src = "./assets/Pink umbrella.png";

    const button = document.getElementsByClassName(color);
    button[0].style.border = "4px solid lightblue";
  } else {
    body.style.backgroundColor = "rgb(184, 227, 242 , 0.3)";
    image.src = "./assets/Blue umbrella.png";

    const button = document.getElementsByClassName(color);
    button[0].style.border = "4px solid lightblue";
  }

  image.alt = "not_found";
}

function removeBorders() {
  const buttons = document.getElementsByClassName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.border = "none";
  }
}

document
  .getElementById("input-file")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const loadingImg = document.createElement("img");
      loadingImg.src = "./assets/loader_icon.svg";
      loadingImg.alt = "Uploading...";
      loadingImg.classList.add("rotate");
      //   loadingImg.style.animation = "rotate 1s infinite linear";
      //   loadingImg.style.transform = "rotate(360deg)";

      const umbrellaImage = document.getElementById("umbrella-image");
      umbrellaImage.style.display = "none";

      const logo = document.getElementById("logo-image");
      logo.style.display = "none";

      const umbrellaPreview = document.getElementById("show-umbrella");
      umbrellaPreview.appendChild(loadingImg);

      const reader = new FileReader();

      setTimeout(function () {
        reader.addEventListener("load", function () {
          const logoUrl = reader.result;
          const logoElement = document.getElementById("logo-image");
          logoElement.src = logoUrl;
          logo.style.display = "block";
          umbrellaImage.style.display = "block";

          umbrellaPreview.removeChild(loadingImg);
        });
        reader.readAsDataURL(file);
      }, 4000);
    }
  });
