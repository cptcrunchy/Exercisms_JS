function translate(rna){
    var sequence = []
    var exitCodons = {
        "UAA": "UAA",
        "UAG" : "UAG",
        "UGA" : "UGA",
    }
    if(rna == null) return sequence;

    var polyPeptides = {
        "AUG": 'Methionine',
        "UUU": 'Phenylalanine',
        "UUC": 'Phenylalanine',
        "UUA": 'Leucine',
        "UUG": 'Leucine',
        "UCU": 'Serine',
        "UCC": 'Serine',
        "UCA": 'Serine',
        "UCG": 'Serine',
        "UAU": 'Tyrosine',
        "UAC": 'Tyrosine',
        "UGU": 'Cysteine',
        "UGC": 'Cysteine',
        "UGG": 'Tryptophan',
    }

    var rnaArray = rna.split('')
    do {
        var codon = rnaArray.splice(0, 3).join('');
        exitCodons[codon]//?
        if (exitCodons[codon]) {
            break;
        }else if(polyPeptides[codon] == null) {
            throw new Error("Invalid codon");
        } else {
            sequence.push(polyPeptides[codon]);
        }
    }while( rnaArray.length > 0);
    return sequence
}

module.exports = translate;
