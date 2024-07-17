import { useSearchParams } from "react-router-dom";
import Poem from "../Components/Poem";
import Chart from "../Components/Chart";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import getPoem from "../api/api";

export default function ResultsView() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [poemLoading, setPoemLoading] = useState(true);
  const [poem, setPoem] = useState(null);
  console.log(poem, "poem");

  useEffect(() => {
    getPoem(searchParams.get("poet")).then((poem) => {
      setPoem(poem);
      setPoemLoading(false);
    });
  }, [searchParams.get("poet")]);

  if (poemLoading) {
    return (
      <div id="results-view">
        <Header />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div id="results-view">
      <Header />
      <div id="results-container">
        <Poem
          title={poem.title}
          author={poem.author}
          lineCount={Number(poem.linecount)}
          lines={poem.lines}
        />
        <Chart lines={poem.lines}/>
      </div>
    </div>
  );
}
