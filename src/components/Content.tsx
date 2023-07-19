import React, { useEffect, useState } from "react";
import { useLastFM } from "use-last-fm";
import "./content.css";
import LastFmBox from "./LastFmBox";

export default function Content() {
  const last_fm = useLastFM("karelorkyle", "4eb8dac2ebc6bd8b590ca50f3c13efd2");
  const [last_fm_box, update_box] = useState(<></>);

  useEffect(() => {
    console.log("Last FM info updated:");
    console.log(last_fm);
    if (last_fm.status === "playing") {
      update_box(
        <>
          <p>Right now I'm listening to ...</p>
          <LastFmBox song={last_fm.song} />
        </>
      );
    }
  }, [last_fm.status]);

  return (
    <>
      <p className="title">Hi there!</p>
      <div className="music-box">{last_fm_box}</div>
    </>
  );
}
