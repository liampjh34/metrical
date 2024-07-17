import getWords from "../../_utils_/getWords"
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

export default function WordsChart({ lines }) {

  const roots = getWords(lines)

  const wordCounts = roots.reduce((prev, nxt) => {
    prev[nxt] = (prev[nxt] + 1) || 1;
    return prev;
}, {})

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

    console.log(data)

    return <div id='chart'>
      <Bar
          options={options} data={data}
      />
    </div>
}