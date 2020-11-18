import React from "react";
import Lolly from '../component/Lolly'


export default function LollyPage(lolly) {

  return (
    <div>

      <h5 className="sharableLinkContainer">Your sharable link: </h5>{" "}
      <span className="sharableLink">
        {" "}
        {`https://pedantic-williams-05140f.netlify.app/lolly/${lolly.path}`}
      </span>
      <div className="recievedContentContainer">
        <Lolly
          fillLollyTop={lolly.topColor}
          fillLollyMiddle={lolly.mediumColor}
          fillLollyBottom={lolly.bottomColor}
        />

        <div className="recievedTextContainer">
          <h3>HI {lolly.recipientName.toUpperCase()}</h3>
          <p>{lolly.message}</p>
          <h4>From: {lolly.senderName}</h4>
        </div>
      </div>
    </div>
  );
}
