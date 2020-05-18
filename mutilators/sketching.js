
// This is all pseudocode
// Trying to get my thoughts together for hyperbolation routes
// Should put a hyperbolation level as the second argument for every function


const sentenceSplitter = (doc) => {
    let choppingBlockSentences = doc.sentences().out.asArray;
    return choppingBlockSentences
}


const comparatorUp = (choppingBlockSentences) => {
    choppingBlockSentences.map(sentence => {
        if (number & "more than" in sentence) {
            number.embiggen.by.undecided.factor
        }
    })
}

const comparatorDown = (choppingBlockSentences) => {
    choppingBlockSentences.map(sentence => {
        if (number & "less than" || "fewer than" in sentence) {
            number.ensmallen.by.undecided.factor
        }
    })
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

// 