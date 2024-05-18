const btnCriar = document.querySelector('#btnCriar')
const listaFilmes = document.querySelector('#listaFilmes')
const inputUsuario = document.querySelector('#inputUsuario')

btnCriar.addEventListener('click',function(infosDoEvent){
    infosDoEvent.preventDefault()

    let novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value

    let btnEditar = document.createElement('button')
    btnEditar.innerText = "Editar"
    btnEditar.addEventListener('click',function(){
        novoFilme.style.color= 'red'
        novoFilme.classList.toggle('item-lista')

    })
    novoFilme.append(btnEditar)

    listaFilmes.append(novoFilme)

    let imagem = document.createElement('img')
    imagem.src="link da imagem"

    inputUsuario.value=""
})

//infosDoEvento.target - pega o html do objeto que foi criado
//infosDoEvento.target.id - pega o id do elemento que foi criado
//infosDoEvento.target.parentNode - pega o elemento pai do objeto que foi clicado