import React from 'react';
// import PropTypes from 'prop-types';
import {Modal, Form, Input} from 'antd';

const FormCampaign = ({visible, onCreate, onCancel}) => {
    const [form] = Form.useForm();
    return (
        <Modal
        width={750}
        visible={visible}
        title="Create a new campaign"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item name="name" label="Name">
            <Input type="textarea" />
          </Form.Item>
          <Form.Item name="age" label="Age">
            <Input type="textarea" />
          </Form.Item>
          <Form.Item name="address" label="Address">
            <Input type="textarea" />
          </Form.Item>

        </Form>
      </Modal>
    );
};

FormCampaign.propTypes = {};

export default FormCampaign;