const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";
const mutedForest = "#3A6447";
const violetLight = "#AEB4F4";
const softOrange = "#FFB58B";
const paperJournal = "#F6EEE3";
const almostBlack = "#111111";
const burntSalmon = "#ED6954";
const pinkyBeach = "#FFCCC6";
const lushLilac = "#D3BDED";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    borders: [
      mutedForest,
      violetLight,
      softOrange,
      almostBlack,
      burntSalmon,
      lushLilac,
    ],
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    borders: [violetLight, paperJournal, pinkyBeach, lushLilac, mutedForest],
  },
  red: burntSalmon,
};
