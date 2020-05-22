const nlp = require('compromise');
nlp.extend(require('compromise-numbers'))
nlp.extend(require('compromise-adjectives'))
nlp.extend(require('compromise-sentences'))

const comparatorUp = (doc, hfactor) => {
    let content = nlp(doc)
    content
    .filter(s => {return s.has('more than') || 
    s.has('greater than')}) 
    .forEach(s=> s.numbers()
        .forEach(number => number.numbers()
            .add(1*(Math.floor(Math.random() * Math.pow(4, hfactor))))))
    return content.text()
}

module.exports = {
    comparatorUp
}