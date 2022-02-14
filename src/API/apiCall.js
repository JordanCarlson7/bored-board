/* API CONNECT */
const APIHandler = async (args) => {
  var url = "https://www.boredapi.com/api/activity?";
  if (args.accessibility) { url += `accessibility=${args.accessibility}&`};
  console.log(url);
  if (args.type) {url += `type=${args.type}&`};
  console.log(url);
  if (args.participants) { url += `participants=${args.participants}&`};
  console.log(url);
  if (args.price) {url += `price=${args.price}&`};
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();

    const transformedData = {
      activity: data.activity,
      type: data.type,
      participants: data.participants,
      price: data.price,
      link: data.link,
      key: data.key,
      accessibility: data.accessibility,
    };
    return transformedData;
  } catch (error) {
  //   setError(error.message);
      console.log(error)
  }
};

export default APIHandler;

