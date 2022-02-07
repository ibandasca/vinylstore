import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { VinylAmountContext } from "../../contexts/vinylAmountContext";

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
  const { vinylsAdded, setVinylsAdded } = useContext(VinylAmountContext);
  const [amount, setAmount] = useState(0);
  const totalPrice = amount * data.price;

  const vinyl = {
    ...data,
    amount: amount,
    totalPrice: totalPrice,
  };
  let arrayOfVinyls = [...vinylsAdded];

  const handleIncreaseTheAmount = () => {
    setAmount(amount + 1);
  };

  useEffect(() => {
    const alreadyInTheBag = vinylsAdded.some((element) => {
      return element.id === data.id;
    });

    if (!alreadyInTheBag) {
      arrayOfVinyls.push(vinyl);

      setVinylsAdded(arrayOfVinyls);
    } else {
      const vinylIndex = vinylsAdded.findIndex((obj) => obj.id === data.id);
      const updateArray = [...vinylsAdded];
      updateArray[vinylIndex] = vinyl;
      setVinylsAdded(updateArray);
    }
  }, [amount]);

  const handleDecreaseTheAmount = () => {
    setAmount(amount - 1);
  };

  return (
    <Container data-testid="item-container">
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
          <Text data-testid="price">{`${data.price}$`}</Text>
        </Section>
        <Section>
          <Title>Amount</Title>
          <ButtonContainer>
            <Button
              onClick={handleDecreaseTheAmount}
              disabled={amount === 0}
              data-testid="decrease-amount-button"
            >
              {"<"}
            </Button>
            <Text data-testid="amount">{amount}</Text>
            <Button
              onClick={handleIncreaseTheAmount}
              data-testid="increase-amount-button"
            >
              {">"}
            </Button>
          </ButtonContainer>
        </Section>
        <Section>
          <Title>Total</Title>
          <Text data-testid="total-price">{`${totalPrice}$`}</Text>
        </Section>
      </PriceContainer>
    </Container>
  );
};

export { VinylItem };
