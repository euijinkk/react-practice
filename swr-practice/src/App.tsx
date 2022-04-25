import { client, fetcher } from "libs/api";
import useSWR, { useSWRConfig } from "swr";
import styled from "styled-components";
import Articles from "Articles";

export interface IArticles {
  id: number;
  title: string;
}

export interface ArticleSWRResponse<T> {
  status: number;
  data: T;
}

function App() {
  const { data, error } = useSWR<ArticleSWRResponse<IArticles[]>>(
    "/article",
    fetcher
    // { refreshInterval: 2000 }
  );
  const { mutate } = useSWRConfig();
  if (!data) return <></>;
  if (error) return <></>;
  console.log(`data`, data);
  const articleData = data.data;

  const handlePost = async () => {
    if (!articleData) return;
    const id = articleData.length + 1;

    await client.post("article", { id, title: `${id}번째 게시물` });
    mutate(
      "/article",
      { ...data, data: [[...articleData, { id, title: `${id}번째 게시물` }]] },
      true
      // 갱신 시킨다. - true - 클라랑 서버 둘다 바꿔준다.
      // 갱신 시키지 않는다 - false -> swr로 받아온 data만 바꿔준다.
    );
    // mutate();
  };
  // 언제 쓰냐 이걸
  // get 해온다음 클라에서 filter 시킨다.

  const handleMutate = () => {};
  // mutate -> 데이터를 revalidate - 원격-로컬 동기화

  return (
    <div>
      <Articles />
      <StyledCenterLine />
      {data.data?.map((li) => (
        <div key={li.id}>{li.title}</div>
      ))}
      <button onClick={handlePost}>post button</button>
      <button onClick={handleMutate}>mutate button</button>
    </div>
  );
}

export default App;

const StyledCenterLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
`;
