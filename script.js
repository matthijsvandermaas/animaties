const starContainer = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars a");
let ratings = JSON.parse(localStorage.getItem("ratings")) || {};

function updateRating() {
    stars.forEach((star) => {
        const rating = parseInt(star.dataset.rating);
        if (ratings[rating]) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}

function highlightStarsOnMouseOver() {
    stars.forEach((star) => {
        star.addEventListener("mouseover", () => {
            const rating = parseInt(star.dataset.rating);
            for (let i = 1; i <= rating; i++) {
                const starElement = document.querySelector(`.stars a[data-rating="${i}"]`);
                starElement.classList.add("click");
            }
        });
        star.addEventListener("mouseout", () => {
            stars.forEach((star) => star.classList.remove("click"));
        });
    });
}

updateRating();

stars.forEach((star) => {
    star.addEventListener("click", () => {
        const rating = parseInt(star.dataset.rating);
        ratings[rating] = !ratings[rating];
        localStorage.setItem("ratings", JSON.stringify(ratings));
        updateRating();
    });
});