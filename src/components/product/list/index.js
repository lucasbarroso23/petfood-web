import "./styles.css";

const Product = () => {
  return (
    <div className="col-12 product-list ">
      <div className="row">
        <div className="col-3">
          <img
            src="https://www.petlove.com.br/images/products/223357/large/Ra%C3%A7%C3%A3o_Seca_Pedigree_para_C%C3%A3es_Adultos_Ra%C3%A7as_Pequenas_310484_1_20kg.jpg?1587403804"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ 30,00</label>
          </h6>
          <small>Ração Seca Pedigree para Cães Adultos Raças Pequenas</small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
