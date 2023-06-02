const getShopsError = state => state.shops.error;
const getShopsLoading = state => state.shops.loading;
const getShops = state => state.shops.shops;
const getActualShop = state => state.shops.actualShop;

const shopsSelectors = {
  getShopsError,
  getShopsLoading,
  getShops,
  getActualShop,
};
export default shopsSelectors;
