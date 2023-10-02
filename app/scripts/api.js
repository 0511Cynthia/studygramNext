let animes;
const imagenes = document.getElementById("imagenes");
const btn = document.getElementById('btnAnime');

//función de la api
async function logMovies() {
    const response = await fetch("https://api.jikan.moe/v4/anime?q=naruto&sfw");
    const movies = await response.json();
    const data = movies.data;
    console.log(movies);
    animes = [data[0], data[1], data[2], data[3]];
  }
// rendenderización
  function renderAnimes(){
    console.log(animes);
    animes.map((anime) => { 
    const animeCard = document.createElement("div");
    animeCard.classList.add('animeCard');
    animeCard.innerHTML = `<img src="${anime.images.jpg.image_url}"/>
    <h6>${anime.title}</h6>`;
    imagenes.appendChild(animeCard);
    });
  }
// función del botón
  async function getAnimes(){
    btn.disabled=true;
    await logMovies();
    renderAnimes();
  }

  btn.addEventListener("click", getAnimes, false);

//4 funciones



