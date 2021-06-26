import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { Profile } from "./Profile";
import { TopOptions } from "./TopOptions";
import { Characteristics } from "./Characteristics";
import { PanelInfo } from "./PanelInfo";
import { Proposals } from "./Proposals";
import { Reviews } from "./Reviews";
import { Fees } from "./Fees";

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0px 1px 3px ${Colors.gray};
  background-color: ${Colors.white};
  color: ${Colors.blue};
  display: block;
`;

export const ProfilePage: FC = () => {
  return (
    <Wrapper>
      <TopOptions />
      <Profile />
      <Characteristics />
      <PanelInfo />
      <Proposals />
      <Reviews />
      <Fees />
    </Wrapper>
  );
};

export default ProfilePage;
