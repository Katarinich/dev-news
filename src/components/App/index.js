import Header from '../Header';
import Footer from '../Footer';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage';
import NewsPage from '../NewsPage';
import SignIn from '../SignIn';

function App() {
  return (
    <Layout
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Header />

      <Content style={{ padding: '0px 80px', flexFlow: 1, overflow: 'auto' }}>
        <Routes>
          <Route path="/news/:id" element={<NewsPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route index element={<MainPage />} />
        </Routes>
      </Content>

      <Footer />
    </Layout>
  );
}

export default App;
