import getWords from "../../_utils_/getWords";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export default function WordsChart({ lines, poemLength }) {
  const roots = getWords(lines);

  let wordCounts = {}

  roots.forEach((word) => {
    if (wordCounts[word]) {
      wordCounts[word] ++
    } else {
      wordCounts[word] = 1
    }
  })

  const wordCountsArray = Object.entries(wordCounts);
  const sortedWordCountsArray = wordCountsArray.sort((a, b) => b[1] - a[1]);
  const top25WordCountsArray = sortedWordCountsArray.slice(0, 25);
  const top25WordCountsObject = Object.fromEntries(top25WordCountsArray);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
    scale: {
      ticks: {
        precision: 0
      }
    }
  };

  const labels = Object.keys(top25WordCountsObject);

  const data = {
    labels,
    datasets: [
      {
        id: 1,
        label: "Word Roots",
        data: labels.map((label) => top25WordCountsObject[label]),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div id="chart" className={poemLength}>
      <Bar options={options} data={data} />
    </div>
  );
}
