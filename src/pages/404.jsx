import React from "react"
import Lolly from "../component/lolly"
import { useQuery, gql } from "@apollo/client"

const GET_LOLLY = gql`
  query getLollyBySlug($path: String!) {
    getLollyBySlug(path: $path) {
        recipientName
        senderName
        message
        topColor
        mediumColor
        bottomColor
        path
    }
  }
`

export default function NotFound({ location }) {
  var queryLollies = location.pathname.slice(0, 9)
  var queryPath = location.pathname.slice(9)

  const { loading, error, data } = useQuery(GET_LOLLY, {
    variables: { path: queryPath },
  })
  if (error) {
    console.log("There is a Error in the page")
  }

  console.log(data)
  
  return (
    <div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : !!data && queryLollies === "/lolly/" ? (
        <div>
          <Header
            mainHeadingText="Any Thing Sweet"
            secondaryHeadingText="You recieved a lolly, dont eat it alone !"
          />
          <h5 className="sharableLinkContainer">Your sharable link: </h5>{" "}
          <span className="sharableLink">
            {" "}
            {`https://pedantic-williams-05140f.netlify.app/lolly/${data.getLollyBySlug.path}`}
          </span>
          <div className="recievedContentContainer">
            <Lolly
              style="lollyRecieved"
              lollyTop={data.getLollyBySlug.topColor}
              lollyMid={data.getLollyBySlug.mediumColor}
              lollyBot={data.getLollyBySlug.bottomColor}
            />

            <div className="recievedTextContainer">
              <h3>HI {data.getLollyBySlug.recipientName.toUpperCase()}</h3>
              <p>{data.getLollyBySlug.message}</p>
              <h4>From: {data.getLollyBySlug.senderName}</h4>
            </div>
          </div>
        </div>
      ) : (
        <div className="pageNotFound">We are deeply Sorry that the page is not found</div>
      )}
    </div>
  )
}
