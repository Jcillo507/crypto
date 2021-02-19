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

export const turnIntoLink = (text) => {
  const urlFilter = /\[([^\][]*)]\(((?:https?|ftps?|file):\/\/[^()]*)\)/gi;
  return text.replace(urlFilter, '<a href="$2">$1</a>');
};
export const turnIntoDate = (text) => {
  const rawDate = text.substring(0, text.length - 10);
  const formattedDate = rawDate.substr(5) + "-" + rawDate.substr(0, 4);
  return formattedDate;
};
