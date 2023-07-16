let noahDark = false;
let nickDark = false;
let jollyDark = false;
let folioDark = false;
let badOmensDark = false;
let fgbgfmDark = false;
let tdopomDark = false;

voltar = () => {
    window.location.href="../index.html"
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