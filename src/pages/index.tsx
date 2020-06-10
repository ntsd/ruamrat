import React from 'react';
import {Layout} from '../components/Layout/Layout';
import {Seo} from '../components/Seo/Seo';
import {HomeSection} from '../sections/HomeSection/HomeSection';
import {ServicesSection} from '../sections/ServicesSection/ServicesSection';
import {ContactSection} from '../sections/ContactSection/ContactSection';
import {GallerySection} from '../sections/GallerySection/GallerySection';

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="รวมรัตน์ กระจก อลูมิเนียม"
        description="จำหน่าย ติดตั้ง กระจก อลูมิเนียม มุ้งลวด เหล็กดัด อลูมิเนียมเส้น ลาดกระบัง ฉลองกรุง ร่มเกล้า หนองจอก"
        keywords={[
          'รวมรัตน์',
          'กระจกอลูมิเนียม',
          'กระจก',
          'อลูมิเนียม',
          'เหล็กดัด',
          'อลูมิเนียมเส้น',
          'มุ้งลวด',
          'มุ้งพับจีบ',
          'มุ้งบานเลื่อน',
          'ลาดกระบัง',
          'ฉลองกรุง',
          'ร่มเกล้า',
          'หนองจอก',
        ]}
      />
      <HomeSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
