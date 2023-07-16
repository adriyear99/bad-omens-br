
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
                console.log(selectedItem)
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


toggleNoah = () => {
    noahDark = !noahDark
    if(noahDark){
        document.getElementById("noah").src=`../assets/img/membros/noah-dark.jpg`
        document.getElementById("texto-noah").style.display = "block"
    } else {
        document.getElementById("noah").src=`../assets/img/membros/noah.jpg`
        document.getElementById("texto-noah").style.display = "none"
    }
}

toggleNick = () => {    
    nickDark = !nickDark
    if(nickDark){
        document.getElementById("nick").src=`../assets/img/membros/nick-dark.jpg`
        document.getElementById("texto-nick").style.display = "block"
    } else {
        document.getElementById("nick").src=`../assets/img/membros/nick.jpg`
        document.getElementById("texto-nick").style.display = "none"
    }
}

toggleJolly = () => {    
    jollyDark = !jollyDark
    if(jollyDark){
        document.getElementById("jolly").src=`../assets/img/membros/jolly-dark.jpg`
        document.getElementById("texto-jolly").style.display = "block"
    } else {
        document.getElementById("jolly").src=`../assets/img/membros/jolly.jpg`
        document.getElementById("texto-jolly").style.display = "none"
    }
}

toggleFolio = () => {    
    folioDark = !folioDark
    if(folioDark){
        document.getElementById("folio").src=`../assets/img/membros/folio-dark.jpg`
        document.getElementById("texto-folio").style.display = "block"
    } else {
        document.getElementById("folio").src=`../assets/img/membros/folio.jpg`
        document.getElementById("texto-folio").style.display = "none"
    }
}

toggleBadOmens = () => {    
    badOmensDark = !badOmensDark
    if(badOmensDark){
        document.getElementById("bad-omens").src=`../assets/img/albums/bad-omens-dark.jpg`
        document.getElementById("texto-bad-omens").style.display = "block"
    } else {
        document.getElementById("bad-omens").src=`../assets/img/albums/bad-omens.jpg`
        document.getElementById("texto-bad-omens").style.display = "none"
    }
}

toggleFGBGFM = () => {    
    fgbgfmDark = !fgbgfmDark
    if(fgbgfmDark){
        document.getElementById("fgbgfm").src=`../assets/img/albums/fgbgfm-dark.jpg`
        document.getElementById("texto-fgbgfm").style.display = "block"
    } else {
        document.getElementById("fgbgfm").src=`../assets/img/albums/fgbgfm.jpg`
        document.getElementById("texto-fgbgfm").style.display = "none"
    }
}

toggleTDOPOM = () => {    
    tdopomDark = !tdopomDark
    if(tdopomDark){
        document.getElementById("tdopom").src=`../assets/img/albums/tdopom-dark.jpg`
        document.getElementById("texto-tdopom").style.display = "block"
    } else {
        document.getElementById("tdopom").src=`../assets/img/albums/tdopom.jpg`
        document.getElementById("texto-tdopom").style.display = "none"
    }
}