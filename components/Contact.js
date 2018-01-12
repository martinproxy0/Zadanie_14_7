//import PropTypes from 'prop-types';

function Contact(props){

    return (
        <div className='contactItem'>
            <img className='contactImage' src='http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'/>
            <p className='contactLabel'>Imię: {props.contact.firstName}</p>
            <p className='contactLabel'>Nazwisko: {props.contact.lastName}</p>
            <a className='contactEmail' href={'mailto:' + props.contact.email}>{props.contact.email}</a>
        </div>
    );
}

Contact.prototype = {
    contact: React.PropTypes.object.isRequired
}
