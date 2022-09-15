
// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.



const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}


const caixaA = (prop) => {
    const array = []
    for (let i in prop) {
        array.push(i.toUpperCase())
    }
    return array
}
console.log(caixaA(objeto))






// 2. A segunda deve retornar os valores do objeto como texto corrido.


const textoC = (valores) => {
    const array = [valores.nome, valores.profissao, valores.username, valores.senha]
    const nArray = array.join('')
    
    return nArray
}
console.log(textoC(objeto))



// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.


const callB = (objeto,prop,valores) => {
    console.log(prop(objeto)) 
    console.log(valores(objeto))
    
}
callB(objeto,caixaA,textoC)


// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

