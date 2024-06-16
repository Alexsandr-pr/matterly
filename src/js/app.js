
import axios from "axios"




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


    const headerStarted = document.querySelectorAll("[data-started]");
    const modalWrapper = document.querySelectorAll(".modal__wrapper");

    const modalClose = document.querySelectorAll(".close");

    headerStarted.forEach(button => {
        button.addEventListener("click", () => {
            modalWrapper[0].classList.add("active");
        })
    })

    modalClose.forEach(close => {
        close.addEventListener("click", () => {
            document.querySelectorAll(".modal__wrapper").forEach(item => item.classList.remove("active"))
        })
    })

    

    modalWrapper.forEach(wrapper => {
        wrapper.addEventListener("click", (e) => {
            if(e.target.classList.contains("modal__wrapper")) {
                document.querySelectorAll(".modal__wrapper").forEach(item => item.classList.remove("active"))
            }
        })
    })

    


    const buttonScrollToFormsArray = document.querySelectorAll("[data-forms]");

    buttonScrollToFormsArray.forEach(button => {
        const offsetHeightElement = document.querySelector(".main__forms").offsetTop;
        button.addEventListener("click" , () => {
            window.scrollTo({
                top:offsetHeightElement,
                behavior: "smooth"
            })
        })
    })

    async function sendToDataBase(email, name) {
        document.querySelector(".modal__wrapper-1").classList.remove("active");
        try {
            const response = await axios.post("https://matterly-server.onrender.com/api/user", {email, name});

            if (response.status === 200) {
                document.querySelector(".modal__title-send").innerText = `
                    ${response.data.message}
                `;
            }
        } catch (e) {
            document.querySelector(".modal__title-send").innerText = `
                ${e.response.data.message}
            `;
        } finally {
            document.querySelector(".modal__wrapper-2").classList.add("active");
        }
    }
    
    const forms = document.querySelectorAll("form");
    
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const formValues = {};
    
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
    
            const email = formValues.email;
            const name = formValues.name;

            let valid = true;

            const emailInput = form.querySelector('#email');
            const emailError = form.querySelector('#emailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.style.display = 'inline';
                valid = false;
            } else {
                emailError.style.display = 'none';
            }
            if (valid) {
                sendToDataBase(email, name);
                form.reset();
            }
        });
    });
})




