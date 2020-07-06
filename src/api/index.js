import axios from "axios";

const apiEndpoint = "https://en.wikipedia.org/w/api.php";

export const fetchData = async (search) => {
  const params = `?action=query&list=search&srsearch=${search}&format=json&origin=*`;

  if (search) {
    try {
      const {
        data: { query: search },
      } = await axios.get(apiEndpoint + params);

      return { search };
    } catch (error) {
      console.log(error);
    }
  }
};
