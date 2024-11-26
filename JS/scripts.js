document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const movieList = document.querySelector('.movie-list');

    // Lista de filmes simulada
    const movies = [
        { title: "Stranger Things", image: "img/stranger-things.jpg" },
        { title: "Breaking Bad", image: "img/breaking-bad.jpg" },
        { title: "The Witcher", image: "img/the-witcher.jpg" },
        { title: "Money Heist", image: "img/money-heist.jpg" },
        { title: "Dark", image: "img/dark.jpg" },
        { title: "Squid Game", image: "img/squid-game.jpg" },
    ];

    // Renderizar os filmes no carrossel
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;
        movieList.appendChild(movieDiv);
    });

    // Navegação no carrossel
    prevButton.addEventListener('click', () => {
        movieList.scrollBy({
            left: -220,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        movieList.scrollBy({
            left: 220,
            behavior: 'smooth'
        });
    });
});
