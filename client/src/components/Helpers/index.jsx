import React from "react";

export const titleShort = (title) => {
  if (title.includes("Messari")) {
    const result = title.substring(35);
    if (result.length === 0) {
      return "Cryptocurrency Brief";
    } else {
      return result;
    }
  } else {
    return title;
  }
};
export const contentShort = (content, url) => {
  if (content.length > 200) {
    return (
      <div>
        {content.substring(0, 200)}
        {"... "} <a href={url}>Read More</a>
      </div>
    );
  }
};
