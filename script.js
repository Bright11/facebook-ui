var settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle() {
	
	settingsmenu.classList.toggle("settings-menu-height");
}

// code for dark mod
var darkBtn = document.getElementById("dark-btn");

darkBtn.onclick = function () {
	darkBtn.classList.toggle("dar-btn-on");
	document.body.classList.toggle("dark-theme");
	if (localStorage.getItem("theme") == "light") {
		localStorage.setItem("theme", "dark");
	} else {
		localStorage.setItem("theme", "light");
	}
}

if (localStorage.getItem("theme") == "light") {
	darkBtn.classList.remove("dak-btn-on");
	document.body.classList.remove("dark-theme")
}
else if (localStorage.getItem("theme") == "dark") {
	darkBtn.classList.add("dak-btn-on");
  document.body.classList.add("dark-theme");
} else {
	localStorage.setItem("theme","light")
}