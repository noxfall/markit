import './App.scss'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {

  return (
    <div className="app">
     <div style="width: 100%; align-items: center; text-align: center">
      <img src="./logo.svg" alt="logo" width="480" height="360" />
     </div>
    </div>
  )
}

export default App
