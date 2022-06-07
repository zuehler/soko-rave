import "../../styles/subpage-members/members.scss";

import { MemberCarousel } from "../../components/members/memberCarousel/memberCarousel";

export const Members = () => {
  return (
    <div className="members">
      <h1>SOKO_RAVE | most wanted</h1>
      <MemberCarousel />
    </div>
  );
};
