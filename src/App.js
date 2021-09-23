import PropTypes from "prop-types";
import './App.css';

function App({ text }) {
  return (
    
    <div className="App" >
       

      <h1> {text} </h1>

 
    </div>
  );
}

App.propTypes = {
  headline: PropTypes.string,
  showLogos: PropTypes.string,
  backgroundImage: PropTypes.string,
}

App.defaultProps = {
  text: 'Pilot Error: No beer',
}

export default App;
