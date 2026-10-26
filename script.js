
const drawButton = document.getElementById("draw-button");

if (drawButton) {

  const places = [
    {
      name: "公園",
      mission: "緑のある場所で少し休もう"
    },
    {
      name: "海辺",
      mission: "海の景色を眺めてみよう"
    },
    {
      name: "散歩道",
      mission: "いつもと違う道を歩いてみよう"
    },
    {
      name: "カフェ",
      mission: "好きな飲み物を選んでみよう"
    }
  ];

  drawButton.addEventListener("click", () => {

    const random = Math.floor(Math.random() * places.length);
    const spot = places[random];

    document.getElementById("question").textContent = "";
    document.getElementById("spot-name").textContent = spot.name;
    document.getElementById("spot-mission").textContent = spot.mission;

  });

}
