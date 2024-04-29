import { Card, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard({ news }) {
  return (
    <Card title={news.title} style={{ marginBottom: '10px' }}>
      <Typography>{news.description}</Typography>
      <Link to={`/news/${news.id}`}>See More</Link>
    </Card>
  );
}

export default NewsCard;
