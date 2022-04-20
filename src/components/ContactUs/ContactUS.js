import React, { useState, useEffect } from "react";
import "./ContactUS.scss";
import {
  InstagramOutlined,
  FacebookFilled,
  TwitterOutlined,
  LinkedinFilled,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { IoLocationOutline } from "react-icons/fa";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function ContactUS() {
  // function Contact() {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);

  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setFormerror(validationform(formvalue));
    setSubmit(true);
  };
  const validationform = (value) => {
    const errors = {};
    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value.name) {
      errors.name = "Please Enter Name";
    }

    if (!value.email) {
      errors.email = "Please Enter Email";
    } else if (!emailPattern.test(value.email)) {
      errors.email = "Enter Valid Email";
    }
    if (!value.phone) {
      errors.phone = "Please Enter phone";
    }
    // if (!value.address) {
    //   errors.address = "Please Enter Address";
    // }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formerror).length === 0 && issubmit) {
      console.log(formvalue);
    }
  }, [formerror, formvalue, issubmit]);

  // }
  return (
    <>
      <div className="contact-body">
        <div className="contact-form">
          <div className="first-container">
            <div className="info-container">
              {/* <h3>Get in</h3> */}
              {/* <div className="info-content">
                <h3>Get in Touch</h3>
                <div>
                  
                  <p>h-block,street no-22,new delhi-11144,india</p>
                </div>
              </div> */}
              {/* <div>
                <h3>General support</h3>
                <span></span>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </div> */}
              {/* <div>
                <h3>General support</h3>
                <span></span>
                <a href="tel:+8555528555">8555528555</a>
              </div> */}
              <div className="info-content">
                <h2>Contact Us</h2>
                <ul>
                  <li>
                    <h3>
                      <EnvironmentOutlined
                        style={{
                          fontSize: "40px",
                          color: "#08c",
                          padding: 16,
                          // margin: 10,
                        }}
                      />
                      h-block,street no-22,new delhi-11144,india
                    </h3>
                  </li>
                  <li>
                    <MailOutlined
                      style={{ fontSize: "40px", color: "#08c", padding: 16 }}
                    />
                    <a href="mailto:contact@example.com">contact@example.com</a>
                  </li>
                  <li>
                    <PhoneOutlined
                      style={{ fontSize: "40px", color: "#08c", padding: 16 }}
                    />
                    <a href="tel:+8555528555">8555528555</a>
                  </li>
                  <li></li>
                </ul>
                <div className="social">
                  <ul className="ico">
                    <li>
                      <a href="/#">
                        <FacebookFilled
                          style={{ fontSize: "50px", color: "#08c" }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <InstagramOutlined
                          style={{ fontSize: "50px", color: "#08c" }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <LinkedinFilled
                          style={{ fontSize: "50px", color: "#08c" }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <TwitterOutlined
                          style={{ fontSize: "50px", color: "#08c" }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="second-container">
            <h2>Get in Touch</h2>
            <form className="formitems" onSubmit={handlesubmit} action="">
              <div className="form-group">
                <label htmlFor="name-input">Name :</label>
                <input
                  type="text"
                  name="name"
                  value={formvalue.name}
                  onChange={handlevalidation}
                  placeholder="Enter Your Full Name"
                />
                <p className="errortext">{formerror.name}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email-input">Email :</label>
                <input
                  type="text"
                  name="email"
                  value={formvalue.email}
                  onChange={handlevalidation}
                  placeholder="Enter Your Email"
                />

                <br />
                <p className="errortext">{formerror.email}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email-input">Phone :</label>
                <input
                  type="text"
                  name="phone"
                  value={formvalue.phone}
                  onChange={handlevalidation}
                  placeholder="Enter Your Phone Number"
                />

                <br />
                <p className="errortext">{formerror.phone}</p>
              </div>
              <div className="form-group">
                <label htmlFor="address-input">Message :</label>
                <textarea
                  name="address"
                  value={formvalue.address}
                  onChange={handlevalidation}
                  placeholder="Write Us A Message"
                />
                {/* <p className="errortext">{formerror.address}</p> */}
              </div>
              <button>send message</button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="contact-map">

        <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610031687!2d72.74109806321596!3d19.082197838151572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649788427927!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          frameborder="0"
        ></iframe>
      </div> */}
    </>
  );
}
