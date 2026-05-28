function openModal(index) {
    const config = testimonialsConfig[index];
    console.log(config);
    var modalTitle = document.getElementById("modal-title");
    var modalImageContainer = document.getElementById("modal-images-container");

    modalTitle.textContent = config.title;

    modalImageContainer.innerHTML = "";

    config.images.forEach((image) => {
        var col = document.createElement("div");
        col.className = "item-image col-4 col-md-4 col-lg-3 d-flex flex-column justify-content-center align-items-center";
        var img = document.createElement("img");
        var labelText = null;

        if (typeof image === "string") {
            img.src = image;
        } else {
            img.src = image.src;
            labelText = image.label;
        }

        img.className = "img-fluid";
        img.alt = labelText || config.title;
        img.loading = "lazy";
        col.appendChild(img);

        if (labelText) {
            var caption = document.createElement("span");
            caption.className = "modal-image-label";
            caption.textContent = labelText;
            col.appendChild(caption);
        }

        modalImageContainer.appendChild(col);
    });

    // Add "more" text
    var moreCol = document.createElement("div");
    moreCol.className = "item-image col-4 col-md-4 col-lg-3 d-flex flex-column justify-content-center align-items-center";
    var moreText = document.createElement("span");
    moreText.textContent = config.moreText;
    moreText.style.cssText = "font-size: 1.8rem; font-weight: 900; color: #fff; text-align: center; line-height: 1.2;";
    moreCol.appendChild(moreText);
    modalImageContainer.appendChild(moreCol);

    var myModal = new bootstrap.Modal(document.getElementById("modal"));
    myModal.show();
}
