
    const draggableImages = document.querySelectorAll(".image");
    let dragged;
  
    draggableImages.forEach((image) => {
      image.addEventListener("dragstart", function(event) {
        dragged = event.target;
        // console.log("dragstart");
      });
      image.addEventListener("dragover", function(event) {
        event.preventDefault();
        // console.log("dragover");
      });
      image.addEventListener("drop", function(event) {
        event.preventDefault();
        // console.log("drop");
        if (event.target.classList.contains("image")) {
        //   console.log("image")
            
            let temp = event.target.style.backgroundImage;
            // console.log("backgroundImage");
            event.target.style.backgroundImage = dragged.style.backgroundImage;
            dragged.style.backgroundImage = temp;
            // console.log("swap");
        }
      });
    });
  

