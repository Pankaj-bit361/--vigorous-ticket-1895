import axios from "axios";
import * as types from "./actionTypes";



export const addShipping = (data) => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .post("https://determined-gold-jaguar.cyclic.app/shipping", data)
    .then(() => {
      // console.log(res);
      dispatch({ type: types.ADD_SHIPPING_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
    });
};


export const getShipping = () => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .get("https://determined-gold-jaguar.cyclic.app/shipping" )
    .then((res) => {
      console.log(res);
      dispatch({ type: types.GET_SHIPPING_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
    });
};

export const addPayment = (data) => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .post("https://determined-gold-jaguar.cyclic.app/cart2", data)
    .then(() => {
      // console.log(res);
      dispatch({ type: types.ADD_CART2_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
     
    });
};


export const getPayment = () => (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST });
  axios
    .get("https://determined-gold-jaguar.cyclic.app/cart2" )
    .then((res) => {
      console.log(res);
      dispatch({ type: types.GET_CART2_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.PRODUCT_FAILURE });
    });
};
