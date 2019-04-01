import './index.scss';
function dropdown(el) {
    const title = el.querySelector(".dropdown-title");
    let isOpened = el.classList.contains("opened");

    function close() {
        isOpened = false;
        el.classList.remove("opened");
        document.removeEventListener("click", close);
    }

    function open() {
        isOpened = true;
        el.classList.add("opened");
        document.addEventListener("click", close);
    }

    function toggle(e) {
        e.stopPropagation();
        if (isOpened) {
            const titleText = e.target.textContent;
            setTitle(e.target.textContent);
            close(titleText);
        } else {
            open();
        }
    }

    function setTitle(text) {
        title.textContent = text;
    }

    el.addEventListener("click", (e) => {
        toggle(e);
    });

    el.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
            toggle(e);
        }
        });
}


dropdown(document.querySelector("#dropdownMenu"));
dropdown(document.querySelector("#dropdownMenu2"));