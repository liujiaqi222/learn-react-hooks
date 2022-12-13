import { createContext, useContext, useState } from "react"

const ThemeContext = createContext<string | null>(null)
export const UseContextBasic1 = () => {
  const [theme, setTheme] = useState("dark")
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        use dark mode
      </label>
    </>
  )
}

function Form() {
  return <Panel title="Welcome" />
}

function Panel({ title }: { title: string }) {
  const theme = useContext(ThemeContext)
  const style = {
    color: theme === "light" ? "black" : "white",
    backgroundColor: theme === "light" ? "white" : "black",
  }
  return (
    <section style={style}>
      <h1>{title}</h1>
    </section>
  )
}
