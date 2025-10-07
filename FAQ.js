const cards = document.querySelectorAll('.card'); 
    let currentIndex = 0;  
    const itemsPerPage = 3;

function showCards() {
    cards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + itemsPerPage) {
          card.style.display = "block"; // Mostra
        } else {
          card.style.display = "none"; // Nascondi
        }
    });
}
showCards();

//next card
document.getElementById('next').addEventListener('click', () => {
    if (currentIndex + itemsPerPage < cards.length) {
        currentIndex += itemsPerPage; 
        showCards();
    }
});

//prev card
document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex - itemsPerPage >= 0) {
        currentIndex -= itemsPerPage; 
        showCards();
    }
});

//serch
document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? "block" : "none";
    });
});