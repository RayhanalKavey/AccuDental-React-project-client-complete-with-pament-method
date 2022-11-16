import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Routes/Routes";

function App() {
  return (
    <div className="max-w-screen-xl	mx-auto text-accent">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
