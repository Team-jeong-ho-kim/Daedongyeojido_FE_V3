import { useState } from "react";
import styled from "styled-components";

export const Question = () => {
  const [contacts, setContacts] = useState([
    {
      platform: "instagram",
      contact: "@m.in_su08",
    },
    {
      platform: "연락처",
      contact: "010-4137-4208",
    },
  ]);
  const [student, setStudent] = useState({
    grade: "1",
    class: "3",
    number: "14",
    name: "최민수",
  });

  return (
    <QuestionAll>
      {contacts.map((data) => (
        <Platform key={data.platform}>
          {data.platform} : {data.contact}
        </Platform>
      ))}
      <StudentData>
        {student.grade}학년 {student.class}반 {student.number}번 {student.name}
      </StudentData>
    </QuestionAll>
  );
};

const StudentData = styled.div`
  display: flex;
`;

const Platform = styled.div`
  display: flex;
`;

const QuestionAll = styled.div`
  font-size: 22px;
  margin: 1% 0 0 7%;
`;
