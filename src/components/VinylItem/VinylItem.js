import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 100px;
`;

const Image = styled.img`
  height: 60pt;
`;

const ImageText = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Title = styled.h5`
  margin: 0px;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0;
`;

const PriceContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
`;

const Section = styled.div`
  margin: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 16px;
`;

const VinylItem = ({ data }) => {
  const [amount, setAmount] = useState(0);
  const totalPrice = amount * data.price;

  const handleIncreaseTheAmount = () => {
    setAmount(amount + 1);
    console.log(data.id);
  };

  const handleDecreaseTheAmount = () => {
    setAmount(amount - 1);
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={data.image} alt="vinyl-img" />
        <ImageText>
          <Title>{data.artist}</Title>
          <Text>{data.title}</Text>
        </ImageText>
      </ImageContainer>
      <PriceContainer>
        <Section>
          <Title>Price</Title>
          <Text>{`${data.price}$`}</Text>
        </Section>
        <Section>
          <Title>Amount</Title>
          <ButtonContainer>
            <Button onClick={handleDecreaseTheAmount} disabled={amount === 0}>
              {"<"}
            </Button>
            <Text>{amount}</Text>
            <Button onClick={handleIncreaseTheAmount}>{">"}</Button>
          </ButtonContainer>
        </Section>
        <Section>
          <Title>Total</Title>
          <Text>{`${totalPrice}$`}</Text>
        </Section>
      </PriceContainer>
    </Container>
  );
};

export { VinylItem };
