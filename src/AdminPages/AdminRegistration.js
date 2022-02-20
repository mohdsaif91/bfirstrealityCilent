// import React from "react";
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Space, Upload } from 'antd';
import {
    Form,
    Input,
    InputNumber,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';


const { Option } = Select;
// const residences = [
//     {
//         value: 'zhejiang',
//         label: 'Zhejiang',
//         children: [
//             {
//                 value: 'hangzhou',
//                 label: 'Hangzhou',
//                 children: [
//                     {
//                         value: 'xihu',
//                         label: 'West Lake',
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         value: 'jiangsu',
//         label: 'Jiangsu',
//         children: [
//             {
//                 value: 'nanjing',
//                 label: 'Nanjing',
//                 children: [
//                     {
//                         value: 'zhonghuamen',
//                         label: 'Zhong Hua Men',
//                     },
//                 ],
//             },
//         ],
//     },
// ];
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function onChange(date, dateString) {
    console.log(date, dateString);
}

export default function AdminRegistration() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="+91">+91</Option>
            </Select>
        </Form.Item>
    );
    // const suffixSelector = (
    //     <Form.Item name="suffix" noStyle>
    //         <Select
    //             style={{
    //                 width: 70,
    //             }}
    //         >
    //             <Option value="USD">$</Option>
    //             <Option value="CNY">¥</Option>
    //         </Select>
    //     </Form.Item>
    // );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    // const onWebsiteChange = (value) => {
    //     if (!value) {
    //         setAutoCompleteResult([]);
    //     } else {
    //         setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    //     }
    // };

    // const websiteOptions = autoCompleteResult.map((website) => ({
    //     label: website,
    //     value: website,
    // }));

    return (
        <div className="formpart" style={{ width: 480, margin: '0 auto' }}>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    // residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '+91',
                }}
                scrollToFirstError
            >
            {/* <p style={{ width: 480, margin: '0 auto' }}>Register your Details</p> */}
                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="buildingname"
                    label="BuildingName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input building name',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Rera number"
                    label="Rera Number"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="date"
                    label="Year Date"
                >
                    <Space direction="vertical">
                        <DatePicker onChange={onChange} picker="month" />
                    </Space>,
                </Form.Item>
            
                <Form.Item
                    name="intro"
                    label="Nearby Details"
                    rules={[
                        {
                            required: true,
                            message: 'Please input detail',
                        },
                    ]}
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>


                <Form.Item
                    name="propertyimage"
                    label="property images"
                    rules={[
                        {
                            required: true,
                            message: 'Please upload property images!',
                        },
                    ]}>
                    <Upload
                        multiple
                        listType='picture'
                        action={"http://localhost:300/"}
                        showUploadList={{ showRemoveIcon: true }}
                    >
                        <button>upload here</button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}