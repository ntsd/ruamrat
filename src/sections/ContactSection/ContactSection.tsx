import React from 'react';

import {Section} from '../../components/Section/Section';
import './ContactSection.scss';
import {GoogleMap} from '../../components/GoogleMap/GoogleMap';
import {
  DescriptionCard,
  DescriptionCardProps,
} from '../../components/DescriptionCard/DescriptionCard';
import {Button} from '../../components/Button/Button';
import {RiPhoneLine, RiLineLine} from 'react-icons/ri';

export const ContactSection: React.FC = () => {
  const contactDescriptionFooter = (
    <>
      <a target="_blank" rel="noopener noreferrer" href="tel:0994916588">
        <Button
          size="large"
          type="link"
          style={{backgroundColor: '#00d', color: '#fff'}}
        >
          <RiPhoneLine />
          &nbsp;โทรเลย
        </Button>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://lin.ee/2GVWsmiLd"
      >
        <Button
          size="large"
          type="link"
          style={{backgroundColor: '#009F00', color: '#fff'}}
        >
          <RiLineLine />
          &nbsp;เพิ่มเพื่อน
        </Button>
      </a>
    </>
  );

  const contactDescription: DescriptionCardProps = {
    title: 'ติดต่อ',
    description: (
      <>
        บริษัท รวมรัตน์ เอ็นจิเนียริ่ง แอนด์ซัพพลาย จำกัด <br></br>
        293 ถนนฉลองกรุง แขวงลำผักชี <br></br>
        เขตลาดกระบัง กรุงเทพมหานคร 10520 <br></br>
        เวลา เปิด-ปิด: 7:30 - 17:00 นาฬิกา <br></br> <br></br>
        โทร: <a href="tel:0994916588"> 099-4916588</a>
        <br></br>
        Line: <a href="https://lin.ee/2GVWsmiLd"> @ruamrat</a>
        <br></br>
        Facebook: <a href="https://web.facebook.com/ruamrat/"> แฟนเพจของเรา</a>
        <br></br>
      </>
    ),
    footer: contactDescriptionFooter,
  };

  return (
    <Section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <DescriptionCard descriptionLong {...contactDescription} />
          </div>
          <div className="col-xl-7">
            <GoogleMap />
          </div>
        </div>
      </div>
    </Section>
  );
};
