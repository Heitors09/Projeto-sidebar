const button = document.querySelector('.menu')
let isHidden = false
//cria uma variável chamada isHidden onde por sua vez ela inicia com o valor false(seu estado inicial) 
// o estado inicial da página

button.addEventListener('click', switchbar)

function switchbar(){
     let header = document.querySelector('.open');
     header.classList.toggle('closed')

     switchitem()
}

function switchitem(){
     const logo= document.querySelector('.top .logo')
     const img = document.querySelector('.perfil img')
     const id = document.querySelector('.id')
     //variável isHidden entra dentro dessa função como false
     if (isHidden) {
        // se o elemento estiver oculto mostre-o
        logo.style.display = "block";
        img.style.display = "block";
        id.style.display = "block";
     }else{
        //se o elemento estiver visivel oculte-o
        logo.style.display = "none";
        img.style.display = "none";
        id.style.display = "none";
     }

     isHidden = !isHidden 
}
