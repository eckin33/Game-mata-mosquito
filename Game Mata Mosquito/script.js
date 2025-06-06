function verificarNivel(){
    var nivel = document.getElementById('select');

    if(nivel.value === 'Fácil'){
        console.log('teste')
        window.location.href ='facil.html'
        
    } else if (nivel.value === 'Dificil'){
        window.location.href = 'normal.html'
    } else if (nivel.value === 'Chuck'){
        window.location.href = 'chucknorris.html'
    } else if( nivel.value === ''){
        alert('Por favor, escolha um nível pra jogar.')

    }
}
