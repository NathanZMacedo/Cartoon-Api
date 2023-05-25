var urlAnimations = `https://api.sampleapis.com/movies/animation`

fetch(urlAnimations)
    .then(res=>res.json())
        .then(data=>PopularATela(data))
        .catch(erro =>console.log(erro))

function PopularATela(data) {
    const div = document.getElementById('animationsList');
    const allCards = data.map(item=>` 
        <div>
            <h2 class="title1">${item.title}</h2>
            <img src="${item.posterURL}" class="animationsImage" >
        </div>
    `).join('');
    div.innerHTML = allCards;
}

