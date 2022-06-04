import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const ContactForm  = () => {
    const [state, handleSubmit] = useForm("mdobbqbj");
    if (state.succeeded) {
        return(
            <section className="section-contact" id="section-contact">
            <div className="form-submitted">
                <p>Awesome!<br/>I received your message and i will contact you soon</p>
            </div>
                <a href="#home" className={'btn'}>Return to start</a>
            </section>
        )

    }

    return (
        <section className="section-contact" id="section-contact">
            <h1 className={"section-title"}>Contact Me</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                    <div className="form-group">
                        <label htmlFor="message">
                            Your Message
                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                <button type="submit" className="btn" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </section>
    )
}

export default ContactForm