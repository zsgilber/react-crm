import React from "react";
import { Button, Modal, Form, Input, Radio } from 'antd';
import ModalForm from "./ModalForm";
import axios from "axios";

class ModalFormButton extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleReload = (array) => {
    this.props.myFunc(array);
  }
  handleCreate = () => {
    const form = this.formRef.props.form;
    var respData = [];
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      async function go(){
        try {
            const response = await axios.post('api/lead', values);
            respData.push(response.data);
            return respData;
      }
       catch (e) {
            console.error(e);
}
  }
      // axios.post('/lead', values)
      //   .then(function (response) {
      //     respData.push(response.data);
      //     console.log(respData);
      //
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      //go().then(function (respData){
      //console.log(respData);
    // });
      form.resetFields();
      this.setState({ visible: false });
      this.handleReload(go());
    });
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>{this.props.buttonText}</Button>
        <ModalForm
          title = "New Title"
          item1Title = "First Name"
          item2Title = "Last Name"
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}


export default ModalFormButton;
