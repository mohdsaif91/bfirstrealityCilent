// import React from "react";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { DatePicker, Space, Upload } from "antd";
// import { Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios, { Axios } from "axios";
import "./PropertyRegistration.scss";
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
} from "antd";
import { getFormData } from "../../utils";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    // xs: {
    //   span: 24,
    // },
    // sm: {
    //   span: 8,
    // },
    span: 6,
  },
  wrapperCol: {
    // xs: {
    //   span: 12,
    // },
    // sm: {
    //   span: 10,
    // },
    span: 5,
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

// const initialData = {
//   builderName:"", buildingName:" ",propertyimage:"",reraNumber: "",projectStarted:"",possesionDate:"",nearbyDetails:"",othersDetail:""

// }

export default function PropertyRegistration() {
  // const [property, setProperty] = useState({
  // ...initialData
  // });

  const [userregistration, setuserRegistration] = useState({
    builderName: "",
    buildingName: " ",
    propertyimage: "",
    reraNumber: "",
    projectStarted: "",
    possesionDate: "",
    nearbyDetails: "",
    othersDetail: "",
  });
  const [records, setreCords] = useState([]);

  const handleInput = (e) => {
    console.log(e.target.name);
    setuserRegistration({
      ...userregistration,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    getFormData(userregistration);
  };

  const handleDateChange = (date, dateType) => {
    if (dateType === "projectStarted") {
      setuserRegistration({ ...userregistration, projectStarted: date });
    } else {
      setuserRegistration({ ...userregistration, possesionDate: date });
    }
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
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

  let formData = new FormData();

  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("file", e.target.files[0]);
    }
  };
  const SubmitFileData = () => {
    Axios.post("https://v2.convertapi.com/upload ", { formData })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(userregistration, "S");
  // const handleChange = (e) => {};

  return (
    <div className="formpart" style={{ margin: 18, padding: 8 }}>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "+91",
        }}
        scrollToFirstError
      >
        <Row>
          <Col span={12}>
            <Form.Item
              // name={["user", "name"]}
              label="Builder Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                name="builderName"
                type="text"
                value={userregistration.builderName}
                onChange={(e) => handleInput(e)}
                style={{ width: 300 }}
              />
            </Form.Item>
          </Col>

          {/* <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item> */}

          {/* <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item> */}

          <Col span={12}>
            <Form.Item
              label="Building Name"
              rules={[
                {
                  required: true,
                  message: "Please input building name",
                },
              ]}
            >
              <Input
                name="buildingName"
                type="text"
                value={userregistration.buildingName}
                onChange={(e) => handleInput(e)}
                style={{ width: 300 }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item
              label="Property images"
              rules={[
                {
                  required: true,
                  message: "Please upload property images!",
                },
              ]}
            >
              <input
                className="imgupload"
                name="propertyimage"
                type="file"
                onChange={(e) =>
                  setuserRegistration({
                    ...userregistration,
                    propertyimage: e.target.files[0],
                  })
                }
                listType="picture"
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Rera Number"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                name="reraNumber"
                type="text"
                value={userregistration.reraNumber}
                onChange={(e) => handleInput(e)}
                style={{ width: 300 }}
              />
            </Form.Item>
          </Col>
        </Row>

        <div id="rpart">
          <Row>
            <Col span={12}>
              <Form.Item name="projectStarted" label="Project Started">
                <Space direction="vertical">
                  {/* <DatePicker onChange={onChange} name="projectStarted" picker="date" /> */}
                  <DatePicker
                    type="number"
                    value={userregistration.projectStarted}
                    onChange={(date) =>
                      handleDateChange(date, "projectStarted")
                    }
                    name="projectStarted"
                    picker="date"
                  />
                </Space>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="possesionDate" label="Possession Date">
                <Space direction="vertical">
                  <DatePicker
                    type="number"
                    value={userregistration.possesionDate}
                    onChange={(date) => handleDateChange(date, "possesionDate")}
                    name="possesionDate"
                    picker="date"
                  />
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </div>

        <Row>
          <Col span={12}>
            <Form.Item
              label="Nearby Details"
              rules={[
                {
                  required: true,
                  message: "Please input detail",
                },
              ]}
            >
              <Input.TextArea
                name="nearbyDetails"
                type="text"
                value={userregistration.nearbyDetails}
                onChange={(e) => handleInput(e)}
                rows={5}
                style={{ width: 300 }}
                showCount
                maxLength={100}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Others Details"
              rules={[
                {
                  required: true,
                  message: "Please input detail",
                },
              ]}
            >
              <Input.TextArea
                type="text"
                value={userregistration.othersDetail}
                name="othersDetail"
                onChange={(e) => handleInput(e)}
                rows={5}
                style={{ width: 300 }}
                showCount
                maxLength={100}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item {...tailFormItemLayout}>
          <Button onSubmit={handleSubmit} type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
