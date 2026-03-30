import Navbar from "./components/navbar";
import Routing from "./Routes/routing";
import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-amber-950/10">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routing />
      </QueryClientProvider>
    </div>
  );
}

export default App;
