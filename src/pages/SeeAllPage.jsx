import styled from "styled-components";
import { Header } from "../components/Header";
import { CollectBtn } from "../components/SeeallPage/CollectBtn";
import { Pagefooter } from "../components/PageFooter";

export const SeeAll = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Content>
        <SectionTitle>전체 전공 동아리</SectionTitle>
        <SearchBar>
          <SearchInput placeholder="검색" />
          <SearchButton>🔍</SearchButton>
        </SearchBar>
        <Grid>
          {Array.from({ length: 8 }).map((_, index) => (
            <Card key={index}>
              <CardImage>
                <CollectBtn />
              </CardImage>
              <CardContent>
                <h3>대동여지도</h3>
                <p>대동여지도와 실록 서비스를 개발 및 운영 중인 동아리</p>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Content>
      <Pagefooter />
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-family: "Pretendard";
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ccc;
  margin-bottom: 40px;
`;

const Content = styled.main`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 34px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  font-weight: 300;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: red;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 200px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const CardImage = styled.div`
  width: 100%;
  height: 150px;
  background-color: #bbb;
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    margin: 0;
    font-size: 18px;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 14px;
  }
`;
