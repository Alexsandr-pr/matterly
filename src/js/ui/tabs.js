

const tabs = (tabsTrigger, tabsContent) => {
    const triggers = document.querySelectorAll(tabsTrigger),
        contents = document.querySelectorAll(tabsContent);

    function removeActiveClass() {
        triggers.forEach(trigger => {
            trigger.classList.remove("_active");
        });
        contents.forEach(content => {
            content.classList.remove("_active");
        });
    }

    function addActiveClass(i = 0) {
        triggers[i].classList.add("_active");
        contents[i].classList.add("_active");
    }

    triggers.forEach((item, i) => {
        item.addEventListener("click", (e)=> {
            e.preventDefault();

            removeActiveClass();
            addActiveClass(i);
        });
    });

};

export default tabs;