import axios from "axios";

class leadApi {

  static getLeads() {
      return axios
      .get("/api/leads")
      .then(response => {
        const leads = response.data;
        return leads;
      })
      .catch(error => console.log(error));
  }
};

export default leadApi;
