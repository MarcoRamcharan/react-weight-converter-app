import { useState } from "react"

const App = () => {

  const [weight, setWeight] = useState(0)

  const pounds = () =>{
    return weight * 2.20462262
  }

  const tons = () =>{
    return weight * 0.00098421
  }

  const grams = () =>{
    return weight * 1000
  }

  const ounce = () =>{
    return weight * 35.273962
  }


  return ( 
    <div className="app">
      <div className="container">
      <h1>WEIGHT CONVERTER</h1>
        <p>weight in kg</p>
        <input type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
         />
        { weight &&
      <div className="output">
        <div className="box">
        <p>{pounds()}</p>
        <h3>lbs</h3>
        </div>
        <div className="box">
        <p>{tons()}</p>
        <h3>tons</h3>
        </div>
        <div className="box">
        <p>{grams()}</p>
        <h3>grams</h3>
        </div>
        <div className="box">
        <p>{ounce()}</p>
        <h3>ounce</h3>
        </div>
      </div>
        }
      </div>

    </div>
   );
}
 
export default App;

