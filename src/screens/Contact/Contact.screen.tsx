import { Contact as ContactContainer } from '@containers';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us | The Aryans Academy';
    // Update the title whenever MyComponent mounts or updates

    return () => {
      // Optionally, reset the title when the component is unmounted
      document.title = 'The Aryans Academy';
    };
  }, []);

  return <ContactContainer />;
};

export default Contact;
