import Header from './Header/Header';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'


//https://gateway.marvel.com:443/v1/public/characters?apikey=6fb395dc5996b3f84d3f81595e593c48

// key private: 11d167bc489f08c38509ddb5a5487532968b99cb
// key public: 6fb395dc5996b3f84d3f81595e593c48
// ts: 1

// 111d167bc489f08c38509ddb5a5487532968b99cb6fb395dc5996b3f84d3f81595e593c48

// hash: 6d38f7c14376766dee9c8c71c774e551


function App() {

  const [personajes, setPersonajes] = useState([])


  useEffect(()=> {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6fb395dc5996b3f84d3f81595e593c48&hash=6d38f7c14376766dee9c8c71c774e551').then(res => {
        setPersonajes(res.data.data.results);
        console.log(res.data.data.results)
    
    }).catch(error =>(console.log(error)))
  },[])

  console.log(personajes);
  
  return (
    <div className="App"> 
       <Header/>    
       <div className='Cards-items'>

        {personajes.map(per=>(
          <div className='Card' key={per.id}>
            <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className='Card-image'/>
            <div className='Card-body'>
              <p className='Card-text'>{`${per.name}`}</p>
            </div>
          </div>
        ))}
    </div>
       
    </div>
  );
}

export default App;
  