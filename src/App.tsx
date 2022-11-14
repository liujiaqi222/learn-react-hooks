import { UseReducerBasic, UseReducerExample } from "./components/UseReducer"
import { UseEffectBasic, UseEffectBasic2 } from "./components/UseEffect"
import { UseMemoBasic } from "./components/UseMemo"
function App() {
  return (
    <div className="App">
      {/* usereducer */}
      <div style={{ display: "none" }}>
        <UseReducerBasic />
        <UseReducerExample />
      </div>

      {/* useEffect */}
      {false && (
        <>
          <UseEffectBasic />
          <UseEffectBasic2 />
        </>
      )}

      {/* useMemo */}
      {false && <UseMemoBasic />}
    </div>
  )
}

export default App
