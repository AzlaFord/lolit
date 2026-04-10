import {useState} from 'react';
import './App.css';
import {Greet} from "../wailsjs/go/main/App";
import Layout from "./components/Layout"
function App() {
    const updateName = (e) => setName(e.target.value);
    const updateResultText = (result) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div id="App">
            <Layout></Layout>
        </div>
    )
}

export default App
