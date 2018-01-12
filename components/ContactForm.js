function ContactForm (contact){
    return (
        <form className='contactForm'>
            <input type='text' placeholder='Imię' value={contact.firstName} />
            <input type='text' placeholder='Nazwisko' value={contact.lastName} />
            <input type='email' placeholder='Email' value={contact.email} />
            <button type='submit'>Dodaj kontakt</button>
        </form>
    );
};

ContactForm.prototype = {
    contact: React.PropTypes.object.isRequired
}