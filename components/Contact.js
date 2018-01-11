import PropTypes from 'prop-types';

function Contact(props){

    return (
        <div className='contactItem'>
            <img className='contactImage' src='http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico' />
            <p className="contactLabel">Imię: {this.props.item.firstName}</p>
            <p className='contactLabel'>Nazwisko: {this.props.item.lastName}</p>
            <a className='contactEmail' href='mailto:'{this.props.item.email}>{this.props.item.email}</a>
        </div>
    );
}

Contact.prototype = {
    item: PropTypes.object
}
