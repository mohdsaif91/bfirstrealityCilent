export const API_ACTION2 = {
  REQUEST_API_DATA2: "REQUEST_API_DATA2",
  RECEIVE_API_DATA2: "RECEIVE_API_DATA2",
};
// export const REQUEST_API_DATA = "REQUEST_API_DATA";
// export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const requestApiData2 = () => ({ type: API_ACTION2.REQUEST_API_DATA2 });
export const receiveApiData2 = (data) => ({
  type: API_ACTION2.RECEIVE_API_DATA2,
  data,
});
