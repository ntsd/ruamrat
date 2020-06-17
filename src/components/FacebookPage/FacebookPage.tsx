import React, {useState, useEffect} from 'react';

export const FacebookPage: React.FC = () => {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    setShowIframe(true);
  });

  const width = '332';
  const height = '400';
  const pageUrl = 'https%3A%2F%2Fwww.facebook.com%2Fruamrat%2F';
  const appId = '606471186918943';
  const showFacepile = false;
  const hideCover = true;
  const smallHeader = false;
  const adaptContainerWidth = true;
  const src =
    'https://www.facebook.com/plugins/page.php?tabs=timeline' +
    `&href=${pageUrl}` +
    `&width=${width}` +
    `&height=${height}` +
    `&small_header=${smallHeader}` +
    `&adapt_container_width=${adaptContainerWidth}` +
    `&hide_cover=${hideCover}` +
    `&show_facepile=${showFacepile}` +
    `&appId=${appId}`;
  return (
    <>
      {showIframe && (
        <iframe
          title="รวมรัตน์ กระจก อลูมิเนียม กระจกอลูมิเนียม"
          src={src}
          width={width}
          height={height}
          style={{border: 'none', overflow: 'hidden'}}
          scrolling="no"
          allowTransparency={true}
          allow="encrypted-media"
        ></iframe>
      )}
    </>
  );
};
