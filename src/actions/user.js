import { SET_USER_PURCHASES } from "./types";

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 19.4,
        orderNumber: "A0045600423",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Iker Casillas",
          shippingAddress: "1234 West State Street"
        }
      },
      {
        _id: 1,
        total: 20.05,
        orderNumber: "A5499902221",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Sergio Ramos",
          shippingAddress: "4567 East State Avenue"
        }
      },
      {
        _id: 2,
        total: 9.35,
        orderNumber: "A0580828863",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Gerard Piqué",
          shippingAddress: "8910 South Drive"
        }
      },
      {
        _id: 3,
        total: 11.5,
        orderNumber: "A0000046584",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Carles Puyol",
          shippingAddress: "1112 North Boulevard"
        }
      },
      {
        _id: 4,
        total: 45.65,
        orderNumber: "A0044575423",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Andrés Iniesta",
          shippingAddress: "1314 Blue Hill Street"
        }
      },
      {
        _id: 5,
        total: 3.4,
        orderNumber: "A0011514411",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Sergio Busquets",
          shippingAddress: "742 Evergreen Terrace "
        }
      },
      {
        _id: 6,
        total: 2.3,
        orderNumber: "A0045355423",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Xabi Hernández",
          shippingAddress: "221B Baker Street"
        }
      },
      {
        _id: 7,
        total: 39,
        orderNumber: "A0042200420",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "David Villa",
          shippingAddress: "2324 Moonwalk Park"
        }
      }
    ]
  };
}
