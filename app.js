const contenedor_estrellas = document.getElementById('estrellas')
const contenedor_estrellas2 = document.getElementById('estrellas2')
const contenedor_estrellas3 = document.getElementById('estrellas3')
const contenedor_estrellas4 = document.getElementById('estrellas4')


const crear_puntaje = (contenedor, puntaje) => {
    let decimal = false
    if(puntaje % 1 != 0) {
        puntaje = Math.floor(puntaje);
        decimal = true
    }
    console.log(decimal);
    console.log(puntaje);
    for(let i = 0 ; i < 5 ; i++){
        const star = document.createElement('div')
        if (puntaje > i){
            star.innerHTML = `<i class="fa-solid fa-star"></i>`
            // star.setAttribute('class', 'fa-solid fa-star')
        }else{
            if(decimal){
                star.innerHTML = `<i class="fa-regular fa-star-half-stroke"></i>`
                // star.setAttribute('class', 'fa-solid fa-star-half-stroke')
                decimal = false
            }else{
                star.innerHTML = `<i class="fa-regular fa-star"></i>`
                // star.setAttribute('class', 'fa-regular fa-star')
            }
        }
        contenedor.append(star)
    }
}

crear_puntaje(contenedor_estrellas, 3.5)
crear_puntaje(contenedor_estrellas2, 4)
crear_puntaje(contenedor_estrellas3, 4.5)
crear_puntaje(contenedor_estrellas4, 5)
// crear_puntaje(3.5)