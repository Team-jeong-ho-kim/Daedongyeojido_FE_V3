import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { CollectBtn } from "../components/SeeallPage/CollectBtn";
import { Pagefooter } from "../components/PageFooter";
import { getClub } from "../apis/club"; // API 호출 함수 가져오기
import searchBtn from "../assets/searchBtn.svg";

export const SeeAll = () => {
  const [clubs, setClubs] = useState([]); // 동아리 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  // 데이터를 가져오는 함수
  const fetchClubs = async ({ clubName , clubBanner , title , setData }) => {
    try {
      const data = await instance.post('../apis/club.js', {
        clubName,
        title,
        clubBanner
      }); // API 호출
      setClubs(data); // 데이터를 상태에 저장

      setData({
        clubName: '',
        title: '',
        clubBanner: '',
      });
      
    } catch (error) {
      console.error("동아리 데이터를 가져오는 데 실패했습니다...", error);
    } finally {
      setLoading(false); // 로딩 상태 종료
    }
  };

  useEffect(() => {
    fetchClubs(); // 컴포넌트가 렌더링될 때 API 호출
  }, []);

  return (
    <Container>
      <Header />
      <Banner />
      <Content>
        <SectionTitle>전체 전공 동아리</SectionTitle>
        <SearchDiv>
          <SearchBar>
            <SearchInput placeholder="검색" />
            <SearchButton src={searchBtn} />
          </SearchBar>
        </SearchDiv>
        {loading ? ( // 로딩 중일 때 표시
          <LoadingMessage>로딩 중...</LoadingMessage>
        ) : (
          <Grid>
            {clubs.map((club) => (
              <Card key={club.id}>
                <CardImage>
                  <CollectBtn />
                </CardImage>
                <CardContent>
                  <h3>{club.name}</h3>
                  <p>{club.description}</p>
                </CardContent>
              </Card>
            ))}
          </Grid>
        )}
      </Content>
      <Pagefooter notMypage={true} />
    </Container>
  );
};

const LoadingMessage = styled.div`

`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 50vh;
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
`;

const SectionTitle = styled.h2`
  font-size: 34px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  font-weight: 300;
`;

const SearchDiv = styled.div`
  position: relative;
  width: 50%;
  margin: auto;
`;

const SearchBar = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 40px 0px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 20px;
  border: 1px solid #d32f2f;
  border-radius: 100px;
  display: flex;
`;

const SearchButton = styled.img`
  position: absolute;
  top: 5px;
  bottom: 5px;
  right: 5px;
  border-radius: 15px;
  cursor: pointer;
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
  background-color: #9d9d9d;
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
