import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import Home from "./Pages/Home";
import { About } from "./Pages/About";
import { Services } from "./Pages/Services";
import { Contact } from "./Pages/Contact";
import { Login } from "./Pages/forminandout/Login";

// import SearchBar from "./Pages/searchbar/Search"
import MainHeader from "./components/MainHeader";
import FooterComponent from "./components/FooterComponent";
import { Registration } from "./Pages/forminandout/Registration";

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Header className="header-top">
        <MainHeader />
      </Header>
      <Content>
        {/* <SearchBar/> */}
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="Registration" element={<Registration />} />
          </Routes>
          <Footer className="footer-container">
        <FooterComponent />
      </Footer>
   
      </Content>
   
    </Layout>
  );
}

export default App;
