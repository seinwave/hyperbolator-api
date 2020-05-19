const fs = require('fs');
const mu = require('./mutilators')
const nlp = require('compromise');
nlp.extend(require('compromise-numbers'))
nlp.extend(require('compromise-adjectives'))
nlp.extend(require('compromise-sentences'))


const mockText = 
"The quick brown fox was named Abraham Lincoln. \
He had less than 2 friends. \
But about this, he felt nothing. \
'Guess I'm meant to be alone,' he said to himself. \
It has been more than nine days since he spoke to his ridiculous mother. \
It's just exhausting. \
He picked 9 blueberries. \
They were luscious. \
He ate them."

describe("Mutilator test suite", () => {

    it("Returns an array with the correct number of sentence objects", () => {
        const test = mu.sentenceSplitter(mockText)
        expect(test.length).toEqual(9)
    })

    it("Returns an array with the correct number of numbers", () => {
        const test = mu.numberizer(mockText)
        expect(test).toBe("The quick brown fox was named Abraham Lincoln. He had less than 5 friends. But about this, he felt nothing. 'Guess I'm meant to be alone,' he said to himself. It has been more than twelve days since he spoke to his ridiculous mother. It's just exhausting. He picked 12 blueberries. They were luscious. He ate them.")
    })

    // it("Modifies sentences containing comparative words AND numbers", () => {
    //     const test = mu.comparatorUp(mockText)
    //     expect(test).toBe("It has been more than twelve days since he spoke to his ridiculous mother.")
    // })


}) 