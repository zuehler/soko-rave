import { JakobKrakel } from "../jakobKrakel/jakobKrakel.jsx";
import { Gucci } from "../gucci/gucci.jsx";
import { Hermyla } from "../hermyla/hermyla.jsx";
import { Lomo } from "../lomo/lomo.jsx";
import { Mokohuiu } from "../mokohuiu/mokohuiu.jsx";
import { Resaresa } from "../resaresa/resaresa.jsx";

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
        <Gucci />
      </div>
      <div
        className="memberCard"
        style={{ width: 100 / (membersArr.length + 1) + "%" }}
      >
        <Hermyla />
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
        <Lomo />
      </div>
      <div
        className="memberCard"
        style={{ width: 100 / (membersArr.length + 1) + "%" }}
      >
        <Mokohuiu />
      </div>
      <div
        className="memberCard"
        style={{ width: 100 / (membersArr.length + 1) + "%" }}
      >
        <Resaresa />
      </div>
    </div>
  );
};
