function Contacts(props){
    let contacts = props.items.map(function(contact) {
        return <Contact contact={contact} key={contact.id}/>;
    });

    return (<ul className='contactsList'>{contacts}</ul>);
}

Contacts.prototype = {
    items: React.PropTypes.array.isRequired
}