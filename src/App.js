import "./App.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Filter from "./components/Filter/Filter.jsx";

// class App extends Component {
//

//   componentDidMount() {
//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log("Component updated!");
//     const newContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (newContacts !== prevContacts) {
//       console.log("Обновились контакты");
//       localStorage.setItem("contacts", JSON.stringify(newContacts));
//     }
//   }

const App = () => {
  return (
    <div className="main_container">
      <h1 className="main_heading">Phonebook</h1>
      <ContactForm />

      <h2 className="contacts_heading">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
