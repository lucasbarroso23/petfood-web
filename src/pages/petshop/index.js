import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { requestPetshop } from '../../store/modules/shop/actions';
 
import Header from "../../components/header";
import Product from '../../components/product/card';

import './styles.css';

const Petshop = ({ match }) => {
  const dispatch = useDispatch();
  const { petshop } = useSelector((state) => state.shop);
  console.log(petshop.products)

  useEffect(() => {
    dispatch(requestPetshop(match.params.id));
  }, [])


  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src={petshop.logo}
              alt="petlove logo"
              className="img-fluid petshop-image"
            />
            <b>{petshop.name}</b>
            <div className="petshop-infos">
            <span className="mdi mdi-star"></span>
              <text>
                <b>2,8</b>                
              </text>
            <span className="mdi mdi-cash-usd-outline"></span>
            <text>{petshop.categoria}</text>
            <span className="mdi mdi-crosshairs-gps"></span>
            <text>2,9km</text>
            </div>
            <label className="badge badge-primary">Frete Grátis</label>
          </div>
          <div className="col-10">
            <h5>Produtos</h5>
            <br/>
            <div className="row">
              {petshop.products.map(p => <Product product={p}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petshop;
