import MainLayout from "./components/Layout/MainLayout";
import ComponentGuideline from "./containers/ComponentGuideline";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <ComponentGuideline />
      </MainLayout>
    </div>
  );
}

export default App;
