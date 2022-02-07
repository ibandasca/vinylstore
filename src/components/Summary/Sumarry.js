import React, { useContext } from "react";
import styled from "styled-components";
import { VinylAmountContext } from "../../contexts/vinylAmountContext";

const Container = styled.div`
  background-color: grey;
  padding: 24px;
  width: 400px;
  border-radius: 2rem;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  margin-top: 20px;
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 14px;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Summary = () => {
  const { vinylsAdded } = useContext(VinylAmountContext);

  const totaltoPay = vinylsAdded.reduce((acc, amount) => {
    return acc + amount.totalPrice;
  }, 0);

  return (
    <Container>
      <div>Summary</div>
      <TitleRow>
        <div>Artist</div>
        <div>Amount</div>
        <div>Total</div>
      </TitleRow>
      <hr />
      {vinylsAdded.map((element) => {
        return (
          <ElementContainer key={element.id}>
            <Text>{element.artist}</Text>
            <Text>{element.amount}</Text>
            <Text>{element.totalPrice}</Text>
          </ElementContainer>
        );
      })}
      <hr />
      <TotalContainer>
        <h5>Total</h5>
        <div>{`${totaltoPay}$`}</div>
      </TotalContainer>
    </Container>
  );
};

export { Summary };
