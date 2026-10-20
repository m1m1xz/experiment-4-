
const searchInput = document.getElementById("topicSearch");
const cards = document.querySelectorAll(".topic-card");
const searchMessage = document.getElementById("searchMessage");

searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase().trim();
    let visibleCards = 0;

    cards.forEach(function (card) {
        const text = (
            card.innerText + " " + card.dataset.keywords
        ).toLowerCase();

        if (text.includes(query)) {
            card.hidden = false;
            visibleCards++;
        } else {
            card.hidden = true;
        }
    });

    if (visibleCards === 0) {
        searchMessage.textContent = "No topics found. Try another keyword.";
    } else {
        searchMessage.textContent = query
            ? visibleCards + " topic(s) found."
            : "";
    }
});
