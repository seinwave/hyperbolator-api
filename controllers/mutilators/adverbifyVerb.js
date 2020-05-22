const nlp = require('compromise');
nlp.extend(require('compromise-numbers'))
nlp.extend(require('compromise-adjectives'))
nlp.extend(require('compromise-sentences'))

const adv = require('./adverbs')

const adverbifyVerb = (doc, hfactor) => {
    let content = nlp(doc)
    switch (hfactor) {
        case 0:
            content.verbs()
            .forEach(verb => verb
                .append(adv.adverbsMild[Math.floor(Math.random() * Math.floor(adv.adverbsMild.length-1))]))
            break;  
        case 1:
            content.verbs()
            .forEach(verb => verb
                .append(adv.adverbsMild[Math.floor(Math.random() * Math.floor(adv.adverbsMild.length-1))]))
            break;
        case 2:
            content.verbs()
            .forEach(verb => verb
                .append(adv.adverbsMild[Math.floor(Math.random() * Math.floor(adv.adverbsMild.length-1))]))
            break;
        case 3:
            content.verbs()
            .forEach(verb => verb
                .append(adv.adverbsSpicy[Math.floor(Math.random() * Math.floor(adv.adverbsMild.length-1))]))
            break;    
        case 4:
            content.verbs()
            .forEach(verb => verb
                .append(adv.adverbsMild[Math.floor(Math.random() * Math.floor(adv.adverbsMild.length-1))]))
                .append(adv.adverbsSpicy[Math.floor(Math.random() * Math.floor(adv.adverbsSpicy.length-1))])
            break;
        case 5:
            content.verbs()
            .forEach(verb => verb
                .append(adv.adverbsSpicy[Math.floor(Math.random() * Math.floor(adv.adverbsSpicy.length-1))]))
                .append(adv.adverbsSpicy[Math.floor(Math.random() * Math.floor(adv.adverbsSpicy.length-1))])
            break;
          
    }
    return content.text()
}

module.exports = {
    adverbifyVerb
}
