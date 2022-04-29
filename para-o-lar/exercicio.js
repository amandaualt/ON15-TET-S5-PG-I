let RNA = []
class DnaTranscriber {
    filamentoConversao(filamento) {
        this.filamento = filamento
    }

    toRna(DNA) {
        let filamentoDNA = DNA.split("")

        for (let letra of filamentoDNA) {
            if (letra == "C") {
                letra = "G"
                RNA.push(letra)

            } else if (letra == "G") {
                letra = "C"
                RNA.push(letra)

            } else if (letra == "T") {
                letra = "A"
                RNA.push(letra)

            } else if (letra == "A") {
                letra = "U"
                RNA.push(letra)
            }
            
        }

       let rnaConvertido = RNA.join("")
       console.log(rnaConvertido)

    }

}

const dnaTranscriber = new DnaTranscriber("ATGCCGAAATTTGCG")

dnaTranscriber.toRna(dnaTranscriber.filamento)

console.log(dnaTranscriber)
