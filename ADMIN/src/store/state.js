let adminID = window.localStorage.getItem("adminID");

export default {
  products: [],
  categories: [],
  users: [],
  orderDetails: [],
  orderStatic: {},
  adminID: adminID ? JSON.parse(adminID) : "",
};
