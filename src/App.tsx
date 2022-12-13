import { UseReducerBasic, UseReducerExample } from "./components/UseReducer"
import { UseEffectBasic1, UseEffectBasic2 } from "./components/UseEffect"
import { UseMemoBasic } from "./components/UseMemo"
import { UseRefBasic1, UseRefBasic2, UseRefBasic3 } from "./components/UseRef"
import { UseContextBasic1 } from "./components/UseContext"
import { UseState } from './components/UseState'

function App() {
  return (
    <div className="App">
      {/* useReducer */}
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
      {false && (
        <>
          <UseRefBasic1 />
          <UseRefBasic2 />
          <UseRefBasic3 />
        </>
      )}

      {/* useContext */}
      {false && <UseContextBasic1 />}

      {/* useState */}
      {<UseState />}
    </div>
  )
}

export default App
