import './flex.css';

export const Flex = () => {
  document.body.style.background="#ffffff";
  const style={height:"75px",alignItems:"center",display: "flex"};

  return (<div style={{display:"flex",justifyContent:"flex-start"}}>
    <div style={{width:"500px"}}>
      <div className="flex-start">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
      </div>
      <div className="flex-end">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
      </div>
      <div className="flex-center">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
      </div>
      <div className="flex-space-around">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
      </div>
      <div className="flex-space-between">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
      </div>
      <div className="flex-space-evenly">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
      </div>
    </div>
    <div style={{width:"500px",marginLeft:"5px"}}>
      <div style={style}>
      display:flex;<br></br>
      justify-content: flex-start;<br></br>
      align-items:center;
      </div>
      <div style={style}>
      display:flex;<br></br>
      justify-content:flex-end;<br></br>
      align-items:center;
      </div>
      <div style={style}>
      display:flex;<br></br>
      justify-content:center;<br></br>
      align-items:center;
      </div>
      <div style={style}>
      display:flex;<br></br>
      justify-content:space-around;<br></br>
      align-items:center;
      </div>
      <div style={style}>
      display:flex;<br></br>
      justify-content:space-between;<br></br>
      align-items:center;
      </div>
      <div style={style}>
      display:flex;<br></br>
      justify-content:space-evenly;<br></br>
      align-items:center;
      </div>
    </div>
  </div>
  );
}
