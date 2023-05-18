var urlCartoon = `https://api.sampleapis.com/cartoons/cartoons2D`

fetch(urlCartoon)
    .then(res=>res.json())
    .then(data=>PopularATela(data))
    .catch(erro =>console.log(erro))

function PopularATela(data){
    const div = document.getElementById('cartoonsList');
    const allCards = data.map(item=>` 
        <div>
            <h2 class="title">${item.title}</h2>
            <img src="${item.image}" class="cartoonsImage" >
            <h3>episodes ${item.episodes}</h3>
            <h3> Genre: ${item.genre}</h3>
        </div>
    `).join('');
    div.innerHTML = allCards;
}
