import './styles.css';

const Product = ({ product }) => {
  return (
    <div className="product col-3">
      <img
        src={product.capa}
        className="img-fluid align-center"
        alt="ração pedigree"
      />
      <button className="btn btn-primary rounded-circle">+</button>
      <h4>
        <label className="badge badge-primary">{product.preco.toFixed(2)}</label>
      </h4>
      <small>
        <b>{product.nome}</b>
      </small>
    </div>
  );
};

export default Product;
