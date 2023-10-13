const pictures = [...document.querySelectorAll(".picture")];

function addOrRemovePicturesClasses(task) {
    pictures.forEach((item, index) => {
        switch (index) {
            case 0: task === "remove" ? item.classList.remove("prev") : item.classList.add("prev"); break;
            case 1: task === "remove" ? item.classList.remove("active-1") : item.classList.add("active-1"); break;
            case 2: task === "remove" ? item.classList.remove("active-2") : item.classList.add("active-2"); break;
            case 3: task === "remove" ? item.classList.remove("active-3") : item.classList.add("active-3"); break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9: task === "remove" ? item.classList.remove("next") : item.classList.add("next"); break;
            default: console.log("done my gee");
        }
    })
}

function rotateCarousel() {
    addOrRemovePicturesClasses("remove");
    let first = pictures[0];
    pictures.shift();
    pictures.push(first);
    addOrRemovePicturesClasses("add");
}

setInterval(rotateCarousel, 2000);