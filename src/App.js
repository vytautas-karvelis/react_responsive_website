import logo from './logo.svg';
import './App.css';
import NavLinks from './components/NavLinks';
import Hero from './components/Hero';
import Card from './components/Card';
import { FaBuffer } from 'react-icons/fa';
import { BsPalette } from 'react-icons/bs'
import { FaCropAlt } from 'react-icons/fa'
import { BiFingerprint } from 'react-icons/bi'
function App() {

  const palette = <BsPalette color="#16507b" size={28}/>
  const crop = <FaCropAlt color="#16507b" size={28}/>
  const buffer = <FaBuffer color="#16507b" size={28}/>
  const finger = <BiFingerprint color="#16507b" size={28}/>

  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
        <div className="logo">
           OnePage
        </div>
        <NavLinks />
      </div>
      </header>
      <main>
        <div className="container">
          <Hero/>

          <div className="cardContainer">
              <Card
              title="Lorem Ipsum"
              content='Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
              error sit voluptatem 
              
              '
              bottomMargin
              icon={buffer}
              ><FaBuffer color="#16507b" size={28} />
              </Card>

              <Card
              title="Lorem Ipsum"
              content='Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
              error sit voluptatem 
               
              '
              bottomMargin
              icon={crop}
              >
              </Card>

              <Card
              title="Lorem Ipsum"
              content='Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
              error sit voluptatem 
              
              '
              bottomMargin
              icon={palette}
              ><FaCropAlt color="#16507b" size={28}/>
              </Card>
              
              <Card
              title="Lorem Ipsum"
              content='Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
              error sit voluptatem 
              '
              bottomMargin
              icon={finger}
              ><BiFingerprint color="#16507b" size={28}/>
              </Card>  

          </div>         
        </div>
      </main>
    </div>
  );
}

export default App;
