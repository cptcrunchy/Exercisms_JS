export const convert = num =>{
    let dropSound = {
        3: "Pling",
        5: "Plang",
        7: "Plong"
    }
    const response = Object.entries(dropSound).reduce( (s, [k,v]) => (num % k === 0) ? s+v : s, '');

    return response || num.toString();
} 


