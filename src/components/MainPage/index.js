import React from 'react';
import { useGetNewsQuery } from '../../store/news/query';
import NewsCard from '../NewsCard';
import { Flex, Spin } from 'antd';

function MainPage() {
  const { data: news, isLoading } = useGetNewsQuery();

  return (
    <>
      {news && news.map((n) => <NewsCard news={n} key={n.id} />)}

      {isLoading && (
        <Flex justify="center" align="center" style={{ height: '100%' }}>
          <Spin />
        </Flex>
      )}
    </>
  );
}

export default MainPage;
