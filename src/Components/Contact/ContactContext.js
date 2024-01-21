import { createContext } from "react";
import { useState } from "react";

export const ContactContext = createContext();
export function ContactContextProvider(props) {

    let [contactDark, setContactDark] = useState(false);
    const value = { contactDark, setContactDark };

    return (
        <ContactContext.Provider value={value}>
            {props.children}
        </ContactContext.Provider>
    )
}