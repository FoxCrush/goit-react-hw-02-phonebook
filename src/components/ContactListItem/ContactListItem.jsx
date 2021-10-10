function ContactListItem(props) {
  const { name, number } = props;
  return (
    <li>
      {name}: {number}
    </li>
  );
}

export default ContactListItem;
