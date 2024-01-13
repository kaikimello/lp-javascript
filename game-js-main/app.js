alert('Boas vindas ao jogo do número secreto ');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;

// Enquanto o chute não for igual ao número secreto 
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // Se o chute for igual a número secreto 
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}


