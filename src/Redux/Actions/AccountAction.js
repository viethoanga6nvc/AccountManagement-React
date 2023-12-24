import accountAPI from "../../API/AccountApi";

const ACCOUNT = {
  SET_MODAL: "SET_MODAL",
  SET_CURRENT_FORM_DATA: "SET_CURRENT_FORM_DATA",
  FETCH_DATA_PENDING: "FETCH_DATA_PENDING",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILED: "FETCH_DATA_FAILED",
  CREATE_DATA_PENDING: "CREATE_DATA_PENDING",
  CREATE_DATA_SUCCESS: "CREATE_DATA_SUCCESS",
  CREATE_DATA_FAILED: "CREATE_DATA_FAILED",
  UPDATE_DATA_PENDING: "UPDATE_DATA_PENDING",
  UPDATE_DATA_SUCCESS: "UPDATE_DATA_SUCCESS",
  UPDATE_DATA_FAILED: "UPDATE_DATA_FAILED",
  DELETE_DATA_PENDING: "DELETE_DATA_PENDING",
  DELETE_DATA_SUCCESS: "DELETE_DATA_SUCCESS",
  DELETE_DATA_FAILED: "DELETE_DATA_FAILED",
};

export default ACCOUNT;

export const setCurrentFormData = (data) => {
  return {
    type: ACCOUNT.SET_CURRENT_FORM_DATA,
    payload: data,
  };
};

export const fetchAccountData = () => {
  return async (dispatch) => {
    dispatch({ type: ACCOUNT.FETCH_DATA_PENDING });
    try {
      const respone = await accountAPI.getAccounts();
      const data = respone.data;
      dispatch({
        type: ACCOUNT.FETCH_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ACCOUNT.FETCH_DATA_FAILED,
        payload: error.message,
      });
    }
  };
};

export const createAccount = (newData) => {
  return async (dispatch) => {
    dispatch({ type: ACCOUNT.CREATE_DATA_PENDING });
    try {
      const respone = await accountAPI.createAccount(newData);
      const data = respone.data;
      dispatch({
        type: ACCOUNT.CREATE_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ACCOUNT.CREATE_DATA_FAILED,
        payload: error.message,
      });
    }
  };
};

export const updateAccount = (newData) => {
  return async (dispatch) => {
    dispatch({ type: ACCOUNT.UPDATE_DATA_PENDING });
    try {
      const respone = await accountAPI.updateAccount(newData.id, newData);
      const data = respone.data;
      dispatch({
        type: ACCOUNT.UPDATE_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ACCOUNT.UPDATE_DATA_FAILED,
        payload: error.message,
      });
    }
  };
};

export const deleteAccount = (id) => {
  return async (dispatch) => {
    dispatch({ type: ACCOUNT.DELETE_DATA_PENDING });
    try {
      const respone = await accountAPI.deleteAccount(id);
      const data = respone.data;
      dispatch({
        type: ACCOUNT.DELETE_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ACCOUNT.DELETE_DATA_FAILED,
        payload: error.message,
      });
    }
  };
};
