var posRandomH
var posRandomW
var alturaTotal
var larguraTotal
var randomH
var randomW
function posicaoAleatoria(){

    larguraTotal = window.innerWidth - 90
    alturaTotal = window.innerHeight - 90

    posRandomW = Math.floor(larguraTotal * Math.random()) 
    posRandomH = Math.floor(alturaTotal * Math.random()) 
    Math.ceil(posRandomH.toFixed(), posRandomW)

    randomH = posRandomH.toString() + 'px'
    randomW = posRandomW.toString() + 'px'

    console.log(larguraTotal, alturaTotal, randomW, randomH)
}
posicaoAleatoria()

var moscaWidRandom
var moscaWidRandomStr
var moscaWidMin = 60
var moscaWidMax = 90
var i = 15
var vida = 3
function aparecerMosca(){
    var mosca = document.getElementById('mosca');
    
    moscaWidRandom = Math.floor(Math.random() * (moscaWidMax - moscaWidMin + 1)) + moscaWidMin; 
    moscaWidRandomStr = moscaWidRandom.toString() + 'px'

    mosca.style.display = 'block';
    morta = false
    mosca.style.position = 'absolute';
    mosca.style.top = randomH
    mosca.style.left = randomW
    mosca.style.width = moscaWidRandomStr

    console.log(moscaWidRandomStr)
    
   
}
var contagemMoscas = 0

var intervalo = setInterval(() =>{
    posicaoAleatoria() //CHAMADA DAS FUNÇOES DA MOSCA
    aparecerMosca()

    ++ contagemMoscas
    
    console.log(contagemMoscas)
    if(mosca.style.display = 'block' && morta == false && contagemMoscas > 1){
        console.log('morta?')
        if(mosca.display = 'none' && morta == false){
        vida--
        if(vida == 2){ // SE PERDEU UMA VIDA, IMG CORAÇÃO RECEBE IMAGEM CORAÇÃO VAZIO
            v3 = document.getElementById('vida3')
            v3.src = 'imagens/coracao_vazio.png';
        }
        if(vida == 1){
            v1 = document.getElementById('vida2')
            v1.src = 'imagens/coracao_vazio.png';
        }
        if(vida == 0){
            v0 = document.getElementById('vida1')
            v0.src = 'imagens/coracao_vazio.png';
        }

        
    }
    console.log(vida);
    }
    
    
}, 1350, 
)




function pararIntervalo(){
    clearInterval(intervalo)
}
var c = setInterval(function(){  //CRONOMETRO PRINCIPAL
    cron = document.getElementById('cronometro').innerHTML = i;
    i--

    if(i == -1 && vida == 0){
        clearInterval(c) 
        clearInterval(intervalo)
        window.location.href = 'perdeu.html'
        /*PERDEU (DIRECIONAR ATE A PAGINA PERDEU.HTML@@@@@@@@@@@@@@@)*/ 
    }else if(i == -1 && vida !== 0){
        clearInterval(c) 
        clearInterval(intervalo)
        window.location.href = 'vitoria.html'
    } else if (vida == 0){
        clearInterval(c) 
        clearInterval(intervalo)
        window.location.href = 'perdeu.html'
    }
    
    
}, 1000)

var morta


function matarMosca(){ //FUNÇÃO ONCLICK DE QUANDO MATA A MOSCA, MAIS IMPLEMENTAÇÕES POSSIVEIS
    mosca.style.display = 'none'
    morta = true
    contagemMoscas = 0
    
}