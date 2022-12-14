import PortaModel from "../model/porta";

export function criarPortas(qtde: number, portaComPresente: number): PortaModel[] {
    return Array.from({length: qtde}, (_, i) => { // o simbolo de _ significa que não importa o valor da variável ou do parâmetro, visto que todos são indefinidos.
        const numero = i + 1
        const temPresente = numero === portaComPresente
        return new PortaModel(numero, temPresente)
    })
}


export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero 

        if(igualAModificada){
            return portaModificada
        }else{
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar() 
        }
    })
}