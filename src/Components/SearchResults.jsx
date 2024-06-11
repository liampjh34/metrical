import Poem from './Poem'
import axios from 'axios'
import { useEffect, useState } from 'react'
import WordsChart from './Chart'

export default function SearchResults({ searchTerm }) {

    const [poems, setPoems] = useState([])
    const [words, setWords] = useState([])
    
    let poetsWords = []
    
    useEffect(() => {
        if (searchTerm !== '') {
            const path = `https://poetrydb.org/author,random/${searchTerm};1`
            axios.get(path)
            .then(({ data }) => {
                setPoems(data)
                data.forEach((poem) => {
                    poetsWords.push(poem.lines.join(' '))}
                )
                setWords(poetsWords.join(' '))
            })
            .catch((error) => {
                console.log(error)
            })
        }

    }, [searchTerm])

    return <>
        {poems.map((poem, index) => {
            return <Poem key={`${poem.title}${index}`} title={poem.title} author={poem.author} lineCount={poem.linecount} lines={poem.lines}/>
        })}
        {words.length > 0 ? <WordsChart words={words}/> : null}
    </>
}