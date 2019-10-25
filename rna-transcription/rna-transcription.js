function toRna(dna) {
    const rnaTypes = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    }
 
    return dna.split('').reduce((rna, nucleotide) => {
        if(rnaTypes[nucleotide] == null){
            throw new Error("Invalid input")
        }else{
           return rna + rnaTypes[nucleotide]
        }
    }, "")    
}


module.exports.toRna = toRna