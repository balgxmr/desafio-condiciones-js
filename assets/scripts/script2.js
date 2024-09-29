/* Problema #2 */
const btnSticker = document.querySelector("#btnSticker");
const infoSticker = document.querySelector("#infoSticker");

btnSticker.addEventListener("click", () => {
  const cantStickerUno = Number(document.querySelector("#stickerUno").value);
  const cantStickerDos = Number(document.querySelector("#stickerDos").value);
  const cantStickerTres = Number(document.querySelector("#stickerTres").value);

  let cantStickerTotal = cantStickerUno + cantStickerDos + cantStickerTres;

  if (cantStickerTotal > 10) {
    infoSticker.innerHTML = "Llevas demasiados stickers!";
  } else if (cantStickerTotal === 0) {
    infoSticker.innerHTML = "No estás llevando ningún sticker!";
  } else {
    infoSticker.innerHTML = "Llevas " + cantStickerTotal + " sticker(s).";
  }
});
