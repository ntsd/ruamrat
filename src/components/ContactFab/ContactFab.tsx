import React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { RiQuestionAnswerLine, RiLineLine, RiPhoneLine } from 'react-icons/ri';

export const ContactFab: React.FC = () => {
  return (
    <Fab
      icon={<RiQuestionAnswerLine />}
      mainButtonStyles={{backgroundColor: 'rgba(255, 47, 0, 0.8)'}}
    >
      <Action
        text="Add Line"
        style={{backgroundColor: 'rgba(0, 185, 0, 0.8)'}}
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
        text="Call"
        style={{backgroundColor: 'rgba(0, 0, 185, 0.8)'}}
        onClick={() => {
          Object.assign(document.createElement('a'), {
            target: '_blank',
            href: 'tel:0994916588'
          }).click();
        }}
      >
        <RiPhoneLine/>
      </Action>
    </Fab>
  );
}
