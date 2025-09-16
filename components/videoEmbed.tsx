"use client";
import { useState } from "react";

export default function VideoEmbed({embedCode, thumbnailImage} : {embedCode : any, thumbnailImage: string}) {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <div>
      {!showEmbed && (
        <div onClick={() => setShowEmbed(true)} className="cursor-pointer">
          <img src={thumbnailImage} alt="thumbnail" />
        </div>
      )}
      {showEmbed && (
        <div>
          {embedCode}
        </div>
      )}
    </div>
  );
}
