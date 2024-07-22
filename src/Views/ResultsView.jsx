import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Poem from "../Components/Poem";
import Chart from "../Components/Chart";
import Header from "../Components/Header";
import getPoem from "../api/api";

export default function ResultsView() {
  const location = useLocation();
  const [poemLoading, setPoemLoading] = useState(true);
  const [poem, setPoem] = useState(null);
  const queryString = location.search;
  const urlParams = new URLSearchParams(queryString);
  const poet = urlParams.get('poet');
  const [poemLength, setPoemLength] = useState(null)
  const resultsContainerRef = useRef(null);

  const fetchPoem = () => {
    console.log("Fetching poem for poet:", poet);
    getPoem(poet)
      .then(poemData => {
        setPoem(poemData);
        setPoemLoading(false);
        console.log("Fetched poem:", poemData);
      })
      .catch(error => {
        console.error("Error fetching poem:", error);
        setPoemLoading(false); // Handle error state if needed
      });
  };

  useEffect(() => {
    console.log("ResultsView mounted");

    if (poet) {
      fetchPoem();
    } else {
      // Reset poem state if poet is null or empty
      setPoem(null);
      setPoemLoading(false);
    }

    return () => {
      console.log("ResultsView unmounted");
      // Cleanup if necessary
    };
  }, [poet]);

  useEffect(() => {

    console.log(poem)
    
    if (poem) {
      const resultsHeight = resultsContainerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      setPoemLength(resultsHeight < viewportHeight ? 'short' : 'long')

    }

  }, [poem])

  console.log("ResultsView render", { poemLoading, poem, poet });

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
      <div id="results-container" ref={resultsContainerRef}>
        <Poem
          title={poem.title}
          author={poem.author}
          lineCount={Number(poem.linecount)}
          lines={poem.lines}
        />
        <Chart lines={poem.lines} poemLength={poemLength}/>
      </div>
    </div>
  );
}