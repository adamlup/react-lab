import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const Wrapper = styled.div``;

const Table = styled.table`
  width: 100%;

  th {
    text-align: left;
    border-bottom: solid ${Colors.gray} 1px;
    font-weight: bold;
    padding-bottom: 8px;
    color: ${Colors.black};
  }

  td {
    padding: 8px 0px;
    color: ${Colors.black};
  }
`;

const Title = styled.p`
  font-size: 20px;
  margin: 15px 0px;
  color: ${Colors.black};
`;

const FooterContainer = styled.div`
  text-align: right;
`;

const Footer = styled.p`
  font-size: 20px;
  margin: 15px 0px;
  color: ${Colors.black};
`;

export const Proposals: FC = () => {
  return (
    <Wrapper>
      <Title>Proposals</Title>
      <Table>
        <tr>
          <th>Name</th>
          <th>Entity</th>
          <th>Location</th>
          <th>Expertise</th>
          <th>Date</th>
          <th>Firm</th>
        </tr>
        <tr>
          <td>Operation</td>
          <td>Renault</td>
          <td>France</td>
          <td>#Tax</td>
          <td>20/01/2018</td>
          <td>Racine</td>
        </tr>
        <tr>
          <td>Op. Prometheus</td>
          <td>Renault HQ</td>
          <td>USA</td>
          <td>#M&A</td>
          <td>18/02/2019</td>
          <td>Clifford Chance</td>
        </tr>
        <tr>
          <td>Op. Latandre</td>
          <td>Renault</td>
          <td>Italia</td>
          <td>#Social</td>
          <td>18/02/2019</td>
          <td>SVZ</td>
        </tr>
      </Table>
      <FooterContainer>
        <Footer>See more proposals</Footer>
      </FooterContainer>
    </Wrapper>
  );
};

export default Proposals;