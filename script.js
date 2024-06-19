// List of functions

  function LightModeDenied(event) {


    // Get the element which triggered the event
    let input = event.target;
    console.log(input);

    let status = document.getElementById("flexSwitchCheckReverse").status;

    if (status === "checked")
      {
        // Need to learn how to reset when button toggles off
      document.querySelector("#answer").innerHTML = "";
      document.getElementById("flexSwitchCheckReverse").status = "disabled";
      }
    else
      {
      document.querySelector("#answer").innerHTML = "Nope!";
      document.getElementById("flexSwitchCheckReverse").status = "checked";
      }
  }

    function ShowFloatingDiv(name) {


      console.log(name)
      var weekInfo = document.getElementById("projectPageWindow");
      console.log(weekInfo)
      weekInfo.style.display = "block";
      weekInfo.classList.add("openWindowAnimation");
      if (weekInfo.classList.contains("closeWindowAnimation"))
        {
          weekInfo.classList.remove("closeWindowAnimation");
        }
      var iframe = document.getElementById("projectPageiFrame");
      iframe.src = "/projects/" + name + ".html";

}

    function CloseFloatingDiv() {

      var weekInfo = document.getElementById("projectPageWindow");

      const myTimeout = setTimeout(myGreeting, 100);

      function myGreeting() {
          weekInfo.style.display = "none";

          var iframe = document.getElementById("projectPageiFrame");
          iframe.src = "";

    }
}


function displayImages() {
  // display the 50 images to recover

  let x = []

  for (let i = 0; i < 50; i++) {
    x[i] = document.createElement("IMG");
    let imageNbr = i;
    if (imageNbr < 10) {
      imageNbr = "00" + imageNbr;
    }
    else {
      imageNbr = "0" + imageNbr;
    }

    x[i].setAttribute("src", "../assets/week4/recover/" + imageNbr + ".jpg");
    x[i].setAttribute("width", "auto");
    x[i].setAttribute("height", "auto");
    x[i].setAttribute("alt", "Image " + imageNbr);
    document.getElementById("insertImages").appendChild(x[i]);

  }

  /*
  if (filename < 10)
  filename = "00" + filename

  else
  filename = "0" + filename

  */

}
