import React, { Component } from 'react';
import './App.css';
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
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log('///', values.datePicker.format("MM/DD/YYYY"));
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
								rules: [{ validator: this.checkPrice }],
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
						{getFieldDecorator('select', {
							rules: [
								{ required: true, message: 'Please select Company!' },
							],
						})(
							<Select placeholder="select company">
								<Option value="china">China</Option>
								<Option value="use">U.S.A</Option>
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