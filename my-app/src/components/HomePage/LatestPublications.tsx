import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { IPostReducer } from "../../reducers/PostReducers";
import { IUserReducer } from "../../reducers/UserReducers";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";

const LatestPublicationsWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 1px 3px ${Colors.gray};
  margin: 20px 0px;
  background-color: ${Colors.white};
`;

const LatestPublicationFeatured = styled.div`
  position: relative;
  background-image: url("https://via.placeholder.com/400/85b98d?text=Publication+Card");
  background-repeat: no-repeat;
  background-size: 1000px;
  width: 430px;
  height: 430px;
  border-radius: 5px 0 0 5px;

  span {
    color: ${Colors.black};
  }
`;

const LatestPublicationFeaturedFooter = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
`;

const LatestPublicationsRest = styled.div`
  margin: 15px 0 15px 15px;
  width: 50%;
`;

const PublicationCard = styled.div`
  display: flex;
  margin: 15px 0px;

  div {
    display: block;
  }
`;

const Title = styled.p`
  color: ${Colors.black};
  font-size: 20px;
`;

const CardDetails = styled.div`
  display: table-cell;
  position: relative;
  padding: 10px;
  width: 100%;
  color: ${Colors.black};
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ProfilePhoto = styled.img`
  width: 20px;
  vertical-align: middle;
  margin: 0 5px;
  border-radius: 50%;
`;

export const LatestPublications: FC = () => {
  const posts = useSelector<IState, IPostReducer>((state) => ({
    ...state.posts,
  }));

  const users = useSelector<IState, IUserReducer>((state) => ({
    ...state.users,
  }));

  return (
    <LatestPublicationsWrapper>
      <LatestPublicationFeatured>
        <LatestPublicationFeaturedFooter>
          {
            <div>
              <Title>{posts.postsList[1]?.title}</Title>
              <span>7 jan. 2020</span>
              <ProfilePhoto src="https://via.placeholder.com/100.png/fe7811" />
              <span>
                {
                  users.userList.find(
                    (user) => user.id === posts.postsList[1].userId
                  )?.name
                }
              </span>
            </div>
          }
        </LatestPublicationFeaturedFooter>
      </LatestPublicationFeatured>
      <LatestPublicationsRest>
        <Title>Latest Publications</Title>
        {posts.postsList.slice(49, 52).map((post, index) => (
          <PublicationCard>
            <Image src="https://via.placeholder.com/500.png/36797e?text=publication+card" />
            <CardDetails>
              <Title>{post.title}</Title>
              <CardFooter>
                7 jan. 2020
                <ProfilePhoto src="https://via.placeholder.com/100.png/fe7811" />
                {users.userList.find((user) => user.id === post.userId)?.name}
              </CardFooter>
            </CardDetails>
          </PublicationCard>
        ))}
        <Title>See more publications</Title>
      </LatestPublicationsRest>
    </LatestPublicationsWrapper>
  );
};

export default LatestPublications;