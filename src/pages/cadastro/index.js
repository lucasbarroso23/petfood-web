import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Illustration from "../../assets/illustration.png";
import Header from "../../components/header";
import { setCustomer as setStoreCustomer } from "../../store/modules/shop/actions";

const Cadastro = () => {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState({
    external_id: new Date().getTime().toString(),
    name: "",
    type: "individual",
    country: "br",
    email: "",
    documents: [
      {
        type: "cpf",
        number: "",
      },
    ],
    phone_numbers: [""],
    birthday: "",
  });

  const goToCheckout = () => {
    dispatch(setStoreCustomer(customer));
  };

  return (
    <div className="container-fluid h-100 bg-primary">
      <Header whiteVersion hideCart />
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
              onChange={(e) => {
                setCustomer({ ...customer, name: e.target.value });
              }}
            />
            <input
              type="text"
              className="form-control from-control-lg mb-3"
              placeholder="Email"
              onChange={(e) => {
                setCustomer({ ...customer, email: e.target.value });
              }}
            />
            <input
              type="text"
              className="form-control from-control-lg mb-3"
              placeholder="Telefone"
              onChange={(e) => {
                setCustomer({ ...customer, phone_numbers: [e.target.value] });
              }}
            />
            <input
              type="text"
              className="form-control from-control-lg mb-3"
              placeholder="CPF"
              onChange={(e) => {
                setCustomer({
                  ...customer,
                  documents: [
                    {
                      type: "cpf",
                      number: e.target.value,
                    },
                  ],
                });
              }}
            />
            <input
              type="date"
              className="form-control from-control-lg mb-3"
              placeholder="Data de nascimento"
              onChange={(e) => {
                setCustomer({ ...customer, birthday: e.target.value });
              }}
            />
            <Link
              to="checkout"
              onClick={() => goToCheckout()}
              className="btn btn-lg btn-block btn-secondary"
            >
              Finalizar pedido teste
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
