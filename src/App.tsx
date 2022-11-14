import { UseReducerBasic, UseReducerExample } from "./components/UseReducer"
import { UseEffectBasic1, UseEffectBasic2 } from "./components/UseEffect"
import { UseMemoBasic } from "./components/UseMemo"
import { UseRefBasic1, UseRefBasic2, UseRefBasic3 } from "./components/UseRef"

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
          <UseEffectBasic1 />
          <UseEffectBasic2 />
        </>
      )}

      {/* useMemo */}
      {false && <UseMemoBasic />}

      {/* useRef */}
      <UseRefBasic1 />
      <UseRefBasic2 />
      <UseRefBasic3 />
    </div>
  )
}

export default App
