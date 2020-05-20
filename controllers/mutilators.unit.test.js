const fs = require('fs');
const mu = require('./mutilators')
const nlp = require('compromise');
nlp.extend(require('compromise-numbers'))
nlp.extend(require('compromise-adjectives'))
nlp.extend(require('compromise-sentences'))


const mockText = 
"The quick brown fox was named Abraham Lincoln. He had less than 4 friends. But about this, he felt nothing. 'Guess I'm meant to be alone,' he said to himself. It has been more than nine days since he spoke to his ridiculous mother. It's just exhausting. He picked 9 blueberries. They were luscious. He ate them."

describe("Mutilator test suite", () => {

    it("Returns an array with the correct number of sentence objects", () => {
        const test = mu.sentenceSplitter(mockText)
        expect(test.length).toEqual(9)
    })

    it("Adds 3 to every number in a passage", () => {
        const test = mu.numberizer(mockText)
        expect(test).toBe("The quick brown fox was named Abraham Lincoln. He had less than 7 friends. But about this, he felt nothing. 'Guess I'm meant to be alone,' he said to himself. It has been more than twelve days since he spoke to his ridiculous mother. It's just exhausting. He picked 12 blueberries. They were luscious. He ate them.")
    })

    it("Embiggens sentences containing 'more than'", () => {
        const test = mu.comparatorUp(mockText)
        const resultText = "The quick brown fox was named Abraham Lincoln. He had less than 4 friends. But about this, he felt nothing. 'Guess I'm meant to be alone,' he said to himself. It has been more than twelve days since he spoke to his ridiculous mother. It's just exhausting. He picked 9 blueberries. They were luscious. He ate them."
        expect(test).toBe(resultText)
    })

    it("Ensmallens sentences containing 'less than'", () => {
        const test = mu.comparatorDown(mockText)
        const resultText = "The quick brown fox was named Abraham Lincoln. He had less than 2 friends. But about this, he felt nothing. 'Guess I'm meant to be alone,' he said to himself. It has been more than nine days since he spoke to his ridiculous mother. It's just exhausting. He picked 9 blueberries. They were luscious. He ate them."
        expect(test).toBe(resultText)
    })

}) 