export const API_ACTION = {
  REQUEST_API_DATA: "REQUEST_API_DATA",
  RECEIVE_API_DATA: "RECEIVE_API_DATA",
};
// export const REQUEST_API_DATA = "REQUEST_API_DATA";
// export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const requestApiData = () => ({ type: API_ACTION.REQUEST_API_DATA });
export const receiveApiData = (data) => ({
  type: API_ACTION.RECEIVE_API_DATA,
  data,
});

// export const COUNTER_ACTION = {
//   INCREMENT: "INCREMENT",
//   DECREMENT: "DECREMENT",
//   FETCH_UER_REQ: "FETCH_UER_REQ",
//   FETCH_UER_REQ_SUCESS: "FETCH_UER_REQ_SUCESS",
//   FETCH_UER_REQ_FAIL: "FETCH_UER_REQ_FAIL",
// };

// export const fetchUserReq = () => {
//   console.log("hi Action saga");
//   return {
//     type: COUNTER_ACTION.FETCH_UER_REQ,
//   };
// };

// export const fetchUserReqSucess = (data) => {
//   return {
//     type: COUNTER_ACTION.FETCH_UER_REQ_SUCESS,
//     data,
//   };
// };

// export const fetchUserReqFail = (data) => {
//   return {
//     type: COUNTER_ACTION.FETCH_UER_REQ_FAIL,
//     data,
//   };
// };

// export const increaseCounter = () => {
//   return {
//     type: COUNTER_ACTION.INCREMENT,
//   };
// };

// export const decreaseCounter = () => {
//   return {
//     type: COUNTER_ACTION.DECREMENT,
//   };
// };
