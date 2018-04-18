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
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      axios.post('/lead', values)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      form.resetFields();
      this.setState({ visible: false });
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
