// import Application from './components/application/Application'
// import Skills from './components/skills/Skills'
// import Counter from './components/counter/Counter'
import { AppProviders } from "./components/providers/App-providers";
import { MuiMode } from "./components/mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <div>
        <MuiMode />
        {/* <Application/> 
      <Skills skills={["HTML", "CSS", "JavaScript"]} />
      <Counter/> */}
      </div>
    </AppProviders>
  );
}

export default App;
