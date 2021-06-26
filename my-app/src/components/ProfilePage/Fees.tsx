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

export const Fees: FC = () => {
  return (
    <Wrapper>
      <Title>Amount of fees</Title>
      <Table>
        <tr>
          <th>Year</th>
          <th>Cost center</th>
          <th>Total amount</th>
          <th>Law firm</th>
        </tr>
        <tr>
          <td>2019</td>
          <td>CS 153</td>
          <td>3 500€</td>
          <td>Clifford chance</td>
        </tr>
        <tr>
          <td>2018</td>
          <td>CS 153</td>
          <td>9 500€</td>
          <td>Linklaters</td>
        </tr>
        <tr>
          <td>2017</td>
          <td>CS 47</td>
          <td>10 500€</td>
          <td>Linklaters</td>
        </tr>
        <tr>
            <td></td>
            <td>CS 153</td>
            <td>18 500€</td>
            <td>Linklaters</td>
        </tr>
        <tr>
            <td></td>
            <td>CS 32</td>
            <td>15 500€</td>
            <td>Linklaters</td>
        </tr>
      </Table>
    </Wrapper>
  );
};

export default Fees;