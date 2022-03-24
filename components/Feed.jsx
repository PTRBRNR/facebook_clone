import React from "react";
import Stories from "./Stories";

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      {/*Stories */}
      <div>
        <Stories className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl" />
      </div>

      {/*InputBox */}
      {/* Posts */}
    </div>
  );
}

export default Feed;
