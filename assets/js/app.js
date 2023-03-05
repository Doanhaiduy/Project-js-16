let items = document.querySelectorAll(".item");

let height_curr = 0;
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", () => {
        if (items[i].classList.contains("active")) {
            for (let k = items.length - 1; k >= i; k--) {
                if (items[k].classList.contains("active")) {
                    items[k].classList.remove("active");
                }
            }
            items[i].classList.remove("active");
            document.querySelector(".percent").style.height = `${height_curr - 250 / 100}% `;
            console.log(height_curr);
            document.querySelector("h2").innerText = `${parseFloat(2 - 250 / 100)}L`;

            return;
        } else {
            for (let j = 0; j < i + 1; j++) {
                items[j].classList.add("active");
            }
            document.querySelector(".percent").style.height = `${parseInt(items[i].getAttribute("data-set"))}% `;
            document.querySelector("h2").innerText = `${parseFloat(
                2 - (items[i].getAttribute("data-set") / 100) * 2
            )}L`;

            if (parseInt(items[i].getAttribute("data-set")) >= 87.5) {
                document.querySelector(".result").classList.add("active");
            } else {
                document.querySelector(".result").classList.remove("active");
            }
            document.querySelector(".percent").innerText = items[i].getAttribute("data-set") + "%";
            height_curr += 250 / 100;
        }
    });
}
