import nlp from "compromise";
import { removeStopwords } from 'stopword'

export default function getWords(poem) {
  const joinedPoem = poem.join(" ");
  
  const dashRegex = /-/gm
  const wordsWithoutDashes = dashRegex[Symbol.replace](joinedPoem, " ")

  const ellipsesRegex = /\.\.\./gm
  const wordsWithoutEllipses = ellipsesRegex[Symbol.replace](wordsWithoutDashes, " ")

  const punctuationRemoverRegex = /[^\w\s]/gm
  const wordsWithoutPunctuation = punctuationRemoverRegex[Symbol.replace](wordsWithoutEllipses, "")
  
  const withoutStopWords = removeStopwords(wordsWithoutPunctuation.trim().split(' '))

  const original = nlp(withoutStopWords.join(' '))
  original.compute('root')
    
  const roots = original.json()[0].terms.map((word) => {
      return word.root || word.normal
  })

  return roots
}
