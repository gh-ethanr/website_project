import Header from './head.jsx'
import Footer from './footer.jsx'
import Food from './food.jsx'
import Divider from './div.jsx'
import Card from './card.jsx'
import Test_Button from './button/test_button.jsx'
import Navbar from './navbar.jsx'

function App() {

  return(
    <>
    <Navbar/>
    <Test_Button/>
    <Header></Header>
    <Food/>
    <Card/>
    <Footer/> {/* works the same as <></> but better*/}
    </>
  );
}

export default App
