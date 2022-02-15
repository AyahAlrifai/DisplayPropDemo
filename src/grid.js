import './grid.css';
import CodeMirror from '@uiw/react-codemirror';
import {css} from '@codemirror/lang-css';

export const Grid = () => {
  document.body.style.background="#ffffff";

  const className=[
    ["grid-container1",{},
`.grid-container1 {
  display: grid;
  grid-template-columns: auto auto auto;
}`],
    ["grid-container2",{},
  `.grid-container2 {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }`],
    ["grid-container3",{},
  `.grid-container3 {
    display: grid;
    grid-gap: 10px;
    /* or you can use one of these
    1-grid-gap: 20px 20px;
    2-grid-column-gap: 20px;
      grid-row-gap: 20px;
    */
    grid-template-columns: auto auto auto;
  }`],
    ["grid-container4",{1:"grid-container4-item1"},
  `.grid-container4 {
  display: grid;
  grid-template-columns: auto auto auto;
}
.grid-container4-item1 {
  grid-column-start: 1;
  grid-column-end:3;
}`],
    ["grid-container5",{1:"grid-container5-item1"},
`.grid-container5 {
  display: grid;
  grid-template-columns: auto auto auto;
}
.grid-container5-item1 {
  grid-column-start: 1;
  grid-column-end:3;

  grid-row-start: 2;
  grid-row-end:4;

  /*
  or this way
  grid-area: 2 / 1 / span 2 / span 2;
  */
}
`],
    ["grid-container6",{1:"grid-container6-item1"},
`.grid-container6 {
  display: grid;
  grid-template-columns: auto 200px auto;
  grid-template-rows: 100px 100px 100px 200px;
  width: auto;
  height: auto;
  /* or use this way
  grid-template: 100px 150px 100px 150px / auto 150px auto; */
}

.grid-container6-item1 {
  grid-area: 4 / 1 / span 2 / span 3;
}
`],
    ["grid-container7",{1:"grid-container7-item1",2:"grid-container7-item2",9:"grid-container7-item9"},
`.grid-container7 {
  display: grid;
  grid-template-columns: auto auto auto;
}

.grid-container7-item1 {
  grid-column-start: 1;
  grid-column-end:3;

  grid-row-start: 1;
  grid-row-end:2;
}

.grid-container7-item2 {
  grid-column-start: 3;
  grid-column-end:4;

  grid-row-start: 2;
  grid-row-end:4;
}

.grid-container7-item9 {
  grid-column-start: 2;
  grid-column-end:4;

  grid-row-start: 4;
  grid-row-end:5;
}
`]
  ];

  const elements=className.map((item)=>{
    return <div><div className={"container "+item[0]} key={item[0]}>
      <div className={"grid-item "+(item[1][1] || "")}>1</div>
      <div className={"grid-item "+(item[1][2] || "")}>2</div>
      <div className={"grid-item "+(item[1][3] || "")}>3</div>
      <div className={"grid-item "+(item[1][4] || "")}>4</div>
      <div className={"grid-item "+(item[1][5] || "")}>5</div>
      <div className={"grid-item "+(item[1][6] || "")}>6</div>
      <div className={"grid-item "+(item[1][7] || "")}>7</div>
      <div className={"grid-item "+(item[1][8] || "")}>8</div>
      <div className={"grid-item "+(item[1][9] || "")}>9</div>
    </div>
    <CodeMirror
      value={item[2]}
      className="codeMirror"
      extensions={[css()]}
    />
    </div>
  });
  return (<div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
    {elements}
    </div>
  );
}
