const draggables = document.querySelectorAll(".draggable");

draggables.forEach((draggable) => {
  let offsetX, offsetY;
  let isDragging = false;
  
  draggable.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;
    draggable.style.cursor = "grabbing";
  });
  
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      draggable.style.left = e.clientX - offsetX + "px";
      draggable.style.top = e.clientY - offsetY + "px";
      document.getElementById(draggable.id).style.zIndex=1;     
      console.log("dragged id: "+draggable.id);
    }
  });
  
  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      draggable.style.cursor = "grab";
      document.getElementById(draggable.id).style.zIndex=0; 
    }
  });   
});
function toggler(){
  document.getElementById("form2").style.display="block";
}
function show() {
  document.getElementById("form1").style.visibility = "visible";
  console.log("show clicked!");
  document.getElementById("showButton").style.display = "none";
}
function show2() {
  document.getElementById("form2").style.visibility = "visible";
  console.log("show2 clicked!");
  document.getElementById("showButton2").style.display = "none";
}
function boom() {
  console.log("boom clicked!");

  document.getElementById("form1").style.visibility = "hidden";
  document.getElementById("showButton").style.display = "block";
  document.getElementById("rect-details").style.visibility = "hidden";
  document.getElementById("square-details").style.visibility = "hidden";
  document.getElementById("triangle-details").style.visibility = "hidden";
  document.getElementById("circle-details").style.visibility = "hidden";
}
function boom2() {
  console.log("boom2 clicked!");

  document.getElementById("form2").style.visibility = "hidden";
  document.getElementById("showButton2").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const svgs = document.querySelectorAll("svg");
  const colorPicker = document.querySelector(".color-picker");
  const backdrop = document.querySelector(".backdrop");
  let currentShape = null;

  svgs.forEach((svg) => {
    // Add drag and drop functionality
    svg.setAttribute("draggable", true);

    svg.addEventListener("dragstart", function (event) {
      currentShape = event.currentTarget;
      event.dataTransfer.setData("text/plain", ""); // Necessary for Firefox to initiate the drag
      event.currentTarget.style.cursor = "grabbing"; // Change cursor while dragging
    });

    svg.addEventListener("dragend", function (event) {
      event.currentTarget.style.cursor = "grab"; // Restore cursor after dragging
    });

    // Click event for color picker
    svg.addEventListener("click", function (event) {
      currentShape = event.currentTarget;
      const rect = currentShape.getBoundingClientRect();

      colorPicker.style.top = `${rect.top + window.scrollY}px`;
      colorPicker.style.left = `${rect.left + window.scrollX}px`;
      colorPicker.style.display = "block";
      backdrop.style.display = "block";
    });
  });

  colorPicker.addEventListener("input", function () {
    if (currentShape) {
      currentShape.querySelector("*").setAttribute("fill", colorPicker.value);
    }
  });

  backdrop.addEventListener("click", function () {
    colorPicker.style.display = "none";
    backdrop.style.display = "none";
  });
});

const changer = (id) => {
  console.log("button clicked! id : " + id);
  if (id === "shapeR") {
    let height = prompt("enter dimensions of the shape(60): ");
    let width = prompt("enter width of the shape(80): ");
    let blink = confirm("do you want to apply blink? ");
    let defColor = document.getElementById("shapeR").getAttribute("fill");
    if (height && width) {
      document.getElementById("shapeR").setAttribute("height", height);
      document.getElementById("shapeR").setAttribute("width", width);
      console.log(blink);
      setInterval(() => {
        document.getElementById("shapeR").setAttribute("fill", defColor);
      }, 10000);

      if (blink) {
        a = setInterval(() => {
          document.getElementById(id).setAttribute("fill", "red");
        }, 300);
        b = setInterval(() => {
          document.getElementById(id).setAttribute("fill", "blue");
        }, 500);
        c = setInterval(() => {
          document.getElementById(id).setAttribute("fill", "green");
        }, 700);
        setTimeout(() => {
          clearInterval(a);
          clearInterval(b);
          clearInterval(c);
          document.getElementById(id).setAttribute("fill", defColor);
        }, 3000);
      }
    }
  }
};
