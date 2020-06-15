import React from 'react';

import {Layout} from '../components/Layout/Layout';
import {Seo} from '../components/Seo/Seo';

const NotFoundPage = () => (
  <Layout>
    <Seo
      title="หน้านี้ไม่มีอยู่"
      description="กระจกอลูมิเนียม กระจก อลูมิเนียม มุ้งลวด เหล็กดัด อลูมิเนียมเส้น ลาดกระบัง มีนบุรี หนองจอก ร่มเกล้า"
      keywords={[
        'กระจกอลูมิเนียม',
        'กระจก อลูมิเนียม',
        'กระจก',
        'อลูมิเนียม',
        'เหล็กดัด',
        'อลูมิเนียมเส้น',
        'มุ้งลวด',
        'ลาดกระบัง',
        'มีนบุรี',
        'ร่มเกล้า',
        'หนองจอก',
      ]}
    />
    <h1>หน้านี้ไม่มีอยู่</h1>
    <p>เราเสียใจกับสิ่งที่เกิดขึ้น กรุณากลับหน้าหลัก</p>
  </Layout>
);

export default NotFoundPage;
