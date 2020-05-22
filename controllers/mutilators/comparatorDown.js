const nlp = require('compromise');
nlp.extend(require('compromise-numbers'))
nlp.extend(require('compromise-adjectives'))
nlp.extend(require('compromise-sentences'))

const comparatorDown = (doc, hfactor) => {
    let content = nlp(doc)
    content
    .filter(s => {return s.has('Only') || 
    s.has('Just') || 
    s.has('Less than') || 
    s.has('Fewer')}) 
    .forEach(s=> s.numbers() 
         .forEach(number => {
             if (number.numbers().toNumber().text() < 2*hfactor){
                 number.numbers().set(1)}

                 else {number.numbers().subtract(2*hfactor)}
                }))
 
    return console.log(content.text())
}

module.exports = {
    comparatorDown
}