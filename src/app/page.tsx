import Hero from "@/components/Hero/Hero";
import CalendarDate from "@/components/CalendarDate/CalendarDate";
import FirstMoments from "@/components/FirstMoments/FirstMoments";
import PhotoBooth from "@/components/PhotoBooth/PhotoBooth";
import FavoriteMessages from "@/components/FavoriteMessages/FavoriteMessages";
import Tickets from "@/components/Tickets/Tickets";
import ImportantPlaces from "@/components/ImportantPlaces/ImportantPlaces";
import OurSongs from "@/components/OurSongs/OurSongs";
import MoviesWatched from "@/components/MoviesWatched/MoviesWatched";
import ReasonsILoveYou from "@/components/ReasonsILoveYou/ReasonsILoveYou";
import ThingsYouTaughtMe from "@/components/ThingsYouTaughtMe/ThingsYouTaughtMe";
import LoveNote from "@/components/LoveNote/LoveNote";
import NavDots from "@/components/NavDots/NavDots";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <NavDots />
      <main>
        <div id="hero"><Hero /></div>
        <div id="calendar"><CalendarDate /></div>
        <div id="first-moments"><FirstMoments /></div>
        <div id="photo-booth"><PhotoBooth /></div>
        <div id="messages"><FavoriteMessages /></div>
        <div id="tickets"><Tickets /></div>
        <div id="places"><ImportantPlaces /></div>
        <div id="songs"><OurSongs /></div>
        <div id="movies"><MoviesWatched /></div>
        <div id="reasons"><ReasonsILoveYou /></div>
        <div id="lessons"><ThingsYouTaughtMe /></div>
        <div id="love-note"><LoveNote /></div>
      </main>
      <Footer />
    </>
  );
}
