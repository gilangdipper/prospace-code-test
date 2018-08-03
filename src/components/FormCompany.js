import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import {
  Form, Button, Input
} from 'antd';

const FormItem = Form.Item;

export const InputWrapper = styled.span`
  display: flex;

  .ant-input {
    &:first-child {
      flex: 30%;
      margin-right: 5px;
		}
  }
`;

export const FormWrapper = styled.div`
	.ant-form-item {
		.ant-form-item-label {
			text-align: left;
			padding: 0;
		}

		.ant-btn {
			width: 100%;
		}

		&:last-child {
			margin-bottom: 10px;
		}
	}
`;

export const FormTitle = styled.p`
	font-size: 26px;
	margin-bottom: 12px;
`;

class PhoneNumberForm extends React.Component {
  constructor(props) {
    super(props);

    const value = props.value || {};
    this.state = {
      code: value.code,
      number: value.number,
    };
  }

  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState(value);
    }
  }

  handleNumberChange = (e) => {
    const value = parseInt(e.target.value || 0, 10);
    if (isNaN(value)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ [e.target.name]: value });
    }
    this.triggerChange({ [e.target.name]: value });
  }

  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  }

  render() {
    const state = this.state;
    return (
      <InputWrapper>
        <Input 
          placeholder="code" 
          type="text"
          value={state.code}
          name="code"
          onChange={this.handleNumberChange}
        />
        <Input 
          placeholder="number"  
          type="text"
          value={state.number}
          name="number"
          onChange={this.handleNumberChange}
        />
      </InputWrapper>
    );
  }
}

class FormCompany extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  };

  render() {
		const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
		};
		
    return (
			<FormWrapper>
				<FormTitle>Create Company</FormTitle>
				<Form onSubmit={this.handleSubmit}>
					<FormItem {...formItemLayout} label="Name::">
						{getFieldDecorator('name', {
							rules: [{
								required: true,
								message: 'Please input Company"s name',
							}],
						})(
							<Input placeholder="name" />
						)}
					</FormItem>

					<FormItem {...formItemLayout} label="Address::">
						{getFieldDecorator('address', {
							rules: [{
								required: true,
								message: 'Please input Company"s address',
							}],
						})(
							<Input placeholder="address" />
						)}
					</FormItem>

					<FormItem {...formItemLayout} label="Revenue::">
						{getFieldDecorator('revenue', {
							rules: [{
								required: true,
								message: 'Please input Company"s revenue',
							}],
						})(
							<Input placeholder="revenue" />
						)}
					</FormItem> 

					<FormItem {...formItemLayout} label="Phone No::">
						{getFieldDecorator('phoneNumber', {
							rules: [{
								initialValue: { code: 0, number: 0 },
								rules: [{ validator: this.checkPrice }],
								type: 'object',
								required: true,
								message: 'Please input Company"s phone number',
							}],
						})(<PhoneNumberForm />)}
					</FormItem>


					<FormItem
						wrapperCol={{ span: 24 }}
					>
						<Button type="primary" htmlType="submit">Create</Button>
					</FormItem>
				</Form>
			</FormWrapper>
    );
  }
}

export default Form.create()(FormCompany);
