import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const UserPhoto = styled.div`
  text-align: center;

  img {
    width: 100px;
  }
`;

const UserInformation = styled.div`
  width: 100%;
`;

const UserContact = styled.div`
  width: auto;
  display: flex;
  align-items: flex-end;
`;

export const Profile: FC = () => {
  return (
    <Wrapper>
      <UserPhoto>
        <img src="logo192.png" alt="User photo" />
        <p>See profile</p>
      </UserPhoto>
      <UserInformation>
        <p>
          Humberta Swift
          <br />
          Clifford Chance
          <br />
          New York
          <br />
          Parnert
        </p>
      </UserInformation>
      <UserContact>
        <p>
          humbertaswift@mail.com
          <br />
          +33 (0) 6 12 34 56 78
        </p>
      </UserContact>
    </Wrapper>
  );
};

export default Profile;
