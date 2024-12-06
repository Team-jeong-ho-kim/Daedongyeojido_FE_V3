import styled from "styled-components";

export const Major = ({ Majors }) => {
  return (
    <MajorAll>
      {Majors.map((major) => (
        <MajorItem key={major.id}>{major.text}</MajorItem>
      ))}
    </MajorAll>
  );
};

const MajorAll = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 10px;
`;

const MajorItem = styled.div`
  width: 320px;
  height: 80px;
  border: 1px solid #b2b2b2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  box-shadow: 0.1px 3px 5px 1px #b2b2b2;
  font-size: 24px;
  font-weight: 400;
`;
