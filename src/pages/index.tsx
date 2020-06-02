import React from 'react';
import {Layout} from '../components/Layout/Layout';
import {Seo} from '../components/Seo/Seo';
import {HomeSection} from '../sections/HomeSection/HomeSection';
import {ServicesSection} from '../sections/ServicesSection/ServicesSection';
import {ContactSection} from '../sections/ContactSection/ContactSection';
// import { GallerySection } from '../sections/GallerySection/GallerySection'

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="รวมรัตน์"
        description="ติดตั้ง ผลิต กระจก อลูมิเนียม"
        keywords={['รวมรัตน์', 'กระจกอลูมิเนียม', 'ติดตั้งกระจกอลูมิเนียม']}
      />
      <HomeSection />
      <ServicesSection />
      {/* <GallerySection/> */}
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
