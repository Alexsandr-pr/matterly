

//  data-spoller-trigger дата атрибут блоку на котором должен идти клик
// data-spollers родительский блок, оболочка меню аккордеон
// data-spollers-content  контент спойлера


const accordion = () => {
	const trigger = document.querySelectorAll("[data-spoller-trigger]");   
	trigger.forEach(item => {
		item.addEventListener("click", ()=> {
			const parent = item.parentElement;
			parent.classList.toggle("active");
			if(parent.classList.contains("active")) {
				item.nextElementSibling.style.cssText = `
					height: ${item.nextElementSibling.scrollHeight}px;
				`;
			} else {
				item.nextElementSibling.style.cssText = `	
					height: 0;
				`;
			}
		});
	});
};
export default accordion;