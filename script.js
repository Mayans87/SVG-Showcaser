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
    let defColor =   document.getElementById("shapeR").getAttribute("fill");
    if (height && width) {
      document.getElementById("shapeR").setAttribute("height", height);
      document.getElementById("shapeR").setAttribute("width", width);
      console.log(blink);

      if (blink) {
        a = setInterval(() => {
          document.getElementById(id).setAttribute("fill", "red");
        },300);
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
          document.getElementById(id).setAttribute("fill",defColor);
        }, 3000);
      }
    }
  }

  if (id === "shapeC") {
    let c = prompt(
      "enter radius of the circle(40): " +
        document.getElementById("shapeC").getAttribute("r")
    );
    if (c) {
      document.getElementById(id).setAttribute("r", c);
    }
  }
  if (id === "shapeP") {
    let p = prompt("enter point for triangle(50,10 10,90 90,90): ");

    if (points) {
      document.getElementById(id).setAttribute("points", p);
    }
  }
  if (id === "shapeE") {
    let cx = prompt("enter cx(50): ");
    let cy = prompt("enter cy(50): ");
    let rx = prompt("enter rx(40): ");
    let ry = prompt("enter ry(20): ");
    if (cx || cy || rx || ry) {
      document.getElementById(id).setAttribute("cx", cx);
      document.getElementById(id).setAttribute("cy", cy);
      document.getElementById(id).setAttribute("rx", rx);
      document.getElementById(id).setAttribute("ry", ry);
    }
  }
  if (id === "shapeL") {
    let x1 = prompt("enter x1(10): ");
    let y1 = prompt("enter y1(10): ");
    let x2 = prompt("enter x2(90): ");
    let y2 = prompt("enter y2(90): ");
    if (x1 || y1 || x2 || y2) {
      document.getElementById(id).setAttribute("x1", x1);
      document.getElementById(id).setAttribute("x2", x2);
      document.getElementById(id).setAttribute("y1", y1);
      document.getElementById(id).setAttribute("y2", y2);
    }
  }
};
