const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const Profile = () => {
  return (
    <div style={person.theme}>
      <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="image" />
      <span>{person.name}</span>
    </div>
  );
};

export default Profile;
