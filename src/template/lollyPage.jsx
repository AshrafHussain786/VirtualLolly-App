import React from "react";
import Lolly from '../component/Lolly'


export default function LollyPage(lolly) {

  console.log(lolly)
  return (
    <div>

            <Header
        mainHeadingText="Want more sweet?"
        secondaryHeadingText="You recieved a lolly, dont eat it alone !"
      />
      <h5 className="sharableLinkContainer">Your sharable link: </h5>{" "}
      <span className="sharableLink">
        {" "}
        {`https://hungry-panini-6d5d70.netlify.app/lolly/${lolly.path}`}
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
