import { Navbar } from "./components";
import { Home, About, Projects, Contact } from "./containers";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
