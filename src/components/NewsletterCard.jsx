import React, { useState } from "react";

export default function NewsletterCard() {
  return (
    <>
      <iframe
        src="https://ashwinmaurya.substack.com/embed"
        width="100%"
        height="100%"
        style={{
          fontSize: "25px !important",
        }}
        className="scale-150 max-sm:scale-100"
        frameborder="0"
      ></iframe>
    </>
  );
}
