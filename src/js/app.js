





document.addEventListener("DOMContentLoaded", () => {
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
    accordion();

   

    const buttonToTop = document.querySelector(".button-top");

    buttonToTop.addEventListener("click", ()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    const buttons = document.querySelectorAll(".button");


    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.add("clicked");
            setTimeout(() => {
                button.classList.remove("clicked");
            }, [100])
        })
    })


    const headerStarted = document.querySelector("#started");
    const modalWrapper = document.querySelector(".modal__wrapper");
    const modalClose = document.querySelector(".close")

    headerStarted.addEventListener("click", () => {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "16px";
        modalWrapper.classList.add("active");
    })
    modalClose.addEventListener("click", () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "0px";
        modalWrapper.classList.remove("active");
    })
    modalWrapper.addEventListener("click", (e) => {
        if(e.target.classList.contains("modal__wrapper")) {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "0px";
            modalWrapper.classList.remove("active");
        }
    })
})




