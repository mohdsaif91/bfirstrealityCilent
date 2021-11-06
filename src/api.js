export const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchData2 = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
