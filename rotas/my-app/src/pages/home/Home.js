import { Link } from 'react-router-dom';
function Home() {
    return (
      <div >
        <h1>Bem vindo a página Home</h1>

        <Link to="/sobre">sobre</Link>
      </div>
    );
  }
  
  export default Home;