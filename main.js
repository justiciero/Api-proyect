const querySrting = [
    '?',
    'limit=3',
].join('');

const URL = `https://api.thecatapi.com/v1/images/search${querySrting}`;

const btn = document.getElementById('btn-recargar');
    document.addEventListener('click', recargar);


async function recargar(btn){
    try{
        const resultado = await fetch(URL);
        const data = await resultado.json()

        const img1 = document.getElementById('img-random-1');
        const img2 = document.getElementById('img-random-2');
        const img3 = document.getElementById('img-random-3');

        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;
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