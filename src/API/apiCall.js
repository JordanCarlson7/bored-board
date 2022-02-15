const buildQueryString = (baseUrl, { accessibility, type, participants, price }) => {
  let queryParams = [];
  if (accessibility && accessibility !== 0) queryParams.push(`minaccessibility=0&maxaccessibility=${accessibility}`);
  if (type && type !== 0) queryParams.push(`type=${type}`);
  if (participants && participants !== 0) queryParams.push(`participants=${participants}`);
  if (price && price !== 0) queryParams.push(`minprice=0&maxprice=${price}`);

  const url = `${baseUrl}?${queryParams.join('&')}`;
  console.log(`GET: ${url}`);
  return url;
};

/* API CONNECT */
const MakeRequest = async (args) => {
  const baseUrl = "https://www.boredapi.com/api/activity";
  const url = buildQueryString(baseUrl, args);
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
  } catch (err) {
      console.error(err);
  }
};

const APIHandler = async (args, count) => {
  try {
    let activities = [];
    for (let i = 0; i < count; i++) {
      let activity = await MakeRequest(args);
      if (activities.some(a => a.key === activity.key)) continue;
      activities.push(activity);
      console.log(activities);
    }
    return activities;
  } catch(err) {
    console.error(err);
  }
};

export { APIHandler, MakeRequest };