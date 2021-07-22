(function () {
	const links = document.querySelectorAll(".header__link")
	const burger = document.querySelector(".burger")
	const menu = document.querySelector(".header__nav")

	burger.addEventListener("click", function () {
		menu.classList.toggle("active")
		this.classList.toggle("burger--active")
	})
})();