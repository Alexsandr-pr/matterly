function burgerMenu(){
	const header = document.querySelector(".header");
	const buttonBurger = document.querySelector(".icon-menu");

	buttonBurger.addEventListener("click", ()=> {
		if(header.classList.contains("_active")) {
			header.classList.remove("_active");
			document.body.style.overflow = "";
		} else {
			header.classList.add("_active");
			document.body.style.overflow = "hidden";
		}
	});
}
export default burgerMenu;