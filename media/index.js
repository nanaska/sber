import media1 from "./media-1.jpg";
import media2 from "./media-2.jpg";
import media3 from "./media-3.jpg";
import media4 from "./media-4.jpg";
import media5 from "./media-5.jpg";
import media6 from "./media-6.jpg";
import media7 from "./media-7.jpg";
import media8 from "./media-8.jpg";

export const media = [media1, media2, media3, media4, media5,media6,media7,media8];
export const mediaByIndex = index => media[index % media.length];
