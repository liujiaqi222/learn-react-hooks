import { UseReducerBasic, UseReducerExample } from "./components/UseReducer"
import { UseEffectBasic, UseEffectBasic2 } from "./components/UseEffect"
function App() {
  return (
    <div className="App">
      {/* usereducer */}
      <div style={{ display: "none" }}>
        <UseReducerBasic />
      </div>
      <div style={{ display: "none" }}>
        <UseReducerExample />
      </div>

      {/* useEffect */}
      <div style={{ display: "none" }}>
        {" "}
        <UseEffectBasic />
      </div>
      <UseEffectBasic2 />
    </div>
  )
}

export default App
