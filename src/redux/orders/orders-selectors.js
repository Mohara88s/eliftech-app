const getOrdersError = state => state.orders.ordersError;
const getOrdersLoading = state => state.orders.ordersLoading;
const getOrders = state => state.orders.orders;
const getAddedOrder = state => state.orders.addedOrder;
const getAddOrderErrors = state => state.orders.addOrderErrors;
const getAddOrderLoading = state => state.orders.addOrderLoading;
const getName = state => state.orders.name;
const getEmail = state => state.orders.email;
const getPhone = state => state.orders.phone;
const getAddresss = state => state.orders.address;

const ordersSelectors = {
  getOrdersError,
  getOrdersLoading,
  getOrders,
  getAddedOrder,
  getAddOrderErrors,
  getAddOrderLoading,
  getName,
  getEmail,
  getPhone,
  getAddresss,
};
export default ordersSelectors;
