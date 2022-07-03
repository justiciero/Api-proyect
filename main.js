const URL = ' https://api.thecatapi.com/v1/images/search';

const btn = document.getElementById('btn-recargar');
    document.addEventListener('click', recargar);

const imgRandom = document.getElementById('img-random');

async function recargar(btn){
    try{
        const resultado = await fetch(URL);
        const data = await resultado.json()
        const img = imgRandom;
        img.src = data[0].url;
    } catch(error){
        alert('Este mensaje no se ha podido mostrar por un error');
        console.log(error);
    }
}

recargar();



// function recargar(btn){
    
    //     fetch(URL)
    //         .then(res => res.json())
    //         .then(data =>{
//             const img = document.querySelector('img');
//             img.src = data[0].url;
//         });
// }

// recargar();