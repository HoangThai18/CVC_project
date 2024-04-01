//
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

function myFunctiontwo() {
  document.getElementById("myDropdowntwo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

function myFunctionthree() {
  document.getElementById("myDropdownthree").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

function myFunctionfour() {
  document.getElementById("myDropdownfour").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

function myFunctionfive() {
  document.getElementById("myDropdownfive").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

function myFunctionseven() {
  document.getElementById("myDropdownseven").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

function myFunctiontwo() {
  document.getElementById("myDropdowntwo").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".drop-two")) {
    var dropdowns = document.getElementsByClassName("drop-sub-two");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
const dropdownList = [...dropdownElementList].map(
  (dropdownToggleEl) => new bootstrap.Dropdown(dropdownToggleEl)
);

// lấy tất cả các drop-content và dropbtn
var dropdowns = document.getElementsByClassName("dropdown-content");
var buttons = document.getElementsByClassName("dropbtn");
const dropBtn = document.querySelectorAll("dropbtn");

function hideDrop() {
  dropBtn.classList.remove("show");
}
for (const button of buttons) {
  button.classList.remove("show");
}

buttons.addEventListener("click", hideDrop);

// xử lý sự kiện click trên các dropbtn
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // đóng tất cả các drop-content khác
    for (var j = 0; j < dropdowns.length; j++) {
      dropdowns[j].classList.remove("show");
    }
    // mở drop-content tương ứng
    var dropdown = this.nextElementSibling;
    dropdown.classList.toggle("show");
  });
}

// đóng drop-content khi nhấp chuột bên ngoài drop-content
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }
  }
});

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
