function toggleAccordion(element) {
    const item = element.parentElement;
    const allItems = document.querySelectorAll(".accordion-item");

    allItems.forEach((i) => {
        if (i !== item) {
            i.classList.remove("active");
        }
    });

    item.classList.toggle("active");
}
