import React, { useEffect } from "react";
export default function Settings({
  characterData,
  handleGender,
  handleFaceColor,
  handleEarSize,
  handleEyeStyle,
  handleMouthStyle,
  handleNoseStyle,
  handleShirtStyle,
  handleGlassesStyle,
  handleHairColor,
  handleHairStyle,
  handleHairStyleColor,
  handleHatColor,
  handleEyeBrowStyle,
  handleShirtColor,
  handleBgColor,
}) {
  useEffect(() => {}, [characterData]);
  return (
    <div
      className="
      
        "
    >
      <form>
        <label>Gender</label>
        <select value={characterData.sex} onChange={handleGender}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label>Face Color</label>
        <select value={characterData.faceColor} onChange={handleFaceColor}>
          <option value="skin">Skin</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="brown">Brown</option>
          <option value="yellow">Yellow</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <label>Ear Size</label>
        <select value={characterData.earSize} onChange={handleEarSize}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <label>Eye Style</label>
        <select value={characterData.eyeStyle} onChange={handleEyeStyle}>
          <option value="circle">Circle</option>
          <option value="oval">Oval</option>
          <option value="round">Round</option>
          <option value="up">Up</option>
          <option value="down">Down</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="upleft">Up Left</option>
          <option value="upright">Up Right</option>
          <option value="downleft">Down Left</option>
          <option value="downright">Down Right</option>
        </select>
        <label>Mouth Style</label>
        <select value={characterData.mouthStyle} onChange={handleMouthStyle}>
          <option value="smile">Smile</option>
          <option value="frown">Frown</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="up">Up</option>
          <option value="down">Down</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="upleft">Up Left</option>
          <option value="upright">Up Right</option>
          <option value="downleft">Down Left</option>
          <option value="downright">Down Right</option>
        </select>
        <label>Nose Style</label>
        <select value={characterData.noseStyle} onChange={handleNoseStyle}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <label>Shirt Style</label>
        <select value={characterData.shirtStyle} onChange={handleShirtStyle}>
          <option value="short">Short</option>
          <option value="long">Long</option>
          <option value="tank">Tank</option>
          <option value="sleeveless">Sleeveless</option>
          <option value="hoodie">Hoodie</option>
          <option value="sweater">Sweater</option>
          <option value="jacket">Jacket</option>
          <option value="dress">Dress</option>
        </select>
        <label>Glasses Style</label>
        <select
          value={characterData.glassesStyle}
          onChange={handleGlassesStyle}
        >
          <option value="none">None</option>
          <option value="round">Round</option>
          <option value="square">Square</option>
          <option value="rectangle">Rectangle</option>
          <option value="oval">Oval</option>
          <option value="triangle">Triangle</option>
          <option value="heart">Heart</option>
          <option value="star">Star</option>
          <option value="diamond">Diamond</option>
          <option value="cross">Cross</option>
          <option value="crown">Crown</option>
          <option value="flower">Flower</option>
          <option value="leaf">Leaf</option>
          <option value="moon">Moon</option>
          <option value="sun">Sun</option>
          <option value="snowflake">Snowflake</option>
          <option value="snowman">Snowman</option>
          <option value="skull">Skull</option>
          <option value="alien">Alien</option>
          <option value="robot">Robot</option>
        </select>
        <label>Hair Color</label>
        <select value={characterData.hairColor} onChange={handleHairColor}>
          <option value="black">Black</option>
          <option value="brown">Brown</option>
          <option value="blonde">Blonde</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="white">White</option>
          <option value="grey">Grey</option>
          <option value="silver">Silver</option>
        </select>
        <label>Hair Style</label>
        <select value={characterData.hairStyle} onChange={handleHairStyle}>
          <option value="none">None</option>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
          <option value="bald">Bald</option>
          <option value="balding">Balding</option>
          <option value="bun">Bun</option>
          <option value="ponytail">Ponytail</option>
          <option value="mohawk">Mohawk</option>
          <option value="mohawk-thin">Mohawk Thin</option>
        </select>
        <label>Hat Color</label>
        <select value={characterData.hatColor} onChange={handleHatColor}>
          <option value="black">Black</option>
          <option value="brown">Brown</option>
          <option value="blonde">Blonde</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="white">White</option>
        </select>

        <label>Shirt Color</label>
        <select value={characterData.shirtColor} onChange={handleShirtColor}>
          <option value="black">Black</option>
          <option value="brown">Brown</option>
          <option value="blonde">Blonde</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="white">White</option>
          <option value="grey">Grey</option>
          <option value="silver">Silver</option>
        </select>

        <label>Hair Style Color</label>
        <select
          value={characterData.hairStyleColor}
          onChange={handleHairStyleColor}
        >
          <option value="black">Black</option>
          <option value="brown">Brown</option>
          <option value="blonde">Blonde</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
        </select>
        {/* handle eye brow style */}

        <label>Eye Brow Style</label>
        <select
          value={characterData.eyeBrowStyle}
          onChange={handleEyeBrowStyle}
        >
          <option value="angry">Angry</option>
          <option value="angry-g">Angry G</option>
          <option value="angry-natural">Angry Natural</option>
          <option value="default">Default</option>
          <option value="default-natural">Default Natural</option>
          <option value="flat">Flat</option>
        </select>
      </form>
    </div>
  );
}
