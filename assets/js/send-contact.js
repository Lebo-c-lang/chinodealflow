document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của form khi submit

        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries());

        var loading = document.getElementById("loading-overlay");
        loading.classList.add("is-active");

        fetch(
                "https://script.google.com/macros/s/AKfycbxJW4vis7-8BiYmQo8jA_8zZVJGrkzcu76N4CGg-yUuPE-lOozUy2CU3x9ElsOjUEkT/exec", {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formDataObject),
                }
            )
            .then((response) => {
                loading.classList.remove("is-active");

                var myModal = new bootstrap.Modal(
                    document.getElementById("modalSendContact")
                );
                myModal.show();
                form.reset();
            })
            .catch((error) => {
                loading.classList.remove("is-active");
            });
    });
});