import nlp from "compromise";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from "react-chartjs-2";

export default function WordsChart({ words }) {
    const regex = /[^\w\s]/gm

    const wordsWithoutPunctuation = regex[Symbol.replace](words, "")
    const original = nlp(wordsWithoutPunctuation)
    
    original.compute('root')
    
    const roots = original.json()[0].terms.map((word) => {
      console.log(word)
        return word.root || word.normal
    })

    
    const lineWithRoots = roots.join(' ')
    
    const wordCounts = roots.reduce((prev, nxt) => {
        prev[nxt] = (prev[nxt] + 1) || 1;
        return prev;
    }, {})

    console.log(wordCounts)

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    )

    const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          }
        },
      };
      
      const labels = Object.keys(wordCounts)

      const data = {
        labels,
        datasets: [
            {
                id: 1,
                label: 'word roots',
                data: labels.map((label) => wordCounts[label]),
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
              }
        ]
      }

    
    return <Bar
        options={options} data={data}
    />
}