import s from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/actions";

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.filter}>
      Find a contact
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.filter__input}
      ></input>
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
