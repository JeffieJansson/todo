
import styled from "styled-components";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const EmptyText = styled.p`
  font-size: 16px;
  color: #666;
`;

 const CheckIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 10px;
  `;

export const EmptyState = () => {

return (
  <EmptyContainer>
    <EmptyTitle>No todos here!
    <CheckIcon src="/check.svg" alt="No todos" />
    </EmptyTitle>
    <EmptyText>Either you deserve a break or it's time to add some todos!</EmptyText>
  </EmptyContainer>
)
}