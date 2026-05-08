import React from 'react';
import ContactPageV1 from '../components/cms/ContactPageV1.jsx';

export default function ContactPage() { // Standardized page component name
return (
<><ContactPageV1 faq={JSON.parse(`{"items":[{"a":"We aim to respond to all inquiries within 24 business hours.","q":"How fast do you typically respond?"},{"a":"Yes, we support clients globally across multiple timezones.","q":"Do you offer international support?"},{"a":"Absolutely. Mention it in your message and we'll send a calendar link.","q":"Can I book a direct consultation?"},{"a":"Answer here","q":"New Question"},{"a":"Answer here","q":"New Question"},{"a":"Answer here","q":"New Question"}],"title":"Frequently Asked Questions","enabled":true}`)} hero={JSON.parse(`{"title":"Get in Touch! ","enabled":true,"subtitle":"We'd love to hear from you. Our friendly team is always here to chat."}`)} global={JSON.parse(`{"textColor":"#4B5563","accentColor":"#7C3AED","borderRadius":16,"headingColor":"#111827","primaryColor":"#c924eb","surfaceColor":"#F9FAFB","secondaryColor":"#18202f","sectionPadding":80,"backgroundColor":"#ffffff"}`)}></ContactPageV1></>
);
};
