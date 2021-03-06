import react from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from "../components/Menu"
import Content from "../components/Content"
import "./App.css"
const App = props => (

   <div className="App">
        <Router>
            <Menu/>
            <Content/>
        </Router>
   </div>
)

export default App;    