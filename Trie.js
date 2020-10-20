
const buildTrie = (text)=>{
    const trie={}
    const separators = {
        ' ': true,
        '.': true,
        ',': true,
    }
    for (let i=0;i<text.length;i++){
        let currentLetter = trie
        const startingIndex = i
        while(text[i] && !separators[text[i]]){
            currentLetter[text[i]] = currentLetter[text[i]] || {indexes:[]}
            currentLetter = currentLetter[text[i]]
            currentLetter.indexes.push(startingIndex)
            i++
        }
    }
    return trie
}

trie1 = buildTrie("el verano es una epoca esperada por muchos, pero indeseable para otros tantos. no existe un acuerdo entre las distintas opiniones que existen para las estaciones calidas y frias. en cosa de gustos no hay nada escrito")
trie2 = buildTrie("de es espacial desde espacio")
// console.log(trie1)

const search =(str,trie)=>{
    let node=trie
    for(let i of str){
        if(node[i]){
            node=node[i]
        }
        else{
            node={}
        }
    }
    if(node.indexes){
        return(node.indexes)
    }
}

console.log(search("es",trie1))
console.log(search("es",trie2))