import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Bota Doru {year}</p>
    </footer>
  );
}

export default Footer;
