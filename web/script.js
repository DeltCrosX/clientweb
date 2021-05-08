filterFunction("Leading")
const chips = document.getElementsByClassName("chips");
for (let i = 0; i < chips.length; i++) {
    chips[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
  function playNowFunction(){
    const joinServerSec = document.getElementById("joinSec");
    joinServerSec.scrollIntoView(false);
}
function filterFunction(e){
    var i;
    const staffProfile = document.getElementsByClassName('staffProfile');
    for (i = 0; i < staffProfile.length; i++) {
        RemoveClass(staffProfile[i], "show");
        if (staffProfile[i].className.indexOf(e) > -1) AddClass(staffProfile[i], "show");
    }
}
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  function copy(value) {
    var input = document.createElement("input");
    input.value = value;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input); 
  }
  function copyFunction(){
    const copyButton = document.getElementById("copyButton"),
          flotingContainer = document.getElementById("flotingContainer"),
          flotingOverlay = document.getElementById("floateOverlay");
    copy('play.juanperfect.xyz');
    copyButton.classList.add("copied");
    flotingContainer.classList.add("floatToggle");
    flotingOverlay.classList.add("floatOverlayToggle");
    document.body.style.overflow = "hidden";
  }
  function copyCloseFunction(){
    const flotingContainer = document.getElementById("flotingContainer"),
          flotingOverlay = document.getElementById("floateOverlay");
    flotingContainer.classList.remove("floatToggle");
    flotingOverlay.classList.remove("floatOverlayToggle");
    document.body.style.overflow = "auto";
  }