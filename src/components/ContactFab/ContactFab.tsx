import React, { useState } from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { RiQuestionAnswerLine, RiLineLine, RiPhoneLine, RiFacebookLine } from 'react-icons/ri';

export const ContactFab: React.FC = () => {

  const [display, setDisplay] = useState('none');

  let displayTimeout: NodeJS.Timeout;

  window.addEventListener('scroll', () => {
    clearTimeout(displayTimeout);
    setDisplay('block');
    displayTimeout = setTimeout(() => {
      setDisplay('none');
    }, 3000);
  });

  return (
    <div style={{display: display}}>
      <Fab
        icon={<RiQuestionAnswerLine />}
        mainButtonStyles={{backgroundColor: 'rgba(255, 47, 0, 0.7)'}}
      >
        <Action
          text="โทร"
          style={{backgroundColor: '#00d'}}
          onClick={() => {
            Object.assign(document.createElement('a'), {
              target: '_blank',
              href: 'tel:0994916588'
            }).click();
          }}
        >
          <RiPhoneLine/>
        </Action>
        <Action
          text="เพิ่มเพื่อน"
          style={{backgroundColor: '#009F00'}}
          onClick={() => {
            Object.assign(document.createElement('a'), {
              target: '_blank',
              href: 'https://lin.ee/2GVWsmiLd'
            }).click();
          }}
        >
          <RiLineLine/>
        </Action>
        <Action
          text="เฟสบุ๊ค"
          style={{backgroundColor: '#1778F2'}}
          onClick={() => {
            Object.assign(document.createElement('a'), {
              target: '_blank',
              href: 'https://web.facebook.com/ruamrat'
            }).click();
          }}
        >
          <RiFacebookLine/>
        </Action>
      </Fab>
    </div>
  );
}
