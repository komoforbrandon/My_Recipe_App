import Navbar from "./components/navbar";
import Routing from "./Routes/routing";
import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FavoritesProvider } from "./context/favorites-context";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-amber-700/10">
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <Navbar />
          <Routing />
        </FavoritesProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
