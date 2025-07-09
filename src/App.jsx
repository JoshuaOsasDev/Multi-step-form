import { ContextProvider } from "../Context/ContextStep";
import AppLayOut from "./ui/AppLayOut";

function App() {
  return (
    <ContextProvider>
      <AppLayOut />
    </ContextProvider>
  );
}

export default App;
