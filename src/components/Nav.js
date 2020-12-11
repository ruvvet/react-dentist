import {Link} from 'react-router-dom'


export default function Home() {


    
  return (
    <>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/procedures">Procedures</Link></li>
      </ul>
    </>
  );
}
