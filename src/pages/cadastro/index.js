import Illustration from "../../assets/illustration.png";
import Header from "../../components/header";

const Cadastro = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
      <Header whiteVersion />
      <div className="row">
        <div className="col-6 my-auto text-right">
          <img src={Illustration} alt="" className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="box col-8 ">
            <h2 className="text-center">Falta pouco pro seu pet ser feliz.</h2>
            <br />
            <br />
            <input
              type="text"
              className="form-control from-control-lg mb-3"
              placeholder="Nome completo"
            />
            <input
              type="text"
              className="form-control from-control-lg mb-3"
              placeholder="Email"
            />
            <input
              type="text"
              className="form-control from-control-lg mb-3"
              placeholder="Telefone"
            />
            <input
              type="text"
              className="form-control from-control-lg mb-3"
              placeholder="CPF"
            />
            <input
              type="date"
              className="form-control from-control-lg mb-3"
              placeholder="Data de nascimento"
            />
            <button className="btn btn-lg btn-block btn-secondary">
              Finalizar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
