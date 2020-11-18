import React from "react";
// import Lolly from "./lolly";
import { graphql } from "gatsby";
// import Header from "./header";


<<<<<<< HEAD
export default function LollyPage(x) {
    console.log("Value of X=====>" + x)
    console.log("DATA=====>")
=======
export default function DynamicLollyPage(data) {
    console.log("Value of data=====>" + data)
>>>>>>> ef1e4710a6fe1c08a8c94df40c92f5b00321532a
  return (
    <div>

      <h1>Hello World</h1>
            {/* <Header
        mainHeadingText="Kuch Meetha Hojaye?"
        secondaryHeadingText="You recieved a lolly, dont eat it alone !"
      />
      <h5 className="sharableLinkContainer">Your sharable link: </h5>{" "}
      <span className="sharableLink">
        {" "}
        {`http://localhost:8888//lollies/${data.LOLLIES.getLollyBySlug.path}`}
      </span>
      <div className="recievedContentContainer">
        <Lolly
          style="lollyRecieved"
          lollyTop={data.LOLLIES.getLollyBySlug.topColor}
          lollyMid={data.LOLLIES.getLollyBySlug.mediumColor}
          lollyBot={data.LOLLIES.getLollyBySlug.bottomColor}
        />

        <div className="recievedTextContainer">
          <h3>HI {data.LOLLIES.getLollyBySlug.recipientName.toUpperCase()}</h3>
          <p>{data.LOLLIES.getLollyBySlug.message}</p>
          <h4>From: {data.LOLLIES.getLollyBySlug.senderName}</h4>
        </div>
      </div> */}
    </div>
  );
}
