import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 19.4,
        orderNumber: "A0045600423",
        orderDate: new Date().toDateString(),
        creditCard: "-8464",
        user: {
          name: "Iker Casillas",
          shippingAddress: "1234 West State Street"
        }
      },
      {
        _id: 1,
        total: 20.05,
        orderNumber: "A5499902221",
        orderDate: new Date().toDateString(),
        creditCard: "-2961",
        user: {
          name: "Sergio Ramos",
          shippingAddress: "4567 East State Avenue"
        }
      },
      {
        _id: 2,
        total: 9.35,
        orderNumber: "A0580828863",
        orderDate: new Date().toDateString(),
        creditCard: "-6839",
        user: {
          name: "Gerard Piqué",
          shippingAddress: "8910 South Drive"
        }
      },
      {
        _id: 3,
        total: 11.5,
        orderNumber: "A0000046584",
        orderDate: new Date().toDateString(),
        creditCard: "-2430",
        user: {
          name: "Carles Puyol",
          shippingAddress: "1112 North Boulevard"
        }
      },
      {
        _id: 4,
        total: 45.65,
        orderNumber: "A0044575423",
        orderDate: new Date().toDateString(),
        creditCard: "-0719",
        user: {
          name: "Andrés Iniesta",
          shippingAddress: "1314 Blue Hill Street"
        }
      },
      {
        _id: 5,
        total: 3.4,
        orderNumber: "A0011514411",
        orderDate: new Date().toDateString(),
        creditCard: "-8645",
        user: {
          name: "Sergio Busquets",
          shippingAddress: "742 Evergreen Terrace "
        }
      },
      {
        _id: 6,
        total: 2.3,
        orderNumber: "A0045355423",
        orderDate: new Date().toDateString(),
        creditCard: "-3337",
        user: {
          name: "Xabi Hernández",
          shippingAddress: "221B Baker Street"
        }
      },
      {
        _id: 7,
        total: 39,
        orderNumber: "A0042200420",
        orderDate: new Date().toDateString(),
        creditCard: "-0716",
        user: {
          name: "David Villa",
          shippingAddress: "2324 Moonwalk Park"
        }
      }
    ]
  };
}
