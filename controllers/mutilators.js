const fs = require('fs');
const nlp = require('compromise');
nlp.extend(require('compromise-numbers'))
nlp.extend(require('compromise-adjectives'))
nlp.extend(require('compromise-sentences'))

const sentenceSplitter = (doc) => {
    let content = nlp(doc);
    let choppingBlockSentences = content.sentences()
    return choppingBlockSentences.json()
}

const numberizer = (doc) => {
    let content = nlp(doc)
    content.numbers().add(3)
    return content.text()
}


const comparatorUp = (doc) => {
    let content = nlp(doc)
    content
    .filter(s => {return s.has('more than')})
    .numbers()
    .add(3)
    return content.text()
}

const comparatorDown = (doc) => {
    let content = nlp(doc)
    content
    .filter(s => {return s.has('less than')})
    .numbers()
    .subtract(2)
    return content.text()
}


let prestigeBiz = 
["Alphabet", "Amazon", "McKinsey",  
"The Department of Defense", "Apple, Inc", "Berkshire Hathaway", "Y-combinator",
"IBM", "Alibaba", "Bain", "Netflix", "Disney"]

let prestigeUndergrad = ["Harvard University","Stanford University", "Yale University",  
"Johns Hopkins University", "Cornell University", "Columbia University", "Brown University"]

let prestigeGrad = ["Harvard Law", "Harvard Medical School", "Yale Law", "Yale Medical School",
"Johns Hopkins Medical School", "Stanford Business School", "Harvard Business School"]


const orgUp = (doc) => {
    let orgArray = doc.organizations();  // a Compromise function
    orgArray.map(org => {
        org.replace.with.more.prestigious.org     // how to make this sensitive to TYPES of orgs?
    })
}


let titles = ["big array of common job titles"]
let prestigeTitles = ["big array of fancy job titles"]

const titleUp = (doc) => {
    let titleArray = doc.match(titles) // Match titles from array above
    titleArray.map(org => {
        title.replace.with.more.prestigious.title     // how to make this sensitive to role of title?
    })
}

let prestigePeople = ["big array of famous / important people"]

const peopleUp = (doc) => {
    let peopleArray = doc.people();
    peopleArray.map(person => {
        person.replace.with.more.important.person    // how to make this sensitive to role / type of person?
    })
}

let adverbsMild = ["generally", "certainly", "highly",
 "very", "quite", "rather", "uncannily", "really", "wholly", "abnormally", "especially", "unexpectedly" ]

let adverbsSpicy= ["unprecedentedly", "gobsmackingly",
 "shockingly", "extremely", "enormously", "wildly",
  "seriously", "mortally", "dramatically", "crazily", "blindingly", "radiantly",
"enormously", "intensely", "unequivocally", "tremendously", "unnaturally", "wildly",]

const adverbifyVerb = (choppingBlockSentences) => {
    choppingBlockSentences.map(sentence => {
        if (sentence-has-verb) {
            put-adverb-before-it;                   // depending on hyperbolation level
        }
    })
} 

const adverbifyAdjective = (choppingBlockSentences) => {
    choppingBlockSentences.map(sentence => {
        if (sentence-has-adjective) {
            put-adverb-before-it;                   // depending on hyperbolation level
        }
    })
} 

const inTheHistoryOfTheWorld = (choppingBlockSentences) => {
    choppingBlockSentences.map(sentence => {
        if (sentence-has-adjective+noun-phrase){
            replace.adjective+noun-phrase.with("adjectivest-nounphrase-in-the-history-of-the-world")
        }
    })
}


// Need a way to inject 'always' and 'never'

module.exports = {
    sentenceSplitter,
    numberizer,
    comparatorDown,
    comparatorUp,
    orgUp,
    titleUp,
    peopleUp,
    adverbifyAdjective,
    adverbifyVerb,
    inTheHistoryOfTheWorld
}

const mockText = 
"The quick brown fox was named Abraham Lincoln. \
He had less than 2 friends. \
He has more than ninety friends \
But about this, he felt nothing. \
'Guess I'm meant to be alone,' he said to himself. \
It has been more than nine days since he spoke to his ridiculous mother. \
It's just exhausting. \
He picked 9 blueberries. \
They were luscious. \
He ate them."


comparatorUp(mockText)