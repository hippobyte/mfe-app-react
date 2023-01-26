import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Box } from "@hippobyte/stylekit";
import { appConcern } from "@hippobyte/mfe-sdk";

function PageTitle(props) {
  return (
    <span className="text-xl px-2">{props.children}</span>
  )
}

function ClickMe(props) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" onClick={props.onClick}>
      click me
    </button>
  )
}

export default function Root(props) {
  const [smileCount, setSmileCount] = React.useState(0);
  const [unicorns, setUnicorns] = React.useState([]);
  const { unicornSubject } = appConcern;

  function handleSmile() {
    setSmileCount(smileCount + 1);
  }

  React.useEffect(() => {
    unicornSubject.subscribe((unicorns) => {
      setUnicorns(unicorns.unicorns);
    })
  }, [])

  return (
    <BrowserRouter>
      <main style={props.style}>
        <h1>I am a <strong>React</strong> micro front-end (MFE) application.</h1>
        <hr className="py-2" />
        <p>I don't do much, but if you <ClickMe onClick={() => handleSmile()} /> you will make me smile.</p>
        
        <Box>
          {[...Array(smileCount)].map((x, i) => <PageTitle key={i}>😊</PageTitle>)}
        </Box>
        <Box>
          {
            unicorns.map((unicorn, i) => (
              <PageTitle key={i}>{unicorn}</PageTitle>
            ))
          }
        </Box>
      </main>
    </BrowserRouter>
  );
}

Root.defaultProps = {
  style: {
    padding: "1.2rem",
  },
}
