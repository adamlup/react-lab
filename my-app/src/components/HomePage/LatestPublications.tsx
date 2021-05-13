import { FC } from "react";
import styled from "styled-components";
import { Publication } from "../../entities/Publication";
import { PublicaitonRepo } from "../../entities/PublicationRepo";
import { Repository } from "../../entities/Repository";
import { Colors } from "../../styledHelpers/Colors";

const LatestPublicationsWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0px 1px 3px ${Colors.gray};
  margin: 20px 0px;
  width: 100%;
`;

const LatestPublicationFeatured = styled.div`
  position: relative;
  background-image: url("./media/icons/placeholder2.png");
  background-size: auto;
  background-repeat: no-repeat;
  background-size: 430px;
  width: 430px;
  height: 430px;
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
  color: ${Colors.blue};
  font-size: 20px;
`;

const CardDetails = styled.div`
  display: table-cell;
  position: relative;
  padding: 10px;
  width: 100%;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Icon = styled.img`
  width: 15px;
  vertical-align: middle;
  margin: 0 5px;
`;

function publications(): Publication[] {
  let data: Repository<Publication> = new PublicaitonRepo();
  return data.getAll();
}

export const LatestPublications: FC = () => {
  return (
    <LatestPublicationsWrapper>
      <LatestPublicationFeatured>
        <LatestPublicationFeaturedFooter>
          {
            <div>
              <Title>{publications()[0].title}</Title>
              {publications()[0].date}
              {publications()[0].userName}
            </div>
          }
        </LatestPublicationFeaturedFooter>
      </LatestPublicationFeatured>
      <LatestPublicationsRest>
        <Title>Latest Publications</Title>
        {publications().map((p, i) => (
          <PublicationCard>
            <Image src="./media/icons/placeholder.png" />
            <CardDetails>
              <Title>{p.title}</Title>
              <CardFooter>
                <p>
                  {p.date} &bull; {p.userName}
                </p>
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
