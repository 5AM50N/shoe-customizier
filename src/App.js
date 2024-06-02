
import './index.css';
import {Suspense, useRef, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import Shoe from './Shoe';
import {OrbitControls} from '@react-three/drei';

function App() {
  const [mesh,setMesh] = useState("#fff");
  const [stripe,setStripe] = useState('#fff');
  const [lace,setLace] = useState('#fff');

  return (
    <>
    <div className="wrapper">
        <div className="card">
            <div className="product-canvas">
              <Canvas>
                <ambientLight intensity={3.5}/>
                <OrbitControls />
                <Suspense>
                  <Shoe customColor={{mesh:mesh,stripe:stripe,lace:lace}}/>
                </Suspense>
              </Canvas>
            </div>
            <h2>Color chooser</h2>
            <div className='colors'>
                 <div>
                    <input type="color" id="mesh" name="mesh"
                           value={mesh} onChange={(e) => setMesh(e.target.value)}/>
                    <label for="mesh">Main</label>
                  </div>

                <div>
                    <input type="color" id="stripe" name="stripe"
                            value={stripe} onChange={(e) => setStripe(e.target.value)}/>
                    <label for="stripe">Stripes</label>
                </div>
                 <div>
                    <input type="color" id="lace" name="lace"
                            value={lace} onChange={(e) => setLace(e.target.value)}/>
                    <label for="lace">Laces</label>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;
