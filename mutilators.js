// const nlp = require('compromise');
// nlp.extend(require('compromise-numbers'))
// nlp.extend(require('compromise-adjectives'))
// nlp.extend(require('compromise-sentences'))

// const sentenceSplitter = (doc) => {
//     let content = nlp(doc);
//     let choppingBlockSentences = content.sentences()
//     return choppingBlockSentences.json()
// }

// const numberizer = (doc) => {
//     let content = nlp(doc)
//     content.numbers().add(3)
//     return content.text()
// }







// let prestigeBiz = 
// ["Alphabet", "Amazon", "McKinsey",  
// "The Department of Defense", "Apple, Inc", "Berkshire Hathaway", "Y-combinator",
// "IBM", "Alibaba", "Bain", "Netflix", "Disney"]

// let prestigeUndergrad = ["Harvard University", "Stanford University", "Yale University",  
// "Johns Hopkins University", "Cornell University", "Columbia University", "Brown University"]

// let prestigeGrad = ["Harvard Law", "Harvard Medical School", "Yale Law", "Yale Medical School",
// "Johns Hopkins Medical School", "Stanford Business School", "Harvard Business School"]


// const orgUp = (doc) => {
//     let content = nlp(doc)
//     let orgs = content.organizations()
//     // let capitals = content.clauses().match('#TitleCase+')
//     // topics = topics.concat(capitals).unique().sort('chron')
//     return content.replace(content.organizations(), "Google").text()
// }

// // Did not work for: "University of ${Place}", 
// // "${Place} University", NRC Health, Custom Medical Solutions, Dow Chemical"
// // Need to look at Compromise's source code & suggest a fix


// let titles = ["big array of common job titles"]
// let prestigeTitles = ["big array of fancy job titles"]

// const titleUp = (doc) => {
//     let titleArray = doc.match(titles) // Match titles from array above
//     titleArray.map(org => {
//         title.replace.with.more.prestigious.title     // how to make this sensitive to role of title?
//     })
// }

// let prestigePeople = ["big array of famous / important people"]

// const peopleUp = (doc) => {
//     let peopleArray = doc.people();
//     peopleArray.map(person => {
//         person.replace.with.more.important.person    // how to make this sensitive to role / type of person?
//     })
// }



// const inTheHistoryOfTheWorld = (choppingBlockSentences) => {
//     choppingBlockSentences.map(sentence => {
//         if (sentence-has-adjective+noun-phrase){
//             replace.adjective+noun-phrase.with("adjectivest-nounphrase-in-the-history-of-the-world")
//         }
//     })
// }

 
// // Need a way to inject 'always' and 'never'

// // module.exports = {
// //     sentenceSplitter,
// //     numberizer,
// //     comparatorDown,
// //     comparatorUp,
// //     orgUp,
// //     titleUp,
// //     peopleUp,
// //     adverbifyAdjective,
// //     adverbifyVerb,
// //     inTheHistoryOfTheWorld
// // }
