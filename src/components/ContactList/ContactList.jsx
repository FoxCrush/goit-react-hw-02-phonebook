import ContactListItem from "components/ContactListItem";
function ClassList(props) {
  return (
    <div className="contactListContainer">
      <ul>
        {props.contactsToShow.map(({ id, name, number }) => (
          <ContactListItem
            id={id}
            key={id}
            name={name}
            number={number}
            deleteMethod={props.deleteMethod}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClassList;
