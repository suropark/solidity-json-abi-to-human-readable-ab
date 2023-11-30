import "./App.css";
import { utils } from "ethers";

function App() {
  const onSolidityJsonAbiChange = () => {
    const jsonNode = document.getElementsByClassName("json-abi")[0];
    // console.log("solidityJsonAbi", solidityJsonAbi);

    try {
      console.log(JSON.stringify(jsonNode.value));
      const humanReadableAbi = new utils.Interface(JSON.parse(JSON.stringify(jsonNode.value))).format();

      const humanAbiNode = document.getElementsByClassName("human-abi")[0];

      humanAbiNode.value = JSON.stringify(humanReadableAbi);
    } catch (e) {
      console.log(e);
    }
  };
  const clear = () => {
    const jsonNode = document.getElementsByClassName("json-abi")[0];
    const humanAbiNode = document.getElementsByClassName("human-abi")[0];
    jsonNode.value = "";
    humanAbiNode.value = "";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", minWidth: window.innerWidth * 0.8 }}>
      <div>Solidity JSON ABI </div>
      <textarea className="json-abi" style={{ minHeight: "200px" }} type="text" width="80%" height="400px" />
      <button onClick={onSolidityJsonAbiChange}>Convert</button>

      <div>
        HumanReadable ABI{" "}
        <button
          onClick={() => {
            // copy
            const humanAbiNode = document.getElementsByClassName("human-abi")[0];
            humanAbiNode.select();
            document.execCommand("copy");
          }}
        >
          Copy
        </button>{" "}
      </div>
      <textarea className="human-abi" style={{ minHeight: "200px" }} type="text" width="80%" height="400px" />

      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default App;
