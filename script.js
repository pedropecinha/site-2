function mostrarMensagem() {

    const mensagens = [
        "O respeito começa quando reconhecemos o valor de cada pessoa.",
        "Nossa diversidade é uma força. Diga não ao racismo!",
        "Combater o preconceito também é uma forma de cuidar do próximo.",
        "Todas as pessoas merecem respeito, dignidade e igualdade.",
        "Não seja indiferente. Escute, aprenda e ajude a combater o racismo."
    ];

    const mensagem =
        mensagens[Math.floor(Math.random() * mensagens.length)];

    alert(mensagem);
}
