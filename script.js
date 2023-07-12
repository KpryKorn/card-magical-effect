const wand = document.getElementById("wand");

window.onmousemove = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const wandX = window.innerWidth * -0.15 + mouseX * 1.3;
  const wandY = window.innerHeight * 0.1 + mouseY * 0.4;
  const mouseXAsDecimal = mouseX / window.innerWidth;

  wand.animate(
    {
      left: `${wandX}px`,
      top: `${wandY}px`,
      rotate: `${-10 + 20 * mouseXAsDecimal}deg`,
    },
    {
      duration: 400,
      fill: "forwards",
    }
  );

  const tiles = document.getElementsByClassName("tile");

  for (const tile of tiles) {
    const dimensions = tile.getBoundingClientRect();

    const relativeWandX = wandX - dimensions.left,
      relativeWandXAsDecimal = relativeWandX / dimensions.width;

    const opacity = relativeWandXAsDecimal,
      blur = 1 - relativeWandXAsDecimal;

    tile.style.setProperty("--opacity", opacity);
    tile.style.setProperty("--blur", blur);
  }
};
