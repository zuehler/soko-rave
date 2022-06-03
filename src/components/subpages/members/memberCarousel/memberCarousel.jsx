import { JakobKrakel } from "../jakobKrakel/jakobKrakel.jsx";
import { Gucci } from "../gucci/gucci.jsx";
import { Hermyla } from "../hermyla/hermyla.jsx";
import { Lomo } from "../lomo/lomo.jsx";
import { Mokohuiu } from "../mokohuiu/mokohuiu.jsx";
import { Resaresa } from "../resaresa/resaresa.jsx";

export const MemberCarousel = () => {
  const memberComponentsArr = [
    <Gucci />,
    <Hermyla />,
    <JakobKrakel />,
    <Lomo />,
    <Mokohuiu />,
    <Resaresa />,
  ];

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
      {memberComponentsArr.map((memberComponent) => {
        return (
          <div
            className="memberCard"
            style={{ width: 100 / (memberComponentsArr.length + 1) + "%" }}
          >
            {memberComponent}
          </div>
        );
      })}
    </div>
  );
};
