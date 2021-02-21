import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestPetshops } from '../../store/modules/shop/actions';

import Header from '../../components/header';
import Petshop from '../../components/petshop';
import Map from '../../components/map';

import './styles.css';

const Home = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(requestPetshops());
  }, [])

  return (
    <div className="h-100">
      <Header />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais próximos de você (5)</h5>
        </div>
        <ul className="col-12 petshop-list">
          {[1,2,3,4,5,6, 7, 8, 9].map(p => <Petshop />)}
        </ul>
      </div>
      <Map />
    </div>
  );
}

export default Home;