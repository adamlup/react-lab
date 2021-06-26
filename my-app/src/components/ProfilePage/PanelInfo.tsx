import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { IUserReducer } from "../../reducers/UserReducers";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";

const Wrapper = styled.div`
`;

const Title = styled.p`
  font-size: 20px;
  margin: 15px 0px;
  color: ${Colors.black};
`;

const Title2 = styled(Title)`
   color: ${Colors.gray};
   font-size: 18px;
   padding:10px 0;
 `;

 const InputField = styled.input`
 display:block;
 height: fit-content;
 width:fit-content;
 width:100%;
 color: darkgrey;
 border-radius: 0.5rem;
 border: none;
 padding: 10px;
 background-color: transparent;
 display: block;
 font-size: 15px;
`;

const SmallWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 background-color: ${Colors.gray};
`;

const UserImage = styled.img`
  width: 50px;
  margin: 10px;
  border-radius: 50%;
`;

const Name = styled.div`
  display:block;
  height: fit-content;
  width:fit-content;
  border-radius: 0.5rem;
  border: none;
  padding-left: 50px;
  padding: 10px;
  font-size: 15px;
  margin:0;
  color: ${Colors.black};
`;

export const PanelInfo: FC = () => {
    const users = useSelector<IState, IUserReducer>((state) => ({
        ...state.users,
      }));

    return (
        <Wrapper>
        <Title>Panel informations</Title>
        <Title2>Hourly fee</Title2>
        <Title>610€/hour (Negociated)</Title>
        <Title2>Terms & conditions</Title2>
        <Title>Monthly 10k€ retainer - see with Jeanny Smith</Title>
        <InputField type= "file" name="file" style={{ background:'#F5F7F9'}}/>
        <Title>Services & projects</Title>
        <Title2>Corporate M&A and international acquisitions</Title2>
        <Title>Internal correspondants</Title>
        <SmallWrapper>
          <UserImage src="https://via.placeholder.com/200/b02631?text=profile+pic"/>
          <Name>Firstname Lastname</Name>
          <img src="./media/icons/comments.svg"/>
          <Name>Message</Name>
          <img src="./media/icons/people.svg"/>
          <Name>Profile</Name>
        </SmallWrapper>
        <SmallWrapper>
        <UserImage src="https://via.placeholder.com/200/b02631?text=profile+pic"/>
          <Name>Firstname Lastname</Name>
          <img src="./media/icons/comments.svg"/>
          <Name>Message</Name>
          <img src="./media/icons/people.svg"/>
          <Name>Profile</Name>
        </SmallWrapper>
        </Wrapper>
    );
};

export default PanelInfo;