const button = document.querySelector('.menu')
let isHidden = false
//cria uma variável chamada isHidden onde por sua vez ela inicia com o valor false(seu estado inicial) 
// o estado inicial da página



button.addEventListener('click', switchbar)
//a função switchbar resumidamente faz um search com o classlist e um toggle para uma classe pré-setada
//dentro do meu stylesheet pro meu header e main, toda vez que eu clico nesses botões
function switchbar(){
     let header = document.querySelector('.open');
     header.classList.toggle('closed')
     switchitem();
}

function switchitem(){
    //variaveis pré-definidas dos itens que vão mudar de posição ou sumirem/voltarem ao clicar o botão
     const logo= document.querySelector('.top .logo')
     const img = document.querySelector('.perfil img')
     const id = document.querySelector('.id')
     //necessidade do queryselectorall para selecionar todos os paragrafos dentro da ul
     const list = document.querySelectorAll('ul p')
     //variável isHidden entra dentro dessa função como false pré-setado para entrar em um boolean
     if (isHidden) {
        // se o elemento estiver oculto mostre-o
        logo.style.display = "block";
        img.style.display = "block";
        id.style.display = "block";
        //necessidade de iterar os itens da lista para "remover"/"adicionar" todos os ul p
        list.forEach(item => {
            item.style.display= "block";
        });
     }else{
        //se o elemento estiver visivel oculte-o
        logo.style.display = "none";
        img.style.display = "none";
        id.style.display = "none";
        list.forEach(item => {
            item.style.display= "none";
        });
     }

     isHidden = !isHidden 
     //alternando o isHidden de false para true e vice-versa
}

