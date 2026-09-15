const openButton = document.querySelectorAll(".button_open");
const closeButton = document.querySelectorAll(".button_close");


openButton.forEach((openButton) => {
    openButton.addEventListener("click", () => {
        const projectInfo = openButton.nextElementSibling;

        projectInfo.classList.add("active");
        document.body.classList.add("no-scroll");
    });
});

closeButton.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        const projectInfo = closeButton.parentElement;

        projectInfo.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
});
