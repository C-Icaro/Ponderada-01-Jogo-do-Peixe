var config = {//Configuração para iniciar o Phaser
type: Phaser.AUTO,
width: 800, //Largura da página
height: 600, //Altura da página

scene: {
    preload: preload,//Roda uma vez, carrega ativos. É executada primeiro
    create: create,//Roda uma vez, configura os elementos carregados
    update: update//Roda em 60Hz. Faz a dinâmica do jogo.
    }
}

// Criação do jogo com a configuração
var game = new Phaser.Game(config);

var personagem;

var posicaoxAnterior = 0;

// Função de pré-carregamento
function preload() {
    this.load.image('Background', 'assets/bg_azul-claro.png'); //Da load na imagem
    this.load.image('Tartaruga', 'assets/tartaruga.png'); 
    this.load.image('Logo', 'assets/logo-inteli_azul.png'); 
}

// Função de criação
function create() {
    this.add.image(400, 300, 'Background'); // Adiciona a imagem no centro
    personagem = this.add.image(400, 300, 'Tartaruga').setOrigin(0.5, 0.5).setScale(0.8); //Guardou "Tartaruga" na variável Personagem
    this.add.image(400, 525, 'Logo').setScale(0.5);

    //Transformação de variável (Deslocado)
    //personagem.setFlip(true, false);
    

}

// Função de atualização
function update() {
    // Código para a lógica contínua do jogo
    personagem.x = this.input.x;
    personagem.y = this.input.y;

    

    if(this.input.x > posicaoxAnterior){
        personagem.setFlip(true, false);//Imagem direita 
    }
    else if(this.input.x < posicaoxAnterior){
        personagem.setFlip(false, false);//Imagem invertida
    }

    posicaoxAnterior = this.input.x;
}