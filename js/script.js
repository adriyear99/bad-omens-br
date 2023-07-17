
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