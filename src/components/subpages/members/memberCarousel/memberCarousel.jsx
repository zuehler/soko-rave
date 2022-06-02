import { JakobKrakel } from "../jakobKrakel/jakobKrakel.jsx";
import { Gucci } from "../gucci/gucci.jsx";

export const MemberCarousel = () => {
  const membersArr = [
    "Gucci",
    "Hermyla",
    "Krakel",
    "Lomo",
    "mOkOhUiU",
    "resaresa",
  ];

  return (
    <div className="memberCarousel">
      <div
        className="memberCard"
        style={{ width: 100 / (membersArr.length + 1) + "%" }}
      >
        <JakobKrakel />
      </div>
      <div
        className="memberCard"
        style={{ width: 100 / (membersArr.length + 1) + "%" }}
      >
        <Gucci />
      </div>
      <div
        className="memberCard"
        style={{ width: 100 / (membersArr.length + 1) + "%" }}
      >
        <JakobKrakel />
      </div>
      <div
        className="memberCard"
        style={{ width: 100 / (membersArr.length + 1) + "%" }}
      >
        <JakobKrakel />
      </div>
      <div
        className="memberCard"
        style={{ width: 100 / (membersArr.length + 1) + "%" }}
      >
        <JakobKrakel />
      </div>
      <div
        className="memberCard"
        style={{ width: 100 / (membersArr.length + 1) + "%" }}
      >
        <JakobKrakel />
      </div>
    </div>
  );
};
