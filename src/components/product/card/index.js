import './styles.css';

const Product = () => {
  return (
    <div className="product col-3">
      <img
        src="https://a-static.mlcdn.com.br/1500x1500/racao-pedigree-equilibrio-natural-para-caes-adultos-de-racas-pequenas-1-kg/tanakaopetshop/4987989548/8573c3c4c05f7745db8e995f66e71138.jpg"
        className="img-fluid align-center"
        alt="ração pedigree"
      />
      <button className="btn btn-primary rounded-circle">+</button>
      <h4>
        <label className="badge badge-primary">R$ 90,00</label>
      </h4>
      <small>
        <b>Ração Pedigree Equilíbrio Natural para Cães Adultos de Raças Pequenas</b>
      </small>
    </div>
  );
};

export default Product;
