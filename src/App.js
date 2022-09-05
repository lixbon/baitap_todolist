import "./App.css";
import InputComponents from "./Components/Form/InputComponents";
import OutPutComponents from "./Components/OutPut/OutPutComponents";

function App() {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans pt-16 ">
      <div className="bg-white rounded shadow p-6 border-2 border-cyan-200 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <InputComponents />
        <OutPutComponents />
      </div>
    </div>
  );
}

export default App;
