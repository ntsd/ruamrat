import React from 'react'

export const FacebookPage: React.FC = () => {
  const src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fruamrat%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1261066970649914";
  return <iframe src={src} width="340" height="500" style={{border: 'none', overflow: 'hidden'}} scrolling="no" allowTransparency={true} allow="encrypted-media"></iframe>
}
