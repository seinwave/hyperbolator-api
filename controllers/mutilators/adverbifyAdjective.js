const nlp = require('compromise');
nlp.extend(require('compromise-numbers'))
nlp.extend(require('compromise-adjectives'))
nlp.extend(require('compromise-sentences'))

const adv = require('./adverbs')

const adverbifyAdjective = (doc, hfactor) => {
    let content = nlp(doc)
    switch (hfactor) {
        case 0:
            content.adjectives()
            .forEach(adj => adj
                .prepend(adv.adverbsMild[Math.floor(Math.random() * Math.floor(adv.adverbsMild.length-1))]))
            break;  
        case 1:
            content.adjectives()
            .forEach(adj => adj
                .prepend(adv.adverbsMild[Math.floor(Math.random() * Math.floor(adv.adverbsMild.length-1))]))
            break;
        case 2:
            content.sentences()
            .filter (s => {return s.has('#Adjective')})
            .forEach(s => s.adjectives()
            .forEach(adj => adj
                .prepend(adv.adverbsMild[Math.floor(Math.random() * Math.floor(adv.adverbsMild.length-1))]))
                .prepend(adv.adverbsMild[Math.floor(Math.random() * Math.floor(adv.adverbsMild.length-1))]))
            break;
        case 3:
            content.adjectives()
            .forEach(adj => adj
                .prepend(adv.adverbsSpicy[Math.floor(Math.random() * Math.floor(adv.adverbsSpicy.length-1))]))
            break;    
        case 4:
            content.sentences()
            .filter (s => {return s.has('#Adjective')})
            .forEach(s => s.adjectives()
            .forEach(adj => adj
                .prepend(adv.adverbsMild[Math.floor(Math.random() * Math.floor(adv.adverbsMild.length-1))]))
                .prepend(adv.adverbsSpicy[Math.floor(Math.random() * Math.floor(adv.adverbsSpicy.length-1))]))
            break;
        case 5:
            content.sentences()
            .filter (s => {return s.has('#Adjective')})
            .forEach(s => s.adjectives()
            .forEach(adj => adj
                .prepend(adv.adverbsSpicy[Math.floor(Math.random() * Math.floor(adv.adverbsSpicy.length-1))]))
                .prepend(adv.adverbsSpicy[Math.floor(Math.random() * Math.floor(adv.adverbsSpicy.length-1))]))
            break;
          
    }
    return content.text()
} 


module.exports = {
    adverbifyAdjective
}