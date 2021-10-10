import ContactListItem from "components/ContactListItem";
function ClassList(props) {
  return (
    <div className="contactListContainer">
      <ul>
        {props.contactsToShow.map(({ id, name, number }) => (
          <ContactListItem key={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
}

export default ClassList;
