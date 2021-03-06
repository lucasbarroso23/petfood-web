import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "underscore";

import {
  setTransaction as setStoreTransaction,
  makePurchase as makePurchaseStore,
} from "../../store/modules/shop/actions";
import Header from "../../components/header";
import Product from "../../components/product/list";
import dayjs from "dayjs";

import "./styles.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cart, transactionFee, defaultRecipient } = useSelector(
    (state) => state.shop
  );

  const total = cart.reduce((total, product) => {
    return total + product.preco;
  }, 0);

  const [transaction, setTransaction] = useState({
    amount: 0,
    card_number: "",
    card_cvv: "",
    card_expiration_date: "",
    card_holder_name: "",
    shipping: {
      name: "Petfood LTDA",
      fee: 1000,
      delivery_date: dayjs().add(7, "days").format("YYYY-MM-DD"),
      expedited: true,
      address: {
        country: "br",
        state: "",
        city: "",
        neighborhood: "",
        street: "",
        street_number: "",
        zipcode: "",
      },
    },
    items: [],
    split_rules: [],
  });

  const setShippingValue = (key, value) => {
    setTransaction({
      ...transaction,
      shipping: {
        ...transaction.shipping,
        address: {
          ...transaction.shipping.address,
          [key]: value,
        },
      },
    });
  };

  const makePurchase = () => {
    dispatch(setStoreTransaction(transaction));
    setTimeout(() => {
      dispatch(makePurchaseStore());
    }, 100);
  };

  const getSplitRules = () => {
    const productsByPetshop = _.groupBy(
      cart,
      (product) => product.petshop_id.recipient_id
    );

    let result = [];

    Object.keys(productsByPetshop).map((petshop) => {
      const products = productsByPetshop[petshop];
      const totalValuePerPetshop = products
        .reduce((total, product) => {
          return total + product.preco;
        }, 0)
        .toFixed(2);

      const totalFee = (totalValuePerPetshop * transactionFee).toFixed(2);

      result.push({
        recipient_id: products[0].petshop_id.recipient_id,
        percentage: Math.floor(
          ((totalValuePerPetshop - totalFee) / total) * 100
        ),
        liable: true,
        charge_processing_fee: true,
      });
    });

    const totalPetshopsPercentage = result.reduce((total, recipient) => {
      return total + parseFloat(recipient.percentage);
    }, 0);

    result.push({
      ...defaultRecipient,
      percentage: 100 - totalPetshopsPercentage,
    });

    return result;
  };

  useEffect(() => {
    //UPDATE AMOUNT
    //UPDATE ITEMS
    setTransaction({
      ...transaction,
      amount: total?.toFixed(2).toString().replace(".", ""),
      items: cart.map((product) => ({
        id: product._id,
        title: product.nome,
        unit_price: product.preco.toFixed(2).toString().replace(".", ""),
        quantity: 1,
        tangible: true,
      })),
      split_rules: getSplitRules(),
    });
  }, [total]);

  return (
    <div className="h-100">
      <Header hideCart />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span className="section-title">Dados de Entrega</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                  onChange={(e) => setShippingValue("zipcode", e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                  onChange={(e) => setShippingValue("city", e.target.value)}
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                  onChange={(e) => setShippingValue("street", e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <input
                  type="text"
                  placeholder="Número"
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setShippingValue("street_number", e.target.value)
                  }
                />
              </div>
              <div className="col-5 pl-0">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setShippingValue("neighborhood", e.target.value)
                  }
                />
              </div>
              <div className="col-2 pl-0">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                  onChange={(e) => setShippingValue("state", e.target.value)}
                />
              </div>
            </div>

            <span className="section-title">Dados de Entrega</span>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Número do cartão"
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setTransaction({
                      ...transaction,
                      card_number: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="Nome no cartão"
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setTransaction({
                      ...transaction,
                      card_holder_name: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setTransaction({
                      ...transaction,
                      card_expiration_date: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control form-control-lg"
                  onChange={(e) =>
                    setTransaction({
                      ...transaction,
                      card_cvv: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <b>Total</b>
                <h3>R$ {total.toFixed(2)}</h3>
              </div>
              <div className="col-12">
                <button
                  onClick={() => makePurchase()}
                  className="btn btn-block btn-lg btn-primary"
                >
                  Finalizar compra
                </button>
              </div>
            </div>
          </div>
          <div className="box col mb-4 box-sidebar">
            <h4>Minha Sacola({cart.length})</h4>
            <div className="row products">
              {cart.map((p) => (
                <Product product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
