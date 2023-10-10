"use client";
import { useState } from "react";

export const animatedCardHooks = () => {
  const [videoErik, setErikVideo] = useState<string>("");
  const [videoLars, setLarsVideo] = useState<string>("");

  const videochanger = (who: string) => {
    if (who == "ERIK HANSEN") {
      setErikVideo(
        "/content/movementcards/erikmoves" +
          Math.ceil(Math.random() * 2) +
          ".mp4"
      );
    } else {
      setLarsVideo(
        "/content/movementcards/larsmoves" +
          Math.ceil(Math.random() * 2) +
          ".mp4"
      );
    }
  };
  return { videoErik, setErikVideo, videoLars, setLarsVideo, videochanger };
};
