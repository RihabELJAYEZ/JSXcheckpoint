import logo from './logo.svg';
import './Style.css';
import mycake from './GateauxChocolat.PNG'
import mycho from './3cho.PNG'
import mying from './ingred2.PNG';
import myfond from './fondcho.PNG';
import mysecfond from './myseconfond.PNG';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "mediumpurple", fontSize: 60 }}>Recette Desserts</h1>
      <h4 style={{ color: "darkorchid", fontSize: 20  , textAlign: "left", paddingLeft: 60}}>Gateaux 3 chocolat</h4>
        <div className="firstbloc">
          
         <img className="style1" src={mycho} alt='mycake' /> 
         <img className="style1" src={mying} alt='mying' /> 
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4 style={{ color: "darkorchid", fontSize: 20  , textAlign: "left", paddingLeft: 60 }}>Fondant au cacao</h4>
        
        <div className="firstbloc">
          
          <img className="style1" src={myfond} alt='myfond' /> 
          <img className="style1" src={mysecfond} alt='mysecfond' /> 
         </div>
         <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4 style={{ color: "darkorchid", fontSize: 20  , textAlign: "left", paddingLeft: 60 }}>Mini-fraisiers</h4>

        <div className="firstbloc">
          <img className="style1" src='/mini.PNG'  /> 
          <img className="style1" src='/ingmini.PNG'  /> 
         </div>

         <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h4 className="titreV">Fondant Chocolat MASCARPONE de CYRIL LIGNAC</h4>
        

          <iframe width="560" 
          height="315" 
          src="https://www.youtube.com/embed/A65H4JWo5g4?start=42"
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe>
          
         <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
         

      
    </div>
  );
}

export default App;
