// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.


function jurosSimples(CI, TJ, TA){
    const calculoDosJuros = CI * TJ * TA
    console.log(`Os juros acumulados em ${TA} meses foram de: ${calculoDosJuros}`);
    return calculoDosJuros
}

jurosSimples(4000, 0.4, 12)


function jurosCompostos(CI, TJ, TA){
    const montante = CI * (1 + TJ) ** TA
    const valorSemCI = montante - CI
    console.log(`Os juros acumulados em ${TA} meses com um investimento inicial de R$${CI} foram de R$${valorSemCI.toFixed(2)}`);
    return montante
    
}
jurosCompostos(4000, 0.4, 12)

