import members from "../../../../data/members.json";

export const MemberCarousel = () => {
  console.log("hi we are:", members);

  return (
    <div className="memberCarousel">
      {members.map((member, index) => {
        return (
          <div
            key={index}
            className={/*`${member.name.toLowerCase()}`*/ "memberCard"}
            style={{ width: 100 / (members.length + 1) + "%" }}
          >
            <img
              src={`./public/mugshot_${member.name.toLowerCase()}.jpg`}
              alt={member.name}
            />
            <h2>{member.name}</h2>

            <ul>
              <li>style:</li>
              <li>{member.style}</li>
            </ul>
            <ul>
              <li>email:</li>
              <li>
                <a href={`mailto: ${member.email}`}>{member.email}</a>
              </li>
            </ul>
            <ul>
              <li>instagram:</li>
              <li>
                <a href={`${member.instagramLink}`} target="_blank">
                  {member.instagram}
                </a>
              </li>
            </ul>

            <ul>
              <li>soundcloud:</li>
              <li>
                <a href={`${member.soundcloudLink}`} target="_blank">
                  @{member.soundcloud}
                </a>
              </li>
            </ul>

            <ul>
              <li>last seen:</li>
              <li>{member.lastSeen}</li>
            </ul>

            <ul>
              <li>wanted for:</li>
              <li>{member.wantedFor}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
