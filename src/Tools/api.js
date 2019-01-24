const header = new Headers();
header.append('Accept', 'application/json');
header.append('Content-Type', 'application/json');

const getMethods = () => ({
  method: 'GET',
  headers: header,
});

const checkStatusResponseAPI = async (response) => {
  const isStatus200 = () => {
    if (response.status === 200) {
      return true;
    }
    return false;
  };

  let error = new Error(response.statusText);

  if (isStatus200()) {
    const responseJson = await response.json();
      return responseJson;
  }
  throw error;
};

export const getFetch = path => new Promise((resolve, reject) => {
  fetch(`${path}`, getMethods())
    .then(checkStatusResponseAPI)
    .then((responseJson) => {
      resolve(responseJson);
    })
    .catch((err) => {
      alert(err);
    });
});
