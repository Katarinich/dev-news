import React from 'react';
import {
  useGetNewsByIdQuery,
  useGetNewsCommentsQuery,
} from '../../store/news/query';
import { useParams } from 'react-router-dom';
import { Card, Flex, Spin, Typography } from 'antd';
import dayjs from 'dayjs';

const { Text, Paragraph, Title } = Typography;

function NewsPage() {
  const { id } = useParams();

  const { data: news, isLoading: isNewsLoading } = useGetNewsByIdQuery(id);
  const { data: newsComments, isLoading: isCommentsLoading } =
    useGetNewsCommentsQuery(id);

  if (isNewsLoading && isCommentsLoading) {
    return (
      <Flex justify="center" align="center" style={{ height: '100%' }}>
        <Spin />
      </Flex>
    );
  }

  return (
    <>
      <Card
        title={news?.title}
        extra={
          <Text type="secondary">
            {dayjs(news?.date).format('DD MMM YYYY HH:mm:ss')}
          </Text>
        }
        style={{marginBottom: '20px'}}
      >
        <Paragraph type="secondary">By {news?.user.username}</Paragraph>

        <Paragraph>{news?.content}</Paragraph>
      </Card>

      <Title level={3}>Comments</Title>

      {newsComments.map((comment) => (
        <Card
          title={comment.user.username}
          extra={
            <Text type="secondary">
              {dayjs(comment.date).format('DD MMM YYYY HH:mm:ss')}
            </Text>
          }
          key={comment.id}
        >
          <Paragraph>{comment.text}</Paragraph>
        </Card>
      ))}
    </>
  );
}

export default NewsPage;
