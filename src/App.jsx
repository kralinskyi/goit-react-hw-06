import "./App.css";
import "modern-normalize";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Form />
      <Filter />
      <Contacts />
    </Layout>
  );
}

export default App;
