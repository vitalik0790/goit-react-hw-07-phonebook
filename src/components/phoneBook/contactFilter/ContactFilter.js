import React from 'react';
import { connect } from 'react-redux'
import contactsActions from '../../../redux/contacts/contactsActions'
import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';

const ContactFilter = ({ value, onHandleFilter }) => {

    return (
        <div>
            <h3>Find contacts by name</h3>
            <input className={s.input}
                type="text"
                value={value}
                onChange={(e) => onHandleFilter(e.target.value)}
            />
        </div>
    );
}

ContactFilter.propTypes = {
    value: PropTypes.string,
    onHandleFilter: PropTypes.func,
};

const mapStateToProps = state => ({
    value: state.contacts.filter,
})

const mapDispatchToProps = {
    onHandleFilter: contactsActions.onHandleFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);