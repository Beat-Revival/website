document.addEventListener("DOMContentLoaded", function () {
  let today = new Date();
  let shutdownDate = new Date("2023-12-08");

  let timeDifference = today.getTime() - shutdownDate.getTime();
  let daysDifference = Math.round(timeDifference / (1000 * 3600 * 24));
  let textString = `The Mirror's Edge Catalyst game servers were shut down <strong>${daysDifference} days ago.</strong>`;

  let descElements = document.getElementsByClassName("desc");

  if (descElements.length > 0) {
    let descElement = descElements[0];

    // Create a new div for shutdowntextElement
    let shutdowntextElement = document.createElement("div");
    shutdowntextElement.id = "shutdowntext";

    // Apply italic style to the text
    shutdowntextElement.innerHTML = `<em>${textString}</em>`;

    // Append the new div to desc
    descElement.appendChild(shutdowntextElement);
  } else {
    console.error("Element with class 'desc' not found");
  }
});
