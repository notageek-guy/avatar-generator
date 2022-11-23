import React, { useEffect, useState } from "react";
import { genConfig } from "react-nice-avatar";
import Character from "./components/Character";
import Download from "./components/Download";
import Settings from "./components/Settings";

export default function App() {
  const [characterData, setCharacterData] = useState({
    sex: "",
    faceColor: "",
    earSize: "",
    eyeStyle: "",
    mouthStyle: "",
    noseStyle: "",
    shirtStyle: "",
    glassesStyle: "",
    hairColor: "",
    hairStyle: "",
    hairStyleColor: "",
    hatColor: "",
    eyeBrowStyle: "",
    shirtColor: "",
    bgColor: "",
  });
  const handleGender = (e) => {
    const gender = e.target.value;
    setCharacterData({ ...characterData, gender });
  };

  const handleFaceColor = (e) => {
    const faceColor = e.target.value;
    setCharacterData({ ...characterData, faceColor });
  };
  const handleEarSize = (e) => {
    const earSize = e.target.value;
    setCharacterData({ ...characterData, earSize });
  };
  const handleEyeStyle = (e) => {
    const eyeStyle = e.target.value;
    setCharacterData({ ...characterData, eyeStyle });
  };
  const handleMouthStyle = (e) => {
    const mouthStyle = e.target.value;
    setCharacterData({ ...characterData, mouthStyle });
  };
  const handleNoseStyle = (e) => {
    const noseStyle = e.target.value;
    setCharacterData({ ...characterData, noseStyle });
  };
  const handleShirtStyle = (e) => {
    const shirtStyle = e.target.value;
    setCharacterData({ ...characterData, shirtStyle });
  };
  const handleGlassesStyle = (e) => {
    const glassesStyle = e.target.value;
    setCharacterData({ ...characterData, glassesStyle });
  };
  const handleHairColor = (e) => {
    const hairColor = e.target.value;
    setCharacterData({ ...characterData, hairColor });
  };

  const handleHairStyle = (e) => {
    const hairStyle = e.target.value;
    setCharacterData({ ...characterData, hairStyle });
  };
  const handleHairStyleColor = (e) => {
    const hairStyleColor = e.target.value;
    setCharacterData({ ...characterData, hairStyleColor });
  };
  const handleHatColor = (e) => {
    const hatColor = e.target.value;
    setCharacterData({ ...characterData, hatColor });
  };
  const handleEyeBrowStyle = (e) => {
    const eyeBrowStyle = e.target.value;
    setCharacterData({ ...characterData, eyeBrowStyle });
  };
  const handleShirtColor = (e) => {
    const shirtColor = e.target.value;
    setCharacterData({ ...characterData, shirtColor });
  };
  const handleBgColor = (e) => {
    const bgColor = e.target.value;
    setCharacterData({ ...characterData, bgColor });
  };

  const myConfig = genConfig(characterData);
  return (
    <div>
      <Character config={myConfig} />
      <Download />
      <Settings
        characterData={characterData}
        handleGender={handleGender}
        handleFaceColor={handleFaceColor}
        handleEarSize={handleEarSize}
        handleEyeStyle={handleEyeStyle}
        handleMouthStyle={handleMouthStyle}
        handleNoseStyle={handleNoseStyle}
        handleShirtStyle={handleShirtStyle}
        handleGlassesStyle={handleGlassesStyle}
        handleHairColor={handleHairColor}
        handleHairStyle={handleHairStyle}
        handleHairStyleColor={handleHairStyleColor}
        handleHatColor={handleHatColor}
        handleEyeBrowStyle={handleEyeBrowStyle}
        handleShirtColor={handleShirtColor}
        handleBgColor={handleBgColor}
      />
    </div>
  );
}
