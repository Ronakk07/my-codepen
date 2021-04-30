import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/keymap/sublime";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint.css';
// import 'codemirror/addon/hint/html-hint';
// import 'codemirror/addon/hint/xml-hint';
import 'codemirror/addon/hint/anyword-hint';
import "codemirror/addon/edit/closetag";
import "codemirror/mode/css/css";
import { Controlled } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompressAlt,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Playground({ displayName, language, value, onChange }) {
  const [open, setOpen] = useState(true);

  function valueChangeHandler(editor, data, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExchangeAlt} />
        </button>
      </div>
      <Controlled
        onBeforeChange={valueChangeHandler}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "the-matrix",
          lineNumbers: true,
          keyMap: "sublime",
          matchBrackets: true,
          autoCloseBrackets: true,
          autoCloseTags: true,
          smartIndent: true,
          extraKeys: {
              'Ctrl-Space': 'autocomplete'
          }
        }}
      />
    </div>
  );
}
