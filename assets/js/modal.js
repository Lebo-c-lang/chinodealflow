function openModal(index) {
    const config = testimonialsConfig[index];
    console.log(config);
    var modalTitle = document.getElementById("modal-title");
    var modalImageContainer = document.getElementById("modal-images-container");

    modalTitle.textContent = config.title;

    modalImageContainer.innerHTML = "";

    config.images.forEach((image) => {
        var col = document.createElement("div");
        col.className = "item-image col-4 col-md-4 col-lg-3 d-flex justify-content-center align-items-center";
        col.innerHTML = `<img src="${image}" class="img-fluid">`;
        modalImageContainer.appendChild(col);
    });
    var myModal = new bootstrap.Modal(document.getElementById("modal"));
    myModal.show();
}