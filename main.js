const queryString = [
    '?',
    'limit=2',
    '&',
    'api_key=cdcec2ef-c356-4097-bee3-98bc0fbdeae2'
].join('');
const queryString2 = [
    '?',
    'api_key=cdcec2ef-c356-4097-bee3-98bc0fbdeae2'
].join('');

const URL_RANDOM = `https://api.thecatapi.com/v1/images/search${queryString}`;

const URL_FAVOURITES = `https://api.thecatapi.com/v1/favourites${queryString2}`;

const URL_DEL = `https://api.thecatapi.com/v1/favourites/{favourite_id}${queryString2}`;

const favoriteMichi = document.getElementById('favorite-michi');

const spanError = document.getElementById('error');

async function LoadRandomMichis(){
    try{
        const resultado = await fetch(URL_RANDOM);
        const data = await resultado.json()

        const img1 = document.getElementById('img-random-1');
        const img2 = document.getElementById('img-random-2');
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');

        img1.src = data[0].url;
        img2.src = data[1].url;

        console.log(data, 'random');
        console.log(data, 'random');

        btn1.onclick = () => saveMichi(data[0].id)
        btn2.onclick = () => saveMichi(data[1].id)

    } catch(error){
        alert('Este mensaje no se ha podido mostrar por un error');
        console.log(error);
    }
}

async function LoadFavouriteMichi(){
    const resultado = await fetch(URL_FAVOURITES);
    const data = await resultado.json()
    console.log(data, 'favoritos');
    console.log(data, 'favoritos');
    try{
        const michi = await saveMichi();
        let view = `
            ${data.map(michiup => `
            <article id="article">
            <div>
                <img src='${michiup.image.url}'">
            </div>

            <button 
                ${deleteMichi.michiup}
            class="favorito like" id="abc"><img src="./dislike-icon.png"></div></button>
        </article>
            `)}
        `
        
        favoriteMichi.innerHTML = view;

    } catch(error){
        console.log(error)
    }
}

async function saveMichi(id){
    const res = await fetch(URL_FAVOURITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: id,
        }),
    })
    const data = await res.json();
    console.log(res);
    
    if(res.status !== 200){
        spanError.innerHTML = 'hubo error' + res.status + data.messag
;    }

}

async function deleteMichi(id){
    const del = await fetch(URL_DEL, {
        method: 'DELETE',
    });

    const data = await del.json();

    if (response.status !== 200)
      return (spanError.innerText = "An error has occurred," + data.message);
  
    loadFavouriteCats();
}

LoadRandomMichis();
LoadFavouriteMichi();