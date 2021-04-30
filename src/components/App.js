import React, { useEffect, useState } from "react";
import Playground from "./Playground";

// var allowPrompt = true;
// let areYouSure = true;

function App() {
  
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `<html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>`
      );
    }, 500);
    return () => clearTimeout(timeOut);
  }, [html, css, js]);


  return (
    <>
      <div className="container top-container">
        <Playground
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Playground
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Playground
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="container">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        />
      </div>
    </>
  );
}

// function leaveSite() {
//   if (allowPrompt) {
//     if (!areYouSure && true) {
//       areYouSure = true;
//       let confirmMsg = "Are you really sure you want to leave site ?";
//       return confirmMsg;
//     }
//   } else {
//     allowPrompt = true;
//   }
// }

export default App;
