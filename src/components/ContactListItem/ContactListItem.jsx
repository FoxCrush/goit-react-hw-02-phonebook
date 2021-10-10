function ContactListItem(props) {
  const { name, number, id } = props;
  return (
    <li>
      {name}: {number}
      <button
        type="button"
        className="deleteButton"
        onClick={() => props.deleteMethod(id)}
      >
        delete
      </button>
    </li>
  );
}

export default ContactListItem;
