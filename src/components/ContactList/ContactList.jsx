import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import { deleteContact } from "../../redux/actions";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactList__item}>
          <Contact
            name={name}
            number={number}
            onDelete={() => {
              onDeleteContact(id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getFilteredContacts(contacts, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
