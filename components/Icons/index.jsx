import Svg, { Circle, Defs, Image, Path, Pattern, Use } from 'react-native-svg';

export const IconPlay = () => {

  return (
    <Svg width="11" height="14" viewBox="0 0 11 14" fill="none" >
      <Path d="M0 0L10.9688 6.98438L0 13.9688V0Z" fill="#021123" />
    </Svg>
  );
};

export const IconPause = () => {

  return (
    <Svg width="12" height="14" viewBox="0 0 12 14" fill="none" >
      <Path d="M8.01562 0H12V13.9688H8.01562V0ZM0 13.9688V0H3.98438V13.9688H0Z" fill="#021123" />
    </Svg>
  );
};

export const IconCheck = ({ checked }) => {

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="12" fill={checked ? "#00F4BF" : "white"} />
      <Path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#021123" />
    </Svg>
  )
};

export const IconEdit = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" >
      <Circle cx="16" cy="16" r="15.5" stroke="#021123" />
      <Path d="M24.7188 11.0312L22.8906 12.8594L19.1406 9.10938L20.9688 7.28125C21.1562 7.09375 21.3906 7 21.6719 7C21.9531 7 22.1875 7.09375 22.375 7.28125L24.7188 9.625C24.9062 9.8125 25 10.0469 25 10.3281C25 10.6094 24.9062 10.8438 24.7188 11.0312ZM7 21.25L18.0625 10.1875L21.8125 13.9375L10.75 25H7V21.25Z" fill="#021123" />
    </Svg>
  )
};

export const IconPlus = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path d="M15 10.9688V9H10.9688V4.96875H9V9H4.96875V10.9688H9V15H10.9688V10.9688H15ZM2.90625 2.95312C4.875 0.984375 7.23438 0 9.98438 0C12.7344 0 15.0781 0.984375 17.0156 2.95312C18.9844 4.89062 19.9688 7.23438 19.9688 9.98438C19.9688 12.7344 18.9844 15.0938 17.0156 17.0625C15.0781 19 12.7344 19.9688 9.98438 19.9688C7.23438 19.9688 4.875 19 2.90625 17.0625C0.96875 15.0938 0 12.7344 0 9.98438C0 7.23438 0.96875 4.89062 2.90625 2.95312Z" fill="#B872FF" />
    </Svg>
  )
}

export const IconTrashCircle = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" >
      <Path d="M14.875 8L14.0625 8.8H10V10.4H12.4375H20.5625H23V8.8H18.9375L18.125 8H14.875ZM10.8125 12V22.4C10.8125 23.28 11.5437 24 12.4375 24H20.5625C21.4563 24 22.1875 23.28 22.1875 22.4V12H10.8125Z" fill="#021123" />
      <Circle cx="16" cy="16" r="15.5" stroke="#021123" />
    </Svg>
  )
};

export const IconArrowBack = () => {

  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path d="M21.375 9.375V12H5.125L12.5625 19.5L10.6875 21.375L0 10.6875L10.6875 0L12.5625 1.875L5.125 9.375H21.375Z" fill="white" />
    </Svg>

  )
}

export const FokusLogo = () => {
  return (
    <Svg
      width={157}
      height={40}
      viewBox="0 0 157 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Path fill="url(#pattern0_3717_508)" d="M0 0H156.364V40H0z" />
      <Defs>
        <Pattern
          id="pattern0_3717_508"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_3717_508"
            transform="matrix(.00415 0 0 .01622 0 -.051)"
          />
        </Pattern>
        <Image
          id="image0_3717_508"
          width={241}
          height={68}
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}