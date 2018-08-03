import React, { Component } from 'react';
// import styled from 'styled-components';
import {
  Form, Button, Input, DatePicker, Select
} from 'antd';
import { FormWrapper, FormTitle, InputWrapper } from './FormCompany';

const FormItem = Form.Item;
const Option = Select.Option;

class LocationForm extends React.Component {
  constructor(props) {
    super(props);

    const value = props.value || {};
    this.state = {
      lat: value.lat,
      lng: value.lng,
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
          placeholder="latitude" 
          type="text"
          value={state.lat}
          name="lat"
          onChange={this.handleNumberChange}
          style={{flex: '50%'}}
        />
        <Input 
          placeholder="longitude"  
          type="text"
          value={state.lng}
          name="lng"
          onChange={this.handleNumberChange}
          style={{flex: '50%'}}
        />
      </InputWrapper>
    );
  }
}

class FormOffice extends Component {
  handleSubmit = (e) => {
    const { form, addOffice } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        let officeData = {
          ...values,
          date: values.datePicker.format("MM/DD/YYYY")
        }
        delete officeData['datePicker'];
        addOffice(officeData);
      }
    });
  }

  render() {
		const { companies, form: { getFieldDecorator } } = this.props;
    const formItemLayout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
		};
		const config = {
      rules: [{ type: 'object', required: true, message: 'Please select date!' }],
    };
		
    return (
			<FormWrapper>
				<FormTitle>Create Office</FormTitle>
				<Form onSubmit={this.handleSubmit}>
					<FormItem {...formItemLayout} label="Name::">
						{getFieldDecorator('name', {
							rules: [{
								required: true,
								message: 'Please input Office"s name',
							}],
						})(
							<Input placeholder="name" />
						)}
					</FormItem>

					<FormItem {...formItemLayout} label="Location::">
						{getFieldDecorator('location', {
							rules: [{
								initialValue: { lat: 0, lng: 0 },
								type: 'object',
								required: true,
								message: 'Please input Office"s location',
							}],
						})(<LocationForm />)}
					</FormItem>

					<FormItem
						{...formItemLayout}
						label="Office Start Date::"
					>
						{getFieldDecorator('datePicker', config)(
							<DatePicker />
						)}
					</FormItem>

					<FormItem
						{...formItemLayout}
						label="Company::"
						hasFeedback
					>
						{getFieldDecorator('company', {
							rules: [
								{ required: true, message: 'Please select Company!' },
							],
						})(
							<Select placeholder="select company">
                {companies.map((item, i) =>
                  <Option key={i} value={item.id}>{item.name}</Option>
                )}
							</Select>
						)}
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

export default Form.create()(FormOffice);
