import sokoData from "../../data/soko.json";
import memberData from "../../data/members.json";

export const Contact = () => {
  return (
    <div className="contact">
      <h1>contact</h1>

      <span className="contactSoko">
        <img src="./public/soko_rave_logo.jpg" alt="" className="sokoLogo" />
        <ul>
          <li>{sokoData.name}</li>
          <li>
            email: <a href={`mailto: ${sokoData.email}`}>{sokoData.email}</a>
          </li>
          <li>
            instagram:{" "}
            <a href={sokoData.instagram.link}>{sokoData.instagram.username}</a>
          </li>
          <li>
            soundcloud:{" "}
            <a href={sokoData.soundcloud.link}>
              {sokoData.soundcloud.username}
            </a>
          </li>
        </ul>
      </span>
      <div>
        {memberData.map((member, index) => {
          return (
            <button
              key={index}
              className={`pickMemberBtn ${member.name}`}
              style={{ width: 100 / (memberData.length + 1) + "%" }}
            >
              {member.name}
            </button>
          );
        })}
      </div>
      <span className="contactMember">
        <img
          src="./public/mugshot_jakobKrakel.jpg"
          alt=""
          className="sokoFoto"
        />
        <ul>
          <li>{memberData[0].name}</li>
          <li>
            email: <a href={`mailto: ${sokoData.email}`}>{sokoData.email}</a>
          </li>
          <li>
            instagram:{" "}
            <a href={sokoData.instagram.link}>{sokoData.instagram.username}</a>
          </li>
          <li>
            soundcloud:{" "}
            <a href={sokoData.soundcloud.link}>
              {sokoData.soundcloud.username}
            </a>
          </li>
        </ul>
      </span>
    </div>
  );
};
