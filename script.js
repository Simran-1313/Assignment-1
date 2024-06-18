document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            // Close any currently active items
            const currentlyActiveItem = document.querySelector(".faq-item.active");
            if (currentlyActiveItem && currentlyActiveItem !== item) {
                currentlyActiveItem.classList.remove("active");
                currentlyActiveItem.querySelector(".faq-answer").style.display = "none";
                currentlyActiveItem.querySelector(".toggle-btn").textContent = "+";
            }

            // Toggle the clicked item
            item.classList.toggle("active");
            const answer = item.querySelector(".faq-answer");
            const toggleBtn = item.querySelector(".toggle-btn");

            if (item.classList.contains("active")) {
                answer.style.display = "block";
                toggleBtn.textContent = "-";
            } else {
                answer.style.display = "none";
                toggleBtn.textContent = "+";
            }
        });
    });
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
