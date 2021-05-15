import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0px 1px 3px ${Colors.gray};
  display: block;
`;

export const ProfilePage: FC = () => {
  return (
    <Wrapper>
        <span>This is a Profile page!</span>
    </Wrapper>
  );
};

export default ProfilePage;
