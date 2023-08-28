//constantes
const length = document.querySelector(".length input"),
    options = document.querySelector(".lista input"),
    copyIcon = document.querySelector(".copia_senha"),
    senha = document.querySelector("#senha"),
    indicador = document.querySelector(".indicador"),
    generate = document.querySelector(".btn_generator");

const caracteres = {
    minuscula = "abcdefghijklmnopqrstuvwxyz",
    maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeros = "0123456789",
    simbolos = "!@#$%&*()[]{}:;.,~-_<>+"
};

const geraSenha = () =>{
    let senhaStatic = "",
        senhaRandom = "",
        excluiDuplo = false,
        passLength = length.value;

    //validando se os campos foram flegados
    options.forEach((option) => {
        if(option.checked){
            if(option.id !== "excDuplicadas" && option.id !== "espaco"){
                senhaStatic += caracteres[option.id];
            }else if(option.id === "espaco"){
                senhaStatic += ` ${senhaStatic} `;
            } else{
                excluiDuplo = true;
            }
        }
    });

    //validando se os caracteres estão duplicados
    for(let i=0; i < passLength; i++){
        let charRandom = senhaStatic[Math.floor(Math.random() * senhaStatic.length)];

        if(excluiDuplo){
            !senhaRandom.includes(charRandom) || charRandom === "" ? (senhaRandom += charRandom) : i--;    
        } else{
            senhaRandom += charRandom;
        }
    }

    senha += senhaRandom;
}

//atualizando o comprimento da senha
const updateComprimento = () => {
    indicador.id = length.value <= 8 ? "weak"
    :length.value <= 16 ? "medium"
    : "strong";
}

//inserindo valor de comprimento
const updateSlider = () => {
    let valor = document.querySelector(".length span");
    valor.innerHTML = length.value;
    geraSenha();
    updateComprimento();
}
updateSlider();

//função para copiar a senha
const copySenha = () => {
navigator.clipboard.writeText(senha.value);//copiando a senha para o clipboard
}




