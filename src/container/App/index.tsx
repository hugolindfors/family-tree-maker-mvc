import React from "react";
import ReactDOM from "react-dom/client";
import FamilyTreeMaker from "../FamilyTreeMaker";

function App()
{
    const rootElement: HTMLElement = document.getElementById("root")!;
    const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <FamilyTreeMaker />
        </React.StrictMode>
    );
}

export default App;