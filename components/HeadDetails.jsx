import faviconImg from '../assets/images/favicon.ico';

export default function HeadDetails() {
  console.log('favicon', faviconImg)
  return (
    <>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={faviconImg}
        />
    </>
  );
}
