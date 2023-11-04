const button = document.querySelector('.menu')

button.addEventListener('click', switchbar)

function switchbar(){
     const header = document.querySelector('open')

     header.classList.toggle('closed')
     header.removeChild('.open ul')

}
