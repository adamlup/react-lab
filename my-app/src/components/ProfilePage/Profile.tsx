import { FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const UserPhoto = styled.div`
  text-align: center;
  color: ${Colors.black};

  img {
    margin: 10px;
    width: 100px;
    border-radius: 50%;
  }
`;

const UserInformation = styled.div`
  width: 100%;
  margin: 10px 0;
`;

const UserContact = styled.div`
  width: auto;
  display: flex;
  float: right;
`;

const EditableField = styled.input`
  border: 0;
  outline: none;
  margin: 2px;
  transition: 0.2s;

  :enabled {
    border: 1px solid ${Colors.black};
    border-radius: 3px;
    transition: 0.2s;

    :focus {
      border: 1px solid ${Colors.black};
      background-color: ${Colors.white};
      transition: 0.2s;
    }
  }

  :disabled {
    background-color: ${Colors.white};
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;

  float: right;

  :hover {
    cursor: pointer;
  }
`;

export const Profile: FC = () => {
  const [editable, setEnabled] = useState(true);

  const handleEdit = () => {
    setEnabled(function changeValue(value) {
      return !value;
    });
  };

  return (
    <Wrapper>
      <UserPhoto>
        <img src="https://via.placeholder.com/200/b02631?text=profile+pic"/>
        <p>See profile</p>
      </UserPhoto>
      <UserInformation>
        <EditableField
          disabled={editable}
          defaultValue="Humberta Swift"
          contentEditable={true}
        />
        <Icon src="./media/icons/settings.svg" onClick={handleEdit}></Icon>
        <br />
        <EditableField
          disabled={editable}
          defaultValue="Clifford Chance"
          contentEditable={true}
        />
        <br />
        <EditableField
          disabled={editable}
          defaultValue="New York"
          contentEditable={true}
        />
        <br />
        <EditableField
          disabled={editable}
          defaultValue="Parnert"
          contentEditable={true}
        />
        <br />
        <UserContact>
          <p>
            <EditableField
              disabled={editable}
              defaultValue="humbertaswift@mail.com"
              contentEditable={true}
            />

            <br />
            <EditableField
              disabled={editable}
              defaultValue="+33 (0) 6 12 34 56 78"
              contentEditable={true}
            />
          </p>
        </UserContact>
      </UserInformation>
    </Wrapper>
  );
};

export default Profile;
