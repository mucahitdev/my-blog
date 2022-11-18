import React from 'react';
import { useData } from "../Context/DataContext";
import { IntlProvider, FormattedMessage } from "react-intl";
import { contact } from "./lang/Langs";

function Contact() {
  const { data} = useData();
  return (
    <div>
      <IntlProvider locale={data} messages={contact[data]}> 
      <h2><FormattedMessage id="reachMe"/></h2>
      <ul className='d-flex contact'>
        <li className='me-4 fs-1'><a href="https://github.com/mucahitdev" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i></a></li>
        <li className='me-4 fs-1'><a href="https://www.instagram.com/mucahitkdev/" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a></li>
        <li className='me-4 fs-1'><a href="https://twitter.com/mucahitdev" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a></li>
        <li className='me-4 fs-1'><a href="https://www.linkedin.com/in/mucahitdev/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a></li>
      </ul>
      </IntlProvider>
    </div>
  )
}

export default Contact