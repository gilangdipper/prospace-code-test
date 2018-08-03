import React, { Component } from 'react';
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
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState(value);
    }
  }

  handleNumberChange = (e) => {
    const value = e.target.value;
    if (!('value' in this.props)) {
      this.setState({ [e.target.name]: value });
    }
    this.triggerChange({ [e.target.name]: value });
  }

  triggerChange = (changedValue) => {
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
    const { form, addCompany } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        addCompany(values);
      }
    });
  }

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
                rules: [{ type: 'number'}],
							}],
						})(
							<Input placeholder="revenue" type="number"/>
						)}
					</FormItem> 

					<FormItem {...formItemLayout} label="Phone No::">
						{getFieldDecorator('phoneNumber', {
							rules: [{
								initialValue: { code: '', number: '' },
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
