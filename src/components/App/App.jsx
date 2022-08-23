
import axios from 'axios';
import './App.css';

function App () {

  const handleClick = () => { 
    // on click this will be fired off and trigger the get listener in server
    // which makes a request to GIPHY
    axios.get('/trending')
      .then( (response) => {
        console.log(response.data)
      }).catch( (err) => {
        console.error(err)
      })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APIS</h1>
          <h4><i>APIS</i></h4>
          <button onClick={handleClick}>GET TRENDING</button>
        </header>
        <br/>
      </div>
    );
  
}

export default App;
