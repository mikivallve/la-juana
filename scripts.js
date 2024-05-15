// Get the filter buttons
const filterAll = document.getElementById('filterAll');
const filterConsejoAdministrativo = document.getElementById('filterConsejoAdministrativo');
const filterComisionFiscal = document.getElementById('filterComisionFiscal');

// Get all the card elements
const cards = document.querySelectorAll('.card');

// Add event listeners to the filter buttons
filterAll.addEventListener('click', () => {
    showAllCards();
    toggleActiveClass(filterAll);
});
filterConsejoAdministrativo.addEventListener('click', () => {
    filterCards('Consejo Administrativo');
    toggleActiveClass(filterConsejoAdministrativo);
});
filterComisionFiscal.addEventListener('click', () => {
    filterCards('Comisión Fiscal');
    toggleActiveClass(filterComisionFiscal);
});

// Function to toggle the "active" class on the clicked button
function toggleActiveClass(button) {
    // Remove the "active" class from all buttons
    filterAll.classList.remove('active');
    filterConsejoAdministrativo.classList.remove('active');
    filterComisionFiscal.classList.remove('active');

    // Add the "active" class to the clicked button
    button.classList.add('active');
}

// Function to show all cards
function showAllCards() {
    cards.forEach(card => {
        card.style.display = 'block';
    });
}

// Function to filter the cards
function filterCards(filterValue) {
    cards.forEach(card => {
        const h4 = card.querySelector('h3').textContent.toLowerCase();
        if (h4.includes(filterValue.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


function getH2Text(card) {
    const h2 = card.querySelector('h2');
    return h2 ? h2.textContent.trim() : '';
}

function sortCards() {
    const cards = Array.from(document.querySelectorAll('.card'));
    const sortedCards = cards.sort((a, b) => {
        const textA = getH2Text(a);
        const textB = getH2Text(b);
        return textA.localeCompare(textB);
    });
    return sortedCards;
}

function reorderCards() {
    const sortedCards = sortCards();
    const row = document.querySelector('.row');
    sortedCards.forEach(card => {
        row.appendChild(card);
    });
}

window.onload = reorderCards;