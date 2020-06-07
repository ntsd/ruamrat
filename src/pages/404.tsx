import React from 'react';

import {Layout} from '../components/Layout/Layout';
import {Seo} from '../components/Seo/Seo';

const NotFoundPage = () => (
  <Layout>
    <Seo
      title="หน้านี้ไม่มีอยู่ | รวมรัตน์ กระจก อลูมิเนียม"
      description="หน้านี้ไม่มีอยู่ กรุณากลับหน้าหลัก"
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
