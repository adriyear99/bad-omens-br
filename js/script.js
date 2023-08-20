
let content = [
    {name: "noah", category: 'membros', dark: false },
    {name: "nick", category: 'membros', dark: false },
    {name: "jolly", category: 'membros', dark: false },
    {name: "folio", category: 'membros', dark: false },
    {name: "bad-omens", category: 'albums', dark: false },
    {name: "fgbgfm", category: 'albums', dark: false },
    {name: "tdopom", category: 'albums', dark: false }
]

const isMobile = ( window.innerWidth < 800 ) && ( window.innerHeight < 768 )

toggle = (name,event=null) => {

    // verifica o tipo de evento e dispositivo
    if( (event == 'click' && isMobile) || (event != 'click' && !isMobile) ){

        // seleciona o item pelo id
        let selectedItem
        for(item of content){
            if(item.name == name){
                selectedItem = item
                break
            }
        }
    
        // altera o ícone do item selecionado
        if(!selectedItem.dark){
            selectedItem.dark = true
            document.getElementById(selectedItem.name).src=`../assets/img/${selectedItem.category}/${selectedItem.name}-dark.jpg`
            document.getElementById(`texto-${selectedItem.name}`).style.display = "block"
        } else {
            selectedItem.dark = false
            document.getElementById(selectedItem.name).src=`../assets/img/${selectedItem.category}/${selectedItem.name}.jpg`
            document.getElementById(`texto-${selectedItem.name}`).style.display = "none"
        }
    }

}


// impedir mudança na url
scroll = (id) => {
    const access = document.getElementById(id)
    access.scrollIntoView({behavior: 'smooth'}, true)
}

// ocultar botão de voltar e avançar na primeira e última página
hideArrowFirst = () => {
    const segundoGrupo = document.getElementById('tour2')
    const ultimoGrupo = document.getElementById('tour6')

    if(segundoGrupo.classList.contains('active')){
        document.getElementById('button-previous').style.display = 'none'
        document.getElementById('button-next').style.display = 'flex'
    }

    if(ultimoGrupo.classList.contains('active')){
        document.getElementById('button-next').style.display = 'flex'
    }
}

hideArrowLast = () => {
    const primeiroGrupo = document.getElementById('tour1')
    const penultimoGrupo = document.getElementById('tour5')

    if(primeiroGrupo.classList.contains('active')){
        document.getElementById('button-previous').style.display = 'flex'
        document.getElementById('button-next').style.display = 'flex'
    }

    if(penultimoGrupo.classList.contains('active')){
        document.getElementById('button-next').style.display = 'none'
    }
}