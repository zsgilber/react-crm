class leadApi {

  static getLeads() {
      return
      axios
      .get("/api/leads")
      .then(response => {
        const newLeads = response.data;

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, {
          leads: newLeads
        });

        // store the new state object in the component's state
        console.log(newState);
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

export default leadApi;
