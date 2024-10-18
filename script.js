document.addEventListener("DOMContentLoaded", () => {
    const filterItems = document.querySelectorAll(".filter ul li");
    const allFilter = document.querySelector(".all-filter");
    const images = document.querySelectorAll(".images img");
    const imagestool = document.querySelectorAll(".image-container img");
    const tooltip = document.getElementById("tooltip");

    // Mostra tutte le immagini all'apertura del sito
    images.forEach(img => {
        img.classList.add('show'); // Assicurati che tutte le immagini siano visibili
    });

    filterItems.forEach(item => {
        item.addEventListener("click", () => {
            const category = item.textContent.trim();

            filterItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Mostra o nascondi le immagini in base alla categoria
            images.forEach(img => {
                if (category === "ALL" || img.getAttribute('data-category') === category) {
                    img.classList.add('show'); // Applica la classe per mostrare l'immagine
                } else {
                    img.classList.remove('show'); // Rimuovi la classe per nascondere l'immagine
                }
            });

            // Gestisci la visibilità dell'elemento "ALL"
            if (category !== "ALL") {
                allFilter.style.display = "block"; // Mostra "ALL" quando un filtro è attivo
                setTimeout(() => {
                    allFilter.style.opacity = "1"; // Animazione di apparizione
                }, 10); // Piccola attesa per permettere l'animazione
            } else {
                allFilter.style.opacity = "0"; // Nascondi "ALL" se è selezionato
                setTimeout(() => {
                    allFilter.style.display = "none"; // Nascondi completamente dopo l'animazione
                }, 500); // Aspetta la fine dell'animazione
            }
        });
    });

    // Tooltip
    imagestool.forEach(image => {
        const container = image.parentElement; // Ottieni il contenitore dell'immagine

        image.addEventListener("mouseenter", () => {
            const text = container.querySelector(".image-text").textContent; // Ottieni il testo dall'elemento image-text
            tooltip.textContent = text; // Imposta il testo del tooltip
            tooltip.style.opacity = 1; // Rendi il tooltip visibile
        });

        image.addEventListener("mousemove", (e) => {
            tooltip.style.left = e.pageX + 10 + "px"; // Posiziona il tooltip a destra del cursore
            tooltip.style.top = e.pageY + 10 + "px"; // Posiziona il tooltip sotto il cursore
        });

        image.addEventListener("mouseleave", () => {
            tooltip.style.opacity = 0; // Nascondi il tooltip
        });
    });
});

/*
window.addEventListener("load", function() {

    const loader = document.querySelector(".loader");
    console.log("Loader complete"); // Log per verificare il caricamento
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 1000);
});*/

const imagesproj = [
    '../src/01_01.png',
    '../src/01_02.png',
    '../src/01_01.png',
    '../src/01_01.png',
    '../src/01_01.png'
];
let currentIndex = 0;

function changeImage(direction) {
    currentIndex += direction;
    // Cicla l'indice
    if (currentIndex < 0) {
        currentIndex = imagesproj.length - 1; // Torna all'ultima immagine
    } else if (currentIndex >= imagesproj.length) {
        currentIndex = 0; // Torna alla prima immagine
    }
    document.getElementById('mainImage').src = imagesproj[currentIndex];
}