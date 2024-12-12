import { ImageContainer } from "./leftImage-style";

export const LeftImage = ({ currentDate }) => {
  const monthImages = {
    January:
      "https://media.istockphoto.com/id/1198559546/vector/winter-month-of-january-blue-cyan-lettering-text-design-with-snowflakes-and-snow-ornament.jpg?s=612x612&w=0&k=20&c=BbWBA-QKjZLqH5VfnnS3LXga6v75OKKeCfTfXTpyhi0=",
    February:
      "https://img.freepik.com/free-vector/hand-drawn-hello-february-lettering_23-2149230743.jpg?semt=ais_hybrid",
    March:
      "https://images.herzindagi.info/image/2023/Mar/march-born-personality-prediction-astro-expert.jpg",
    April:
      "https://media.istockphoto.com/id/1454224731/vector/hand-drawn-lettering-word-april-text-with-plant-sprig-month-april-festive-spring-banner.jpg?s=612x612&w=0&k=20&c=YBlaUII0brd7UYT33agWyk56cVG3OmAPPuZXgiagX4o=",
    May: "https://media.istockphoto.com/id/1304354522/vector/may-word.jpg?s=612x612&w=0&k=20&c=VdhR5QSDKkuYxzPiyqFpTgBv8OA8i_8zgaUpo8Kin_E=",
    June: "https://media.istockphoto.com/id/1396552252/vector/hello-june-watercolor-textured-simple-vector-sun-icon-vector-illustration-greeting-card-for.jpg?s=612x612&w=0&k=20&c=zyu31r2z2v-wU9aV9OLslHOXpCDL_uJT4pXy1qyDrwY=",
    July: "https://static.vecteezy.com/system/resources/previews/000/593/208/non_2x/july-typographic-design-vector.jpg",
    August:
      "https://static.vecteezy.com/system/resources/thumbnails/008/072/511/small_2x/hello-august-watercolor-textured-simple-sun-icon-illustration-greeting-card-for-august-summer-welcoming-poster-design-vector.jpg",
    September:
      "https://t4.ftcdn.net/jpg/03/67/37/01/360_F_367370175_9hiA0tBraRyrKtFYc1mObY8UGNiRqdup.jpg",
    October:
      "https://img.freepik.com/premium-vector/hand-drawn-lettering-word-october-text-with-oak-leaves-month-october-festive-autumn-banner_508396-691.jpg",
    November:
      "https://img.freepik.com/free-vector/hand-drawn-november-lettering_23-2149110153.jpg",
    December:
      "https://img.freepik.com/free-vector/hand-drawn-december-lettering_23-2149110154.jpg?semt=ais_hybrid",
  };

  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const monthImage = monthImages[currentMonth];

  return (
    <ImageContainer>
      <img
        src={monthImage}
        alt={`Image for ${currentMonth}`}
        style={{ width: "25rem", height: "25rem", borderRadius: "6.25rem" }}
      />
    </ImageContainer>
  );
};
